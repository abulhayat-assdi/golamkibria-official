import { Link } from 'react-router-dom';
import { useBlogs } from '../../hooks/useBlogs';
import { auth, db } from '../../config/firebase';
import { signOut } from 'firebase/auth';
import { deleteDoc, doc, addDoc, collection, query, where, getDocs } from 'firebase/firestore';

import { FaPlus, FaEdit, FaTrash, FaSignOutAlt } from 'react-icons/fa';

const Dashboard = () => {
    const { blogs, loading } = useBlogs();

    const handleLogout = () => {
        signOut(auth);
    };



    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            try {
                await deleteDoc(doc(db, 'blogs', id));
                alert('Blog deleted successfully!');
            } catch (error) {
                console.error('Error deleting document: ', error);
                alert('Error deleting blog');
            }
        }
    };

    if (loading) return <div className="p-10 text-center">Loading dashboard...</div>;

    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-10 pt-32">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex flex-col gap-6 items-start mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
                    <div className="flex gap-4">
                        <Link
                            to="/admin/new"
                            className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition"
                        >
                            <FaPlus /> New Post
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
                        >
                            <FaSignOutAlt /> Logout
                        </button>
                    </div>
                </div>

                {/* Blog List */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b">
                            <tr>
                                <th className="p-4 font-semibold text-gray-600">Title</th>
                                <th className="p-4 font-semibold text-gray-600">Date</th>
                                <th className="p-4 font-semibold text-gray-600">Category</th>
                                <th className="p-4 font-semibold text-gray-600 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.map((blog) => (
                                <tr key={blog.id} className="border-b hover:bg-gray-50">
                                    <td className="p-4 font-medium text-gray-800">{blog.title}</td>
                                    <td className="p-4 text-gray-500">{blog.date}</td>
                                    <td className="p-4">
                                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                            {blog.category}
                                        </span>
                                        {!isNaN(blog.id) && (
                                            <span className="ml-2 bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                                                Static
                                            </span>
                                        )}
                                    </td>
                                    <td className="p-4 text-right">
                                        {isNaN(blog.id) ? (
                                            <div className="flex items-center justify-end gap-3">
                                                <Link
                                                    to={`/admin/edit/${blog.id}`}
                                                    className="text-blue-600 hover:text-blue-800"
                                                >
                                                    <FaEdit size={18} />
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(blog.id)}
                                                    className="text-red-600 hover:text-red-800"
                                                >
                                                    <FaTrash size={18} />
                                                </button>
                                            </div>
                                        ) : (
                                            <span className="text-xs text-gray-400">Read-only</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                            {blogs.length === 0 && (
                                <tr>
                                    <td colSpan="4" className="p-8 text-center text-gray-500">
                                        No blog posts found. Create one!
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
