import { Linkedin, Mail, Heart } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const iconMap: Record<string, typeof Linkedin> = {
    linkedin: Linkedin,
    mail: Mail,
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold text-gradient mb-2">
              {personalInfo.name}
            </p>
            <p className="text-muted-foreground">
              {personalInfo.title} • {personalInfo.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-muted hover:bg-primary/20 hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © {currentYear} {personalInfo.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
