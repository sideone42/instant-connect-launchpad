
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2 bg-white/80 dark:bg-gray-900/80 shadow-md backdrop-blur-md"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold gradient-text">InstantConnect</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="nav-link">Home</Link>
          <a href="#features" className="nav-link">Features</a>
          <Link to="/pricing" className="nav-link">Pricing</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
          <Link to="/about" className="nav-link">About</Link>
          <a href="#faq" className="nav-link">FAQ</a>
        </nav>

        {/* Right Side - Actions */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a href="#beta-signup" className="btn-primary">
            Join Beta
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg py-4 px-4 animate-fade-in">
          <nav className="flex flex-col gap-4">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="nav-link">Home</Link>
            <a href="#features" onClick={() => setIsMenuOpen(false)} className="nav-link">Features</a>
            <Link to="/pricing" onClick={() => setIsMenuOpen(false)} className="nav-link">Pricing</Link>
            <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="nav-link">Blog</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="nav-link">About</Link>
            <a href="#faq" onClick={() => setIsMenuOpen(false)} className="nav-link">FAQ</a>
            <a href="#beta-signup" onClick={() => setIsMenuOpen(false)} className="btn-primary text-center">Join Beta</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
