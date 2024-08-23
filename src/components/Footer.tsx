import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <a href="#home" style={{ marginBottom: 8, textDecoration: "none" }}>
        Back to top
      </a>
      <img src="/signature.png" height={72} style={{ marginBottom: 8 }} />
      <div>Iris Yang</div>
    </footer>
  );
}
