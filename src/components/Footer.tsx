import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <a href="#home" style={{ marginBottom: 12, textDecoration: "none" }}>
        Back to top
      </a>
      <img
        className="footer-logo"
        src="/signature.png"
        height={60}
        style={{ marginBottom: 12 }}
      />
      <div>Iris Yang</div>
    </footer>
  );
}
