/* Particle effects shared by the whole page. <FxCanvas/> installs the engine; until then (or under
   reduced motion) every call is a harmless no-op. */
let engine = null;
export const setFx = (e) => { engine = e; };
export const fx = {
  sparkle: (...a) => engine?.sparkle(...a),
  burst: (...a) => engine?.burst(...a),
  rain: (...a) => engine?.rain(...a),
};
