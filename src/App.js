import logo from "./logo.svg";
import "./App.css";
import "./index.css"; // or './tailwind.css'
import StickyHeader from "./components/StickyHeader";
import Hero from "./components/Hero";
import SkillsPage from "./components/SkillsPage";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <section class="min-h-screen bg-gray-50">
      <StickyHeader />
      <Hero />
      <SkillsPage />
      <Projects />
      <Footer />
    </section>
  );
}

export default App;
