/** Icon drawn from the shared symbol sprite (see SymbolBank). */
export function Icon({ id, className = 'icon', ...rest }) {
  return (
    <svg className={className} aria-hidden="true" {...rest}>
      <use href={'#' + id} />
    </svg>
  );
}

/** Inline icon with its own paths, 24x24 grid. */
export function Draw({ children, className = 'icon' }) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true">{children}</svg>;
}
