import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import BlogCard from './BlogCard';
import BlogModal from './BlogModal';
// import { blogData } from '../data/blogData'; // Replaced by hook
import { Link } from 'react-router-dom';
import { useBlogs } from '../hooks/useBlogs';

const Blog = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);
    const { blogs } = useBlogs();

    return (
        <section id="blog" className="py-20 bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Latest Blog Posts
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mt-4"></div>
                </div>

                {/* Swiper Carousel */}
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        340: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 4,
                        },
                    }}
                    className="pb-12"
                >
                    {blogs.map((blog) => (
                        <SwiperSlide key={blog.id} className="h-auto">
                            <BlogCard
                                blog={blog}
                                onReadMore={setSelectedBlog}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* See All Blogs Button */}
                <div className="text-center mt-8">
                    <Link
                        to="/blogs"
                        className="inline-block px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        See All Blogs
                    </Link>
                </div>
            </div>

            {/* Blog Modal */}
            {selectedBlog && (
                <BlogModal
                    blog={selectedBlog}
                    onClose={() => setSelectedBlog(null)}
                />
            )}
        </section>
    );
};

export default Blog;
