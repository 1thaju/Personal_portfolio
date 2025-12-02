import Link from "next/link"
import { Github, Linkedin, Mail, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Section */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-sm text-muted-foreground">© {currentYear} Thajul Niyas. All rights reserved.</p>
          </div>

          {/* Connect Me Button */}
          <div className="flex items-center gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=thajulniyas100@gmail.com&su=Hello%20Thaju%20!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              Connect Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/1thaju"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/thajul-niyas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:thajulniyas100@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.instagram.com/thaju.n_?igsh=MXcwdXp4ZXoyMXNlOA=="
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
