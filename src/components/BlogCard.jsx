import { FaCalendarAlt } from 'react-icons/fa';

const BlogCard = ({ blog, onReadMore }) => {
    return (
        <div
            onClick={() => onReadMore(blog)}
            className="bg-white rounded-2xl overflow-hidden shadow-lg card-shadow-hover hover-scale transition-default h-full flex flex-col cursor-pointer group/card"
        >
            {/* Blog Image */}
            <div className="relative h-48 overflow-hidden flex-shrink-0">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-110"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Blog Content */}
            <div className="p-6 space-y-4 flex flex-col flex-grow">
                {/* Meta Information */}
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FaCalendarAlt className="text-primary-500" />
                    <span>{blog.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 line-clamp-2 group-hover/card:text-primary-600 transition-default">
                    {blog.title}
                </h3>

                {/* Excerpt */}
                {blog.excerpt && (
                    <p className="text-gray-600 line-clamp-3 mb-auto">{blog.excerpt}</p>
                )}

                {/* Read More Link */}
                <button
                    className="text-primary-600 font-semibold group-hover/card:text-secondary-600 transition-default flex items-center gap-2 group mt-4 pt-4 border-t w-full"
                >
                    Read More
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
            </div>
        </div>
    );
};

export default BlogCard;
