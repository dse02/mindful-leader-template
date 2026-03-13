import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./i18n/LanguageContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProFirmy from "./pages/ProFirmy";
import ProJednotlivce from "./pages/ProJednotlivce";
import Koucink from "./pages/Koucink";
import OtevreneWorkshopy from "./pages/OtevreneWorkshopy";
import RozhovoryKtereRozhoduji from "./pages/RozhovoryKtereRozhoduji";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OchranaOsobnichUdaju from "./pages/OchranaOsobnichUdaju";
import ObchodniPodminky from "./pages/ObchodniPodminky";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppRoutes = () => (
  <LanguageProvider>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pro-firmy" element={<ProFirmy />} />
        <Route path="/pro-jednotlivce" element={<ProJednotlivce />} />
        <Route path="/koucink" element={<Koucink />} />
        <Route path="/otevrene-workshopy" element={<OtevreneWorkshopy />} />
        <Route path="/rozhovory-ktere-rozhoduji" element={<RozhovoryKtereRozhoduji />} />
        <Route path="/o-mne" element={<About />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/ochrana-osobnich-udaju" element={<OchranaOsobnichUdaju />} />
        <Route path="/obchodni-podminky" element={<ObchodniPodminky />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </LanguageProvider>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/en/*" element={<AppRoutes />} />
          <Route path="/*" element={<AppRoutes />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
