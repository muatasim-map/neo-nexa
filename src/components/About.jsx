import { useRef } from 'react';
import { Icon, Draw } from './Icon.jsx';
import { Reveal } from './Reveal.jsx';
import { SectionHeading } from './Heading.jsx';
import { Divider } from './Tuition.jsx';
import { fine } from '../lib/env.js';
import { play } from '../lib/motion.js';

const CHIPS = [['classroom-book', 'Barking Riverside classroom'], ['screen', 'Online GCSE'], ['rover-icon', 'Robotics']];

export function About() {
  const panel = useRef(null);
  const fold = () => play(panel.current, [{ transform: 'rotateY(0deg)' }, { transform: 'rotateY(-60deg)', offset: 0.33 }, { transform: 'rotateY(0deg)' }]);
  return (
    <>
      <Divider />
      <section className="wrap band about" id="about" aria-labelledby="about-title">
        <Reveal as="div" delay={0} className="about-photo">
          <img src="/img/gallery-3.webp" alt="A person writing science notes on a classroom whiteboard" width="765" height="1020" loading="lazy" />
          <div className="v2-badge" aria-hidden="true">
            <svg viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="58" fill="#fde9c7" stroke="#e9c37f" />
              <circle cx="60" cy="60" r="36" fill="#fff6e6" stroke="#ecc98a" />
              <path id="v2-badge-ring" d="M60 14a46 46 0 1 1 0 92a46 46 0 1 1 0-92" fill="none" />
              <g className="ring-text"><text><textPath href="#v2-badge-ring" textLength="282" lengthAdjust="spacing">YEARS IN BARKING RIVERSIDE • LOCAL • FRIENDLY •</textPath></text></g>
              <text className="core" x="60" y="71" textAnchor="middle">3+</text>
            </svg>
          </div>
        </Reveal>
        <div className="about-copy">
          <SectionHeading id="about-title" eyebrow="About us">A classroom in your community</SectionHeading>
          <Reveal as="p" delay={70}>NEXA360 has provided classroom tuition in Barking Riverside for over three years. Our team pairs structured worksheets, whiteboard explanations and laptop-based learning with patient, respectful guidance.</Reveal>
          <Reveal as="p" delay={140}>We also offer online GCSE tuition, with a choice of tutors and learning formats, and a beginner robotics workshop that introduces circuits, programming and sensors.</Reveal>
          <ul className="v2-chips" aria-label="What we offer">
            {CHIPS.map(([id, label]) => <li key={id}><Icon id={id} />{label}</li>)}
          </ul>
          <Reveal as="a" delay={210} className="text-link" href="#reviews">Read the Google reviews <Icon id="arrow-right" /></Reveal>
          <Reveal as="a" delay={280} className="text-link about-location" href="#contact"
            onPointerEnter={() => { if (fine) fold(); }}
            onFocus={(e) => { if (e.currentTarget.matches(':focus-visible')) fold(); }}>
            <span className="map-fold">
              <Draw>
                <path className="icon-wash" d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3z" />
                <path d="M9 3v15m-3-5 3-2 6 3 3-2" />
                <path className="map-panel" ref={panel} d="M15 6v15m0 0 6-3V3" />
              </Draw>
            </span>
            Ask for Barking Riverside directions
          </Reveal>
        </div>
      </section>
    </>
  );
}
