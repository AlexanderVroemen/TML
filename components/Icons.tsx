export function Arrow({ direction = "right" }: { direction?: "right" | "down" }) {
  return <svg className={`icon icon-${direction}`} viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

export function MenuIcon({ open }: { open: boolean }) {
  return <svg className="menu-icon" viewBox="0 0 24 24" aria-hidden="true">{open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 7h18M3 17h18" />}</svg>;
}

export function PhoneIcon() {
  return <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3H4a1 1 0 0 0-1 1c0 9.39 7.61 17 17 17a1 1 0 0 0 1-1v-3l-4-2-2 2c-3.8-1.4-6.6-4.2-8-8l2-2-2-4Z" /></svg>;
}

export function MailIcon() {
  return <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18v14H3zM3 6l9 7 9-7" /></svg>;
}
