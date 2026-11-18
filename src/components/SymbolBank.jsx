import badges from '../art/badges.svg?raw';
import subjects from '../art/subjects.svg?raw';
import workshop from '../art/workshop-icons.svg?raw';

/** Every shared <symbol> the page uses, defined once at the top of <body>. */
export function SymbolBank() {
  return (
    <>
      <svg className="symbol-bank" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <symbol id="arrow-right" viewBox="0 0 24 24"><path d="M4 12h15m-6-6 6 6-6 6" /></symbol>
        <symbol id="arrow-left" viewBox="0 0 24 24"><path d="M20 12H5m6-6-6 6 6 6" /></symbol>
        <symbol id="arrow-out" viewBox="0 0 24 24"><path d="M6 18 18 6M8 6h10v10" /></symbol>
        <symbol id="menu-lines" viewBox="0 0 24 24"><path d="M4 8h16M4 16h16" /></symbol>
        <symbol id="close-icon" viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18" /></symbol>
        <symbol id="classroom-book" viewBox="0 0 24 24"><path className="icon-wash" d="M12 6.5c-2.5-2-5.1-2.7-9-2v13c3.5-.6 6.1.1 9 2 2.9-1.9 5.5-2.6 9-2v-13c-3.9-.7-6.5 0-9 2Z" /><path d="M12 6.5v13M6.1 8.6c1.3-.1 2.2.1 3.2.6m-3.2 3c1.3-.1 2.2.1 3.2.6m5.4-3.6c1-.5 1.9-.7 3.2-.6" /></symbol>
        <symbol id="screen" viewBox="0 0 24 24"><rect className="icon-wash" x="4" y="4.5" width="16" height="12" rx="2" /><path d="M2.5 19.5h19M7.5 8h5m-5 3h3m4 .7 2.6 2.5m-2.6-2.5v2.7" /></symbol>
        <symbol id="rover-icon" viewBox="0 0 24 24"><path className="icon-wash" d="M3.5 16v-3.5c0-1.1.9-2 2-2h8l2.3-4H19l1.5 2.5v7Z" /><path d="M16 6.5v-3m0 0h2.5m-3.3 7.5H18m-11 2.5h3" /><circle className="icon-wash" cx="7" cy="17.3" r="2.3" /><circle className="icon-wash" cx="17.5" cy="17.3" r="2.3" /></symbol>
        <symbol id="arrow-up" viewBox="0 0 24 24"><path d="M12 20V4m-6 6 6-6 6 6" /></symbol>
        <symbol id="mail-icon" viewBox="0 0 24 24"><rect className="icon-wash" x="3" y="5.5" width="18" height="13" rx="2" /><path d="m4 7 8 6 8-6" /></symbol>
        <symbol id="plane-icon" viewBox="0 0 24 24"><path className="icon-wash" d="m3 10.5 18-6-5.8 16-3.4-6.8L3 10.5Z" /><path d="M11.8 13.7 21 4.5" /></symbol>
      </svg>
      {/* illustration sprites: tutor badges, subject icons and the workshop icons */}
      <div aria-hidden="true" style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
        dangerouslySetInnerHTML={{ __html: badges + subjects + workshop }} />
    </>
  );
}
