// import React from 'react';
// import HeroSection from '../components/HeroSection';
// import StatsSection from '../components/StatsSection';
// import VideoSection from '../components/VideoSection';
// import TestimonialsSection from '../components/TestimonialsSection';
// import ChallengesSection from '../components/ChallengesSection';
// import WhyChooseSection from '../components/WhyChooseSection';
// import EducationTypesSection from '../components/EducationTypesSection';
// import HowWorksSection from '../components/HowWorksSection';
// import AdminDashboardSection from '../components/AdminDashboardSection';
// import PersonalizedLearningSection from '../components/PersonalizedLearningSection';
// import FeaturesSection from '../components/FeaturesSection';
// import EdInaiSection from '../components/EdInaiSection';
// import AiTeachersSection from '../components/AiTeachersSection';
// import ImplementationSection from '../components/ImplementationSection';
// import KeyFeaturesSection from '../components/KeyFeaturesSection';
// import WhyChooseUsSection from '../components/WhyChooseUsSection';
// import FAQSection from '../components/FAQ';
// import Foot from '../components/Foot';

// const Home = () => {
//   return (
//     <>
//       <HeroSection />
//       <StatsSection />
//       <ChallengesSection />
//       <FeaturesSection />
//       <EdInaiSection />
//       <AiTeachersSection />
//       <ImplementationSection />
//       <KeyFeaturesSection />
//       <WhyChooseSection />
//       <EducationTypesSection />
//       <HowWorksSection />
//       <AdminDashboardSection />
//       <PersonalizedLearningSection />
//       <VideoSection />
//       <TestimonialsSection />
//       <WhyChooseUsSection />
//       <FAQSection />
//       <Foot />
//     </>
//   );
// };

// export default Home;














import React, { useState, useEffect, lazy, Suspense } from 'react';

// Lazy load components for better performance
const HeroSection = lazy(() => import('../components/HeroSection'));
const StatsSection = lazy(() => import('../components/StatsSection'));
const VideoSection = lazy(() => import('../components/VideoSection'));
const TestimonialsSection = lazy(() => import('../components/TestimonialsSection'));
const ChallengesSection = lazy(() => import('../components/ChallengesSection'));
const WhyChooseSection = lazy(() => import('../components/WhyChooseSection'));
const EducationTypesSection = lazy(() => import('../components/EducationTypesSection'));
const HowWorksSection = lazy(() => import('../components/HowWorksSection'));
const AdminDashboardSection = lazy(() => import('../components/AdminDashboardSection'));
const PersonalizedLearningSection = lazy(() => import('../components/PersonalizedLearningSection'));
const FeaturesSection = lazy(() => import('../components/FeaturesSection'));
const EdInaiSection = lazy(() => import('../components/EdInaiSection'));
const AiTeachersSection = lazy(() => import('../components/AiTeachersSection'));
const ImplementationSection = lazy(() => import('../components/ImplementationSection'));
const KeyFeaturesSection = lazy(() => import('../components/KeyFeaturesSection'));
const WhyChooseUsSection = lazy(() => import('../components/WhyChooseUsSection'));
const FAQSection = lazy(() => import('../components/FAQ'));
const Foot = lazy(() => import('../components/Foot'));
import LoadingScreen from '../components/LoadingScreen';
import DemoModal from '../components/DemoModal';

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

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Suspense fallback={<LoadingFallback />}>
      <div className="smooth-scroll">
        <HeroSection />
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
