import { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import BlogModal from '../components/BlogModal';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useBlogs } from '../hooks/useBlogs';

const AllBlogs = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);
    const { blogs, loading } = useBlogs();

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 pt-28 pb-20">
            <div className="container-custom">
                {/* Header */}
                <div className="mb-12">
                    <Link to="/" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-secondary-600 transition-default mb-6 group">
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                    <div className="flex justify-between items-end">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                                All Blog Posts
                            </h1>
                            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
                        </div>
                        <Link
                            to="/login"
                            className="text-gray-500 hover:text-primary-600 font-medium text-sm border border-gray-300 rounded-full px-4 py-1 hover:border-primary-500 transition-colors"
                        >
                            Login as Admin
                        </Link>
                    </div>
                </div>

                {/* Grid */}
                {loading ? (
                    <div className="text-center py-20">Loading blogs...</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {blogs.map((blog) => (
                            <div key={blog.id} className="h-full">
                                <BlogCard
                                    blog={blog}
                                    onReadMore={setSelectedBlog}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Modal */}
            {selectedBlog && (
                <BlogModal
                    blog={selectedBlog}
                    onClose={() => setSelectedBlog(null)}
                />
            )}
        </div>
    );
};

export default AllBlogs;
