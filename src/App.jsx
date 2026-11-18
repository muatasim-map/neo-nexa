import { SymbolBank } from './components/SymbolBank.jsx';
import { PageChrome } from './components/PageChrome.jsx';
import { FxCanvas } from './components/FxCanvas.jsx';
import { Mascot } from './components/Mascot.jsx';
import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { Tuition } from './components/Tuition.jsx';
import { GiftOffer } from './components/GiftOffer.jsx';
import { Robotics } from './components/Robotics.jsx';
import { About } from './components/About.jsx';
import { Reviews } from './components/Reviews.jsx';
import { Contact } from './components/Contact.jsx';
import { EnquiryArea } from './components/Enquiry.jsx';
import { Footer } from './components/Footer.jsx';
import { useHashRoute } from './hooks/useHashRoute.js';

export default function App() {
  const { panel, menuId } = useHashRoute();
  return (
    <>
      <SymbolBank />
      <a className="skip-link" href="#main">Skip to content</a>
      <Header current={menuId} />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Tuition />
        <GiftOffer />
        <Robotics />
        <About />
        <Reviews />
        <Contact />
        <EnquiryArea panel={panel} />
      </main>
      <Footer />
      <PageChrome />
      <Mascot />
      <FxCanvas />
    </>
  );
}
