export default function ExternalLink({ href, children }) {
  const handleClick = (event) => {
    if (href.startsWith("mailto:")) {
      // mailto
      event.preventDefault(); // stoppe le comportement par défaut
      window.open(href, "_blank"); // ouvre l'url dans un nouvel onglet
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      target="_blank"
      //  noopener  = empeche window.opener  (tabnabbing)
      //  noreferrer  = pas d'envoi HTTP Referer dans l'en-tête (confidentialité)
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
