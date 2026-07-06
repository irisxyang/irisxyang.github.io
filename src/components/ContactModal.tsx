import { useEffect } from "react";
import { X } from "lucide-react";
import { Mail, Link, FileText } from "lucide-react";
import "./ContactModal.css";

export default function ContactModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  // close on Escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null; // render nothing when closed

  return (
    <div className="modal-backdrop" onClick={onClose}>
      {/* stopPropagation: clicks INSIDE the card don't bubble to the backdrop and close it */}
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>
        <h2 className="modal-title">Contact Me</h2>
        <AboutLinks />
      </div>
    </div>
  );
}

function AboutLinks() {
  return (
    <div className="about-links">
      <a href="mailto:iris.xy.yang@gmail.com" className="about-link">
        <Mail size={24} strokeWidth={1.8} />
        <span>Email</span>
      </a>

      <a
        href="https://www.linkedin.com/in/irisxyang"
        target="_blank"
        rel="noreferrer"
        className="about-link"
      >
        <Link size={24} strokeWidth={1.8} />
        <span>LinkedIn</span>
      </a>

      <a
        href="/Iris_Yang_Resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="about-link"
      >
        <FileText size={24} strokeWidth={1.8} />
        <span>Resume</span>
      </a>
    </div>
  );
}
