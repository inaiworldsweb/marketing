import React, { useState, useEffect, lazy, Suspense } from "react";
import Navbar from "../components/Navbar";
import Seo from "../components/Seo";

// Lazy load components for better performance
const HeroSection = lazy(() => import("../components/HeroSection"));
const StatsSection = lazy(() => import("../components/StatsSection"));
const VideoSection = lazy(() => import("../components/VideoSection"));
const TestimonialsSection = lazy(
  () => import("../components/TestimonialsSection"),
);
const ChallengesSection = lazy(() => import("../components/ChallengesSection"));
const WhyChooseSection = lazy(() => import("../components/WhyChooseSection"));
const EducationTypesSection = lazy(
  () => import("../components/EducationTypesSection"),
);
const HowWorksSection = lazy(() => import("../components/HowWorksSection"));
const AdminDashboardSection = lazy(
  () => import("../components/AdminDashboardSection"),
);
const PersonalizedLearningSection = lazy(
  () => import("../components/PersonalizedLearningSection"),
);
const FeaturesSection = lazy(() => import("../components/FeaturesSection"));
const EdInaiSection = lazy(() => import("../components/EdInaiSection"));
const AiTeachersSection = lazy(() => import("../components/AiTeachersSection"));
const ImplementationSection = lazy(
  () => import("../components/ImplementationSection"),
);
const KeyFeaturesSection = lazy(
  () => import("../components/KeyFeaturesSection"),
);
const WhyChooseUsSection = lazy(
  () => import("../components/WhyChooseUsSection"),
);
const FAQSection = lazy(() => import("../components/FAQ"));
const Foot = lazy(() => import("../components/Foot"));
import LoadingScreen from "../components/LoadingScreen";
import DemoModal from "../components/DemoModal";

// Fallback component for lazy loading
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleOpenDemoModal = () => setIsDemoOpen(true);
    window.addEventListener("openDemoModal", handleOpenDemoModal);
    return () =>
      window.removeEventListener("openDemoModal", handleOpenDemoModal);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Suspense fallback={<LoadingFallback />}>

      <div className="smooth-scroll">
        <Seo title="India’s First Virtual AI Teachers for Schools & Coaching | ED-INAI" description="Discover India’s first Virtual AI Teachers by ED-INAI. Smart AI-powered teaching solutions for schools and coaching institutes to enhance learning and engagement." keywords="AI teachers for schools, virtual teachers India, AI education platform, AI for colleges, AI coaching software, online AI teaching system" urlSlug="/ai-teachers-for-institutions" /> 
        <Navbar onBookDemo={() => setIsDemoOpen(true)} />
        <HeroSection onBookDemo={() => setIsDemoOpen(true)} />
        <StatsSection />
        <ChallengesSection />
        <FeaturesSection onBookDemo={() => setIsDemoOpen(true)} />
        <EdInaiSection />
        <AiTeachersSection />
        <ImplementationSection />
        <KeyFeaturesSection />
        <WhyChooseSection onBookDemo={() => setIsDemoOpen(true)} />
        <EducationTypesSection onBookDemo={() => setIsDemoOpen(true)} />
        <HowWorksSection />
        <AdminDashboardSection />
        <PersonalizedLearningSection />
        <VideoSection />
        <TestimonialsSection />
        <WhyChooseUsSection onBookDemo={() => setIsDemoOpen(true)} />
        <FAQSection />
        <Foot onBookDemo={() => setIsDemoOpen(true)} />
      </div>
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </Suspense>
  );
};

export default Home;
