import { smoothScrollTo } from '../utils/smoothScroll';

const Profile = () => {

    return (
        <section id="about" className="py-20 bg-gradient-to-b from-purple-50 to-white">
            <div className="container-custom">
                <div className="bg-white rounded-3xl shadow-2xl card-shadow p-8 md:p-12 -mt-32 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        {/* Profile Image */}
                        <div className="flex justify-center lg:justify-start">
                            <div className="relative">
                                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary-200 shadow-xl">
                                    <img
                                        src="/images/profile-about.jpg"
                                        alt="Golam Kibria"
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                                    ✨
                                </div>
                            </div>
                        </div>

                        {/* About Content */}
                        <div className="lg:col-span-2 space-y-6">
                            <div>
                                <h2 className="text-4xl font-bold text-gray-800 mb-2">
                                    About Me
                                </h2>
                                <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
                            </div>

                            <p className="text-gray-600 text-lg leading-relaxed">
                                Golam Kibria holds a B.A. (Hons) and an M.A. in English from a reputed public university.
                                Later, he earned an MBA in Marketing from IBA, DU, achieving a CGPA of 3.64 out of 4.
                            </p>

                            <p className="text-gray-600 text-lg leading-relaxed">
                                He began his career as a teacher at a Cantt. Public School & College and later transitioned
                                into roles such as Merchandiser and Radio Jockey. Currently, he has been serving as a
                                Senior Assistant Vice President (SAVP) at Al-Arafah Islami Bank PLC for almost 18 years.
                            </p>

                            <p className="text-gray-600 text-lg leading-relaxed">
                                Golam Kibria is an experienced trainer and instructor, having conducted sessions at the
                                bank's training center. Most recently, he had the opportunity to train a series of
                                participants under a World Bank Project. His lucid and engaging storytelling, combined
                                with his ability to explain complex concepts in a simple manner, has made him increasingly
                                sought after for training sessions.
                            </p>



                            {/* Action Button */}
                            <div className="flex flex-wrap gap-4 pt-4">
                                <button
                                    onClick={() => smoothScrollTo('blog')}
                                    className="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-semibold hover-scale shadow-md hover:shadow-lg transition-default"
                                >
                                    See My Blog Posts
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
