import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../../config/firebase';
import { doc, getDoc, addDoc, updateDoc, collection } from 'firebase/firestore';
import { uploadToImgBB } from '../../utils/imgbb';
import { FaArrowLeft, FaSave, FaImage } from 'react-icons/fa';

const EditBlog = () => {
    const { id } = useParams(); // If id exists, it's edit mode
    const navigate = useNavigate();
    const isEditMode = !!id;

    const [formData, setFormData] = useState({
        title: '',
        excerpt: '',
        content: '',
        category: '',
        tags: '',
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        image: ''
    });

    const [imageFile, setImageFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);

    // Fetch data if edit mode
    useEffect(() => {
        if (isEditMode) {
            const fetchBlog = async () => {
                const docRef = doc(db, 'blogs', id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    // Convert tags array to string for input
                    setFormData({
                        ...data,
                        tags: data.tags.join(', ')
                    });
                }
            };
            fetchBlog();
        }
    }, [id, isEditMode]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImageFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            let imageUrl = formData.image;

            // Upload image if new file selected
            if (imageFile) {
                setUploading(true);
                imageUrl = await uploadToImgBB(imageFile);
                setUploading(false);
            }

            const blogData = {
                ...formData,
                image: imageUrl,
                tags: formData.tags.split(',').map(tag => tag.trim()), // Convert string back to array
                // ensure content is string
            };

            if (isEditMode) {
                await updateDoc(doc(db, 'blogs', id), blogData);
            } else {
                await addDoc(collection(db, 'blogs'), blogData);
            }

            navigate('/admin');
        } catch (error) {
            console.error("Error saving blog: ", error);
            alert(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-10 pt-32">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
                <div className="flex items-center justify-between mb-8">
                    <button onClick={() => navigate('/admin')} className="flex items-center gap-2 text-gray-600 hover:text-primary-600">
                        <FaArrowLeft /> Back
                    </button>
                    <h1 className="text-2xl font-bold text-gray-800">{isEditMode ? 'Edit Blog' : 'Create New Blog'}</h1>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Title */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary-500"
                            required
                        />
                    </div>

                    {/* Excerpt */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Short Description (Excerpt)</label>
                        <textarea
                            name="excerpt"
                            value={formData.excerpt}
                            onChange={handleChange}
                            rows="2"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary-500"
                        ></textarea>
                    </div>

                    {/* Category & Date */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Category</label>
                            <input
                                type="text"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Date</label>
                            <input
                                type="text"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary-500"
                            />
                        </div>
                    </div>

                    {/* Tags */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Tags (comma separated)</label>
                        <input
                            type="text"
                            name="tags"
                            value={formData.tags}
                            onChange={handleChange}
                            placeholder="Technology, Web Dev, React"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary-500"
                        />
                    </div>

                    {/* Image */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Cover Image</label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-500 transition cursor-pointer relative">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <div className="flex flex-col items-center">
                                <FaImage className="text-4xl text-gray-400 mb-2" />
                                <span className="text-gray-500">
                                    {imageFile ? imageFile.name : (formData.image ? 'Change Image' : 'Click to Upload Image')}
                                </span>
                            </div>
                        </div>
                        {formData.image && !imageFile && (
                            <div className="mt-4">
                                <p className="text-sm text-gray-500 mb-2">Current Image:</p>
                                <img src={formData.image} alt="Preview" className="h-32 rounded-lg object-cover" />
                            </div>
                        )}
                    </div>

                    {/* Content */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Content (Markdown Supported)</label>
                        <textarea
                            name="content"
                            value={formData.content}
                            onChange={handleChange}
                            rows="15"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary-500 font-mono text-sm"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full bg-primary-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-primary-700 transition flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            <FaSave /> {loading ? (uploading ? 'Uploading Image...' : 'Saving...') : 'Publish Blog Post'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditBlog;
