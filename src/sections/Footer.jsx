"use client";

export default function Footer() {
  return (
    <footer className="w-full mt-[-25]">
      {/* Shadow separator */}
      <div className="h-px w-full shadow-[0_-1px_12px_rgb(221,74,255)] dark:shadow-[0_-1px_12px_rgb(100,220,255)]" />

      <div className="container mx-auto max-w-7xl px-1 py-8 flex flex-col md:flex-row items-center justify-between gap-0">
        {/* Left */}
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Supriya Srivastava
        </p>

        {/* Right */}
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
        
          <a
            href="#experience"
            className="hover:text-foreground transition-colors"
          >
            Work
          </a>
          <a
            href="#about"
            className="hover:text-foreground transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
