import { Toaster } from "@/components/ui/toaster";
import { HashRouter, Route, Routes } from "react-router-dom";
import PageNotFound from './lib/PageNotFound';
import ScrollToTop from './components/ScrollToTop';
import BookingPage from '@/pages/BookingPage';
import AboutPage from '@/pages/AboutPage';
import CoachProfilePage from '@/pages/CoachProfilePage';
import CoachesPage from '@/pages/CoachesPage';
import DisciplineDetailPage from '@/pages/DisciplineDetailPage';
import DisciplinesPage from '@/pages/DisciplinesPage';
import HowItWorksPage from '@/pages/HowItWorksPage';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<BookingPage />} />
        <Route path="/book" element={<BookingPage />} />
        <Route path="/coaches" element={<CoachesPage />} />
        <Route path="/coaches/:coachId" element={<CoachProfilePage />} />
        <Route path="/disciplines" element={<DisciplinesPage />} />
        <Route path="/disciplines/:slug" element={<DisciplineDetailPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster />
    </HashRouter>
  );
}

export default App