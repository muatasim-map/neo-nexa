import { Icon } from './Icon.jsx';
import { Doodles } from './Doodles.jsx';
import { Reveal } from './Reveal.jsx';
import { SectionHeading } from './Heading.jsx';
import { cx } from '../lib/env.js';
import { useInView } from '../hooks/useInView.js';
import { useOffscreenPause } from '../hooks/useOffscreenPause.js';
import divider from '../art/divider.svg?raw';

const DOODLES = [['plus', 2, 8, 16], ['star', 97, 14, 18], ['squiggle', 94, 88, 30], ['ring', 1, 80, 16]];
const COLORS = ['#9b6fd6', '#d2a24f', '#234fc9'];

/** Hand-drawn line that draws itself as it scrolls into view. */
export function Divider() {
  const [ref, seen] = useInView({ margin: '0px 0px -10% 0px' });
  return <div className={cx('v2-divider', seen && 'in')} ref={ref} aria-hidden="true" dangerouslySetInnerHTML={{ __html: divider }} />;
}

const STRIP = {
  classroom: (
    <>
      <rect className="fl" x="30" y="4" width="58" height="34" rx="3" /><rect className="ln" x="30" y="4" width="58" height="34" rx="3" />
      <path className="ln" d="M38 14h22M38 22h34M38 30h14M59 38v8M44 46h30M6 52h108M14 52V40h22v12M92 52V36h16v16" /><circle className="ln" cx="100" cy="28" r="5" />
    </>
  ),
  online: (
    <>
      <rect className="fl" x="22" y="8" width="60" height="38" rx="4" /><rect className="ln" x="22" y="8" width="60" height="38" rx="4" />
      <path className="ln" d="M12 52h80l-6-6H18zM34 20h20M34 28h30M34 36h12" />
      <path className="fl" d="M90 6h24a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-14l-6 6v-6h-4a4 4 0 0 1-4-4V10a4 4 0 0 1 4-4z" />
      <path className="ln" d="M90 6h24a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-14l-6 6v-6h-4a4 4 0 0 1-4-4V10a4 4 0 0 1 4-4zM96 16h16" />
    </>
  ),
};

function Strip({ kind }) {
  const [ref, seen] = useInView({ margin: '0px 0px -10% 0px' });
  return <svg ref={ref} className={cx('v2-strip', seen && 'in')} viewBox="0 0 120 56" aria-hidden="true">{STRIP[kind]}</svg>;
}

const TUTORS = [
  { badge: 'v2b-globe', name: 'International tutors', tag: 'Affordable', level: 1, text: 'GCSE support from international tutors.' },
  { badge: 'v2b-bus', name: 'UK-based tutors', tag: 'Mid-range', level: 2, text: 'Familiar with the UK education system and GCSE curriculum.' },
  { badge: 'v2b-crest', name: 'Oxford or Cambridge student tutors', tag: 'Premium', level: 3, text: 'Tutors currently studying at Oxford or Cambridge.' },
];

const SUBJECTS = [['v2s-maths', 'Maths'], ['v2s-science', 'Science'], ['v2s-english', 'English']];

export function Tuition() {
  const [ref, paused] = useOffscreenPause();
  return (
    <>
      <Divider />
      <section className={cx('wrap band', paused && 'v2-paused')} id="tuition" ref={ref} aria-labelledby="tuition-title">
        <Doodles list={DOODLES} colors={COLORS} />
        <div className="section-intro">
          <SectionHeading id="tuition-title" eyebrow="Programmes">Tuition programmes</SectionHeading>
          <Reveal as="p" delay={0}>Choose a classroom in Barking Riverside or GCSE lessons from home. Your first session is free with registration for either option.</Reveal>
        </div>
        <ul className="v2-subjects" aria-label="Subjects you can ask about">
          <li className="lead" aria-hidden="true" style={{ background: 'none', border: 0, boxShadow: 'none', padding: 0 }}>Ask us about</li>
          {SUBJECTS.map(([id, label]) => <li key={id}><svg aria-hidden="true"><use href={'#' + id} /></svg>{label}</li>)}
          <li><svg className="icon rover" aria-hidden="true"><use href="#rover-icon" /></svg>Robotics</li>
        </ul>
        <div className="tuition-grid">
          <Reveal as="section" delay={0} className="tuition-option classroom" id="offline" aria-labelledby="classroom-title">
            <Strip kind="classroom" />
            <h3 id="classroom-title">Classroom tuition</h3>
            <p className="programme-meta">In person in Barking Riverside, London</p>
            <p>Learn with the NEXA360 team in a supportive classroom. Sessions combine individual guidance with structured worksheets, whiteboard explanations and laptop-based learning.</p>
            <div className="programme-info">
              <h4>Subjects, year groups and times</h4>
              <p>Tell us the student’s year and the subject they need help with. We’ll discuss the available subjects, year groups and session times with you.</p>
            </div>
            <div className="programme-actions">
              <a className="button" href="#offline-registration">Enquire about classroom tuition <Icon id="arrow-right" /></a>
              <a className="text-link" href="#classroom-gallery">See the classroom</a>
            </div>
          </Reveal>
          <Reveal as="section" delay={90} className="tuition-option online" id="online" aria-labelledby="online-title">
            <Strip kind="online" />
            <h3 id="online-title">Online GCSE tuition</h3>
            <p className="programme-meta">One-to-one or group sessions</p>
            <p>Learn from home with individual support or alongside other students in a group. You can choose a tutor category when you enquire.</p>
            <dl className="tutor-list">
              {TUTORS.map((t) => (
                <div key={t.name}>
                  <dt>
                    <svg className="v2-badge-tier" aria-hidden="true"><use href={'#' + t.badge} /></svg>
                    {t.name} <span>{t.tag}</span>
                    <span className="v2-tier" aria-hidden="true">{[1, 2, 3].map((n) => <i key={n} className={n <= t.level ? 'on' : undefined} />)}</span>
                  </dt>
                  <dd>{t.text}</dd>
                </div>
              ))}
            </dl>
            <div className="programme-actions"><a className="button" href="#online-registration">Enquire about online GCSE tuition <Icon id="arrow-right" /></a></div>
          </Reveal>
          <div className="offer-trigger" aria-hidden="true" />
        </div>
      </section>
    </>
  );
}
