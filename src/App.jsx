import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Lazy load components
const Navbar = lazy(() => import('./components/Navbar'));
const Home = lazy(() => import('./pages/Home'));
const AllBlogs = lazy(() => import('./pages/AllBlogs'));
const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/admin/Dashboard'));
const EditBlog = lazy(() => import('./pages/admin/EditBlog'));
const ProtectedRoute = lazy(() => import('./components/ProtectedRoute'));
const Footer = lazy(() => import('./components/Footer'));
const ScrollToTop = lazy(() => import('./components/ScrollToTop'));

// Loading component
const LoadingSpinner = () => (
    <div className="flex items-center justify-center min-h-screen">
        <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
);

function App() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'blog', 'contact'];
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <BrowserRouter>
            <div className="min-h-screen flex flex-col">
                <Suspense fallback={<LoadingSpinner />}>
                    <Navbar activeSection={activeSection} />
                    <main className="flex-grow">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/blogs" element={<AllBlogs />} />
                            <Route path="/login" element={<Login />} />

                            {/* Admin Routes */}
                            <Route path="/admin" element={
                                <ProtectedRoute>
                                    <Dashboard />
                                </ProtectedRoute>
                            } />
                            <Route path="/admin/new" element={
                                <ProtectedRoute>
                                    <EditBlog />
                                </ProtectedRoute>
                            } />
                            <Route path="/admin/edit/:id" element={
                                <ProtectedRoute>
                                    <EditBlog />
                                </ProtectedRoute>
                            } />
                        </Routes>
                    </main>
                    <Footer />
                    <ScrollToTop />
                </Suspense>
            </div>
        </BrowserRouter>
    );
}

export default App;
