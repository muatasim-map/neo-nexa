import { useEffect, useRef, useState } from 'react';
import { Icon } from './Icon.jsx';
import { EMAIL } from './Contact.jsx';
import { reduce } from '../lib/env.js';
import { fx } from '../lib/fx.js';
import { say } from '../lib/say.js';
import { play } from '../lib/motion.js';

const ROLE = { name: 'Role', label: 'I am a', select: ['Parent or guardian', 'Student'], placeholder: 'Select a role' };
const NAME = { name: 'Name', label: 'Your name', autoComplete: 'name' };
const EMAIL_FIELD = { name: 'Email', label: 'Email address', autoComplete: 'email', type: 'email' };
const PHONE = { name: 'Phone', label: 'Phone number (optional)', autoComplete: 'tel', type: 'tel', optional: true };
const NOTES = { name: 'Additional information', label: 'Additional information (optional)', textarea: true };

/* every enquiry form: rows of fields (two side by side, or one wide) */
const FORMS = [
  {
    id: 'offline-registration', title: 'Classroom tuition enquiry',
    rows: [[ROLE, NAME], [EMAIL_FIELD, PHONE],
      [{ name: 'Student year or qualification', label: 'Student year or qualification' }, { name: 'Subject', label: 'Subject' }], [NOTES]],
  },
  {
    id: 'online-registration', title: 'Online GCSE tuition enquiry',
    rows: [[ROLE, NAME], [EMAIL_FIELD, PHONE],
      [{ name: 'Student year or qualification', label: 'Student year or qualification' }, { name: 'Subject', label: 'Subject' }],
      [{ name: 'Tutor category', label: 'Preferred tutor category', placeholder: 'Select a category', select: ['International tutors', 'UK-based tutors', 'Oxford or Cambridge student tutors', 'No preference'] },
        { name: 'Session format', label: 'Preferred session format', placeholder: 'Select a format', select: ['One-to-one', 'Group sessions', 'No preference'] }],
      [NOTES]],
  },
  {
    id: 'robotics-enquiry', title: 'Robotics enquiry',
    rows: [[ROLE, NAME], [EMAIL_FIELD, PHONE],
      [{ name: 'Delivery', label: 'Preferred delivery', placeholder: 'Select a delivery option', select: ['Online', 'Offline on demand', 'No preference'] }], [NOTES]],
  },
];

function Field({ f }) {
  return (
    <label>{f.label}
      {f.select ? (
        <select name={f.name} required defaultValue="">
          <option disabled value="">{f.placeholder}</option>
          {f.select.map((o) => <option key={o}>{o}</option>)}
        </select>
      ) : f.textarea ? (
        <textarea maxLength={600} name={f.name} rows={4} />
      ) : (
        <input name={f.name} autoComplete={f.autoComplete} type={f.type} required={!f.optional} />
      )}
    </label>
  );
}

function EnquiryForm({ config, active }) {
  const [draft, setDraft] = useState('');
  const [ready, setReady] = useState(false);
  const [version, setVersion] = useState(0);
  const form = useRef(null);
  const heading = useRef(null);
  const preview = useRef(null);
  const celebrated = useRef(false);
  const helpId = config.id + '-help', titleId = config.id + '-draft-title';

  /* a gentle shake on the first invalid field */
  useEffect(() => {
    const f = form.current;
    const onInvalid = () => {
      if (reduce || f.classList.contains('v2-shake')) return;
      f.classList.add('v2-shake'); setTimeout(() => f.classList.remove('v2-shake'), 400);
    };
    f.addEventListener('invalid', onInvalid, true);
    return () => f.removeEventListener('invalid', onInvalid, true);
  }, []);

  /* when a draft appears: focus it, slide the text in, and celebrate the first one */
  useEffect(() => {
    if (!version) return;
    heading.current?.focus();
    play(preview.current, [{ transform: 'translateY(12px)', opacity: 0.35 }, { transform: 'none', opacity: 1 }], 260);
    if (!celebrated.current) {
      celebrated.current = true;
      const r = heading.current.closest('.draft-review-box').getBoundingClientRect();
      fx.burst(r.left + r.width / 2, Math.max(60, r.top + 30), 80);
      say('Nice one! Draft ready');
    }
  }, [version]);

  function onSubmit(e) {
    e.preventDefault();
    const f = e.currentTarget;
    for (const input of f.querySelectorAll('input[required]')) input.setCustomValidity(input.value.trim() ? '' : 'Please fill in this field.');
    if (!f.reportValidity()) return;
    setDraft([...new FormData(f)].filter(([, v]) => v.trim()).map(([label, v]) => label + ': ' + v.trim()).join('\r\n'));
    setReady(true);
    setVersion((v) => v + 1);
  }

  function download() {
    const url = URL.createObjectURL(new Blob([draft], { type: 'text/plain;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url; link.download = 'nexa360-' + config.id + '.txt'; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  const mailto = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent('NEXA360 ' + config.title) + '&body=' + encodeURIComponent(draft);

  return (
    <article className="form-article" hidden={!active} id={config.id}>
      <a className="text-link enquiry-back" href="#contact"><Icon id="arrow-left" /> Back to contact</a>
      <h2>{config.title}</h2>
      <p className="email-step-notice" id={helpId}>Complete your details and review the draft. To send it to NEXA360, open it in your email app and press Send.</p>
      <form ref={form} aria-describedby={helpId} method="post" onSubmit={onSubmit}
        onInput={(e) => { e.target.setCustomValidity?.(''); setReady(false); }}>
        {config.rows.map((row, i) => row.length === 2
          ? <div className="form-row-2" key={i}>{row.map((f) => <Field key={f.name} f={f} />)}</div>
          : <Field key={i} f={row[0]} />)}
        <button type="submit">Review draft</button>
      </form>
      <section className="draft-review-box" hidden={!ready} aria-labelledby={titleId}>
        <h3 id={titleId} tabIndex={-1} ref={heading}>Your enquiry draft</h3>
        <p className="draft-preview-text" ref={preview}>{draft}</p>
        <div className="draft-actions">
          <a className="button" href={mailto}
            onClick={(e) => play(e.currentTarget.querySelector('.draft-plane'), [{ transform: 'none' }, { transform: 'translate(6px,-5px) rotate(-12deg)', opacity: 0.45 }])}>
            <span className="draft-plane"><Icon id="plane-icon" /></span>Open email draft
          </a>
          <button type="button" className="button button-secondary" onClick={download}>Download draft</button>
        </div>
        <p className="send-reminder">Open the draft in your email app, then press Send to contact NEXA360. You can also download a copy.</p>
      </section>
    </article>
  );
}

/** The three enquiry forms; only the one matching the address (#...-registration / #robotics-enquiry) shows. */
export function EnquiryArea({ panel }) {
  return (
    <section id="enquiry-area" className="enquiry-area" aria-label="Programme enquiry" hidden={!panel}>
      <div className="wrap enquiry-wrap">
        {FORMS.map((c) => <EnquiryForm key={c.id} config={c} active={panel === c.id} />)}
      </div>
    </section>
  );
}
