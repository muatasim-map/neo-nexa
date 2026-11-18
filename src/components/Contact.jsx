import { useRef, useState } from 'react';
import { Icon, Draw } from './Icon.jsx';
import { Reveal } from './Reveal.jsx';
import { SectionHeading } from './Heading.jsx';
import { play } from '../lib/motion.js';

export const EMAIL = 'info@nexa360.co.uk';

const PATHS = [
  ['#offline-registration', 'classroom-book', 'Classroom tuition enquiry'],
  ['#online-registration', 'screen', 'Online GCSE tuition enquiry'],
  ['#robotics-enquiry', 'rover-icon', 'Robotics enquiry'],
];

/** Email address with a "Copy email" button that falls back to selecting the text. */
function CopyEmail() {
  const link = useRef(null);
  const feedback = useRef(null);
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState('');

  async function copy() {
    try {
      await navigator.clipboard.writeText(link.current.textContent.trim());
    } catch {
      const selection = getSelection(), range = document.createRange();
      range.selectNodeContents(link.current);
      selection.removeAllRanges(); selection.addRange(range);
      let ok = false;
      try { ok = document.execCommand('copy'); } catch { /* not allowed here */ }
      if (!ok) { setCopied(false); setStatus('Select and copy the email address, or tap it to open your email app.'); return; }
      selection.removeAllRanges();
    }
    setCopied(true); setStatus('Email copied.');
    play(feedback.current, [{ transform: 'translateY(0) rotateX(75deg)' }, { transform: 'translateY(-4px) rotateX(0deg)', offset: 0.55 }, { transform: 'none' }], 260);
  }

  return (
    <Reveal as="div" delay={50} className="contact-action">
      <a className="text-link contact-email" ref={link} href={'mailto:' + EMAIL}>{EMAIL}</a>
      <button type="button" onClick={copy} {...(copied ? { 'data-copied': '' } : {})}>
        <span className="mail-feedback" ref={feedback}>
          <span className="mail-envelope"><Icon id="mail-icon" /></span>
          <span className="mail-check"><Draw><path d="m5 12 4 4 10-10" /></Draw></span>
        </span>
        Copy email
      </button>
      <span className="copy-status" role="status">{status}</span>
    </Reveal>
  );
}

export function Contact() {
  return (
    <section className="contact band" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact-layout">
        <div>
          <SectionHeading id="contact-title" eyebrow="Contact">Get in touch</SectionHeading>
          <Reveal as="p" delay={0}>Ask about a programme, session times or directions to the Barking Riverside classroom before you visit.</Reveal>
          <CopyEmail />
        </div>
        <div>
          <Reveal as="p" delay={100}>Choose a programme to prepare an enquiry you can send from your email app.</Reveal>
          <Reveal as="nav" delay={150} className="contact-paths" aria-label="Programme enquiries">
            {PATHS.map(([href, icon, label]) => (
              <a key={href} href={href}>
                <span className="v2-tile-icon" aria-hidden="true"><Icon id={icon} /></span>
                {label} <Icon id="arrow-right" />
              </a>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
