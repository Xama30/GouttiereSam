export default function QuickContact({
  label = "Appeler maintenant",
  ariaLabel = "Appeler Les Entretiens Grondin",
}) {
  return (
    <a className="cta" href="tel:1-819-237-9813" aria-label={ariaLabel}>
      {label}
    </a>
  );
}
