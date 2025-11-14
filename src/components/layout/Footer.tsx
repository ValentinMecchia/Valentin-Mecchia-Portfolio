function Footer() {
  return (
    <footer className="border-t-2 border-[rgb(34,34,34)] bg-black">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <h3 className="text-white font-figtree font-medium text-lg mb-4">
              Valentín Mecchia
            </h3>
            <p className="text-white/75 font-figtree text-sm">
              Software Engineer
            </p>
          </div>

          {/* Middle Section */}
          <div>
            <h4 className="text-white font-figtree font-medium text-lg mb-4">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              <a
                href="/"
                className="text-white/75 hover:text-white transition-colors duration-200 text-sm"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-white/75 hover:text-white transition-colors duration-200 text-sm"
              >
                About
              </a>
              <a
                href="/blog"
                className="text-white/75 hover:text-white transition-colors duration-200 text-sm"
              >
                Blog
              </a>
              <a
                href="/contact"
                className="text-white/75 hover:text-white transition-colors duration-200 text-sm"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Right Section */}
          <div>
            <h4 className="text-white font-figtree font-medium text-lg mb-4">
              Socials
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:contact@example.com"
                className="text-white/75 hover:text-white transition-colors duration-200 text-sm"
              >
                Email
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/75 hover:text-white transition-colors duration-200 text-sm"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/75 hover:text-white transition-colors duration-200 text-sm"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-white/75 hover:text-white transition-colors duration-200 text-sm"
              >
                CV
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t-2 border-[rgb(34,34,34)] mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/75">
            <p>
              <a
                href="https://www.flaticon.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Logo by flaticon
              </a>
            </p>
            <p>
              <a
                href="https://x.com/xlauncherx7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Visioned and Crafted by <span className="text-white">Kanishk Dubey</span>
              </a>
            </p>
            <p>© All right reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
