import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";
import { Navbar } from './components/navbar'
import Home from './pages/Home';
import Docs from './pages/Docs';
import Components from './pages/Components';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from "./pages/NotFound";
import Buttons from "./components/Components/buttons_collection/Buttons";
import Inputs from "./components/Components/inputs_collection/Inputs";
import ChecksRadiosSwitches from "./components/Components/checks-radios-switches/checks_radios_switches";
import Page from "./app/components/buttons/page";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router> 
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs/*" element={<Docs />} />
          <Route path="/components" element={<Components />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/components/button" element={<Buttons />} />
          <Route path="/components/inputs" element={<Inputs />} />
          <Route path="/components/checks-radios-switches" element={<ChecksRadiosSwitches />} />
          <Route path="/components/Page" element={<Page />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
