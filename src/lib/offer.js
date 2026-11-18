/* The seal in the hero asks the free-session gift to open; the gift component registers the handler. */
let opener = null;
export const setOfferOpener = (fn) => { opener = fn; };
export const openOffer = (fromEl) => opener?.(fromEl);
