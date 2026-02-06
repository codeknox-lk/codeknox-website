import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { BlogProvider } from "./contexts/BlogContext";
import { ProjectProvider } from "./contexts/ProjectContext";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import SplashScreen from "./components/SplashScreen";
import MobileErrorBoundary from "./components/MobileErrorBoundary";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProjectDashboard from "./pages/AdminProjectDashboard";
import NewsletterSubscribers from "./pages/NewsletterSubscribers";
import NotFound from "./pages/NotFound";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <MobileErrorBoundary>
      <ThemeProvider>
        <BlogProvider>
          <ProjectProvider>
              <Router>
                <ScrollToTop />
                <Layout>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/:slug" element={<ProjectDetail />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogDetail />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/terms" element={<TermsOfService />} />
                    <Route path="/cookies" element={<CookiePolicy />} />
                    <Route path="/admin" element={<AdminLogin />} />
                    <Route path="/admin/login" element={<AdminLogin />} />
                    <Route path="/admin/dashboard" element={<AdminDashboard />} />
                    <Route path="/admin/projects" element={<AdminProjectDashboard />} />
                    <Route path="/admin/subscribers" element={<NewsletterSubscribers />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Layout>
              </Router>
              <Analytics />
            </ProjectProvider>
        </BlogProvider>
      </ThemeProvider>
    </MobileErrorBoundary>
  );
}

export default App;
