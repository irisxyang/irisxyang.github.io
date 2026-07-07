import React, { useState, useEffect, useCallback } from "react";
import {
  Home,
  User,
  Code2,
  MessageCircle,
  Sun,
  Moon,
  Monitor,
  PencilLine,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./SideBar.css";

type Mode = "light" | "dark" | "auto";
type NavItem = { label: string; path: string; icon: LucideIcon; key: string };

const NAV: NavItem[] = [
  { label: "Home", path: "/", icon: Home, key: "1" },
  //   { label: "About", path: "/about", icon: User, key: "2" },
  { label: "Projects", path: "/projects", icon: Code2, key: "2" },
  { label: "Blog", path: "/blog", icon: PencilLine, key: "3" },
  //   { label: "Contact", path: "/contact", icon: MessageCircle, key: "4" },
];

type SidebarProps = {
  onContactClick: () => void;
  contactOpen: boolean;
};

function SideBar({ onContactClick }: SidebarProps) {
  const { pathname } = useLocation(); // current route, updates on navigation
  const navigate = useNavigate();

  const [mode, setMode] = useState<Mode>(
    () => (localStorage.getItem("theme") as Mode) || "auto",
  );

  // LIGHT / DARK MODE
  useEffect(() => {
    const root = document.documentElement;
    const apply = () => {
      const dark =
        mode === "dark" ||
        (mode === "auto" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);
      root.setAttribute("data-theme", dark ? "dark" : "light");
    };
    apply();
    localStorage.setItem("theme", mode);
    if (mode === "auto") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      mq.addEventListener("change", apply);
      return () => mq.removeEventListener("change", apply);
    }
  }, [mode]);

  // NAVIGATION VIA KEYBOARD
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName; // grab key pressed
      if (tag === "INPUT" || tag === "TEXTAREA") return;

      if (e.key === "4") {
        e.preventDefault();
        onContactClick();
        return;
      }

      const match = NAV.find((n) => n.key === e.key); // match to nav link
      if (match) {
        e.preventDefault();
        navigate(match.path);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate, onContactClick]);

  const THEMES: { v: Mode; icon: LucideIcon; label: string }[] = [
    { v: "light", icon: Sun, label: "Light" },
    { v: "dark", icon: Moon, label: "Dark" },
    { v: "auto", icon: Monitor, label: "Auto" },
  ];

  return (
    <aside className="sidebar-container">
      <a className="sidebar-brand" href="#home">
        <img className="logo" src="/logo.svg" height={52} alt="" />
        <span>Iris Yang</span>
      </a>

      <nav className="sidebar-nav">
        {NAV.map((item) => (
          <NavBarLink
            key={item.path}
            item={item}
            isActive={pathname === item.path}
          />
        ))}
        <button className="nav-item" onClick={onContactClick}>
          <MessageCircle size={17} strokeWidth={2} className="nav-icon" />
          <span className="nav-label">Contact</span>
          {/* <MessageCircle size={17} /> <span>Contact</span>{" "} */}
          <span className="nav-badge">4</span>
        </button>
      </nav>

      <div className="theme-switch">
        {THEMES.map(({ v, icon: Icon, label }) => (
          <button
            key={v}
            className={"theme-btn" + (mode === v ? " is-active" : "")}
            onClick={() => setMode(v)}
            aria-pressed={mode === v}
          >
            <Icon size={14} strokeWidth={2} />
            {label}
          </button>
        ))}
      </div>
    </aside>
  );
}

type NavBarLinkProps = {
  item: NavItem; // the whole {label, id, icon, key} object
  isActive: boolean; // passed down from the parent
};

function NavBarLink({ item, isActive }: NavBarLinkProps) {
  const Icon = item.icon;
  return (
    <Link
      to={item.path}
      className={"nav-item" + (isActive ? " is-active" : "")}
    >
      <Icon size={17} strokeWidth={2} className="nav-icon" />
      <span className="nav-label">{item.label}</span>
      <span className="nav-badge">{item.key}</span>
    </Link>
  );
}

export default SideBar;
