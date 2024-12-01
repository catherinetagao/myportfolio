import logo from "./logo.svg";
import "./App.css";
import "./index.css"; // or './tailwind.css'
import StickyHeader from "./components/StickyHeader";
import Hero from "./components/Hero";

function App() {
  return (
    <section class="min-h-screen bg-gray-50">
      <StickyHeader />
      <Hero />
    </section>
  );
}

export default App;
