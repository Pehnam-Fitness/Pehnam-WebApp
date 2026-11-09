import { Toaster } from "@/components/ui/toaster";
import { HashRouter, Route, Routes } from "react-router-dom";
import PageNotFound from './lib/PageNotFound';
import ScrollToTop from './components/ScrollToTop';
import BookingPage from '@/pages/BookingPage';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<BookingPage />} />
        <Route path="/book" element={<BookingPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster />
    </HashRouter>
  );
}

export default App