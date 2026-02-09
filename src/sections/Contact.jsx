"use client";

import { Mail } from "lucide-react";
import {
  SiGithub,
  SiLinkedin,
  SiLeetcode,
  SiMedium,
} from "react-icons/si";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="container mx-auto max-w-7xl px-6 c-space section-spacing"
    >
      {/* Heading */}
      <h2 className="text-heading ">Get in Touch</h2>

      <div className="p-8 mt-12 container-contact rounded-2xl">
        {/* Email */}
        <a
          href="mailto:supriyayaya10@gmail.com"
          className="inline-flex items-center gap-3 text-xl md:text-2xl font-medium 
                     text-muted-foreground hover:text-black/90 transition-colors"
        >
          <Mail className="h-6 w-6 md:h-8 md:w-8" />
          supriyayaya10@gmail.com
        </a>

        {/* Divider */}
        <div className="mt-20 h-px w-full bg-border" />

        <h3 className="mt-12 text-lg font-semibold">Socials:</h3>

        {/* Socials */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-12 max-w-xl">
          <SocialLink
            icon={<SiGithub />}
            label="Github"
            href="https://github.com/Supriyasus"
          />
          <SocialLink
            icon={<SiLeetcode />}
            label="Leetcode"
            href="https://leetcode.com/u/supriyaaaaa/"
          />
          <SocialLink
            icon={<SiLinkedin />}
            label="LinkedIn"
            href="https://www.linkedin.com/in/supriyasrivas/"
          />
          <SocialLink
            icon={<SiMedium />}
            label="Medium"
            href="https://medium.com/@supriyayaya10"
          />
        </div>
      </div>
    </section>
  );
}

function SocialLink({ label, href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex items-center gap-3
        text-sm md:text-base
        text-muted-foreground
        hover:text-black/90
        transition-colors
      "
    >
      <span className="text-lg md:text-xl">{icon}</span>
      {label}
    </a>
  );
}
