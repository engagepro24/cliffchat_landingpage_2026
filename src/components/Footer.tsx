import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border/50 py-12">
    <div className="container mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Cliff Chat" className="h-8 w-8 object-contain" />
          <span className="text-sm font-bold text-foreground">
            Cliff<span className="text-primary">Chat</span>
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link>
          {/* <a href="#" className="hover:text-foreground transition-colors">Contact</a> */}
        </div>

        <div className="flex items-center gap-4">
          {/* Social icons as simple SVGs */}
          {["X", "IG", "LI"].map((label) => (
            <a
              key={label}
              href="#"
              className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary hover:bg-primary/20 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-8">
        © 2026 Cliff Chat. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
