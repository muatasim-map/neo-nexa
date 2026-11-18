/* Nexo's speech bubble: the Mascot component registers a handler, anything can call say() */
let handler = null;
export const setSayHandler = (fn) => { handler = fn; };
export const say = (text) => { handler?.(text); };
