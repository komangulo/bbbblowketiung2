import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Matchmaking from "./pages/Matchmaking";
import Process from "./pages/Process";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import CansadoAppsCitasMatchmakingMadrid from "./pages/articles/CansadoAppsCitasMatchmakingMadrid";
import EncontrarParejaIdeal from "./pages/articles/EncontrarParejaIdeal";
import CoachingRelaciones from "./pages/articles/CoachingRelaciones";
import HistoriasExito from "./pages/articles/HistoriasExito";
import MitosAgenciasCitas from "./pages/articles/MitosAgenciasCitas";
import MatchmakingLujoMadrid from "./pages/articles/MatchmakingLujoMadrid";
import ErroresComunesBuscarPareja from "./pages/articles/ErroresComunesBuscarPareja";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/matchmaking" element={<Matchmaking />} />
            <Route path="/proceso" element={<Process />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/cansado-apps-citas-matchmaking-madrid" element={<CansadoAppsCitasMatchmakingMadrid />} />
            <Route path="/blog/como-encontrar-pareja-ideal-madrid" element={<EncontrarParejaIdeal />} />
            <Route path="/blog/coaching-relaciones-encontrar-pareja" element={<CoachingRelaciones />} />
            <Route path="/blog/historias-exito-parejas-encontraron-amor" element={<HistoriasExito />} />
            <Route path="/blog/5-mitos-agencias-citas-madrid" element={<MitosAgenciasCitas />} />
            <Route path="/blog/matchmaking-lujo-madrid" element={<MatchmakingLujoMadrid />} />
            <Route path="/blog/5-errores-comunes-buscar-pareja-madrid" element={<ErroresComunesBuscarPareja />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
