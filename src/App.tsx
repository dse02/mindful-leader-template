import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProFirmy from "./pages/ProFirmy";
import ProJednotlivce from "./pages/ProJednotlivce";
import Koucink from "./pages/Koucink";
import OtevreneWorkshopy from "./pages/OtevreneWorkshopy";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pro-firmy" element={<ProFirmy />} />
            <Route path="/pro-jednotlivce" element={<ProJednotlivce />} />
            <Route path="/koucink" element={<Koucink />} />
            <Route path="/otevrene-workshopy" element={<OtevreneWorkshopy />} />
            <Route path="/o-mne" element={<About />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
