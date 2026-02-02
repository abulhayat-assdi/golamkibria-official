import { useEffect } from 'react';
import { FaTimes, FaCalendarAlt, FaTag } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

const BlogModal = ({ blog, onClose }) => {
    // Prevent background scrolling when modal is open
    useEffect(() => {
        // Safe check for document
        if (typeof document !== 'undefined') {
            document.body.style.overflow = 'hidden';
        }

        return () => {
            if (typeof document !== 'undefined') {
                document.body.style.overflow = 'auto'; // Explicitly set to auto
            }
        };
    }, []);

    if (!blog) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in-up">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-white text-gray-800 transition-colors shadow-sm"
                >
                    <FaTimes size={20} />
                </button>

                {/* Hero Image */}
                <div className="relative h-64 md:h-80 w-full">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                        <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">
                            {blog.category}
                        </span>
                        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                            {blog.title}
                        </h2>
                    </div>
                </div>

                {/* Body */}
                <div className="p-6 md:p-10">
                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-500 border-b pb-6">
                        <div className="flex items-center gap-2">
                            <FaCalendarAlt className="text-primary-500" />
                            <span>{blog.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaTag className="text-primary-500" />
                            <div className="flex gap-2">
                                {blog.tags.map((tag, index) => (
                                    <span key={index} className="bg-gray-100 px-2 py-1 rounded text-sm text-gray-600">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-a:text-primary-600 hover:prose-a:text-primary-700">
                        <ReactMarkdown>{blog.content}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogModal;
