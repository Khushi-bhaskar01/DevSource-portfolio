import { StarField } from './components/StarField';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { TechyOverlay } from './components/TechyOverlay';
import { MatrixRain } from './components/MatrixRain';
import { EnergyWaves } from './components/EnergyWaves';
import { FloatingParticles } from './components/FloatingParticles';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <StarField />
      <MatrixRain />
      <EnergyWaves />
      <FloatingParticles />
      <TechyOverlay />
      <Navigation />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
