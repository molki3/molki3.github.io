"use client";

import { useEffect, useState } from "react";
import { HeartPulse, Menu, Phone, X } from "lucide-react";
import type { HeaderBarProps } from "@/types";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export function HeaderBar({ config }: HeaderBarProps) {
  const { brand, tagline, navLinks = [], emergencyPhone, cta } = config;
  const [isOpen, setIsOpen] = useState(false);
  const { scrollTo } = useSmoothScroll(64, 1000);

  // Prevent background scrolling when mobile menu drawer is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Close drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    scrollTo(e, href, () => {
      setIsOpen(false);
    });
  };

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/85 backdrop-blur-md supports-[backdrop-filter]:bg-white/75 transition-all">
        <Container className="flex h-16 items-center justify-between gap-4">
          {/* Brand logo & tagline */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex min-w-0 items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-teal-600 text-white shadow-sm">
              <HeartPulse aria-hidden="true" className="size-5" />
            </span>
            <span className="flex min-w-0 flex-col leading-tight">
              <span className="truncate text-sm font-bold text-slate-900 sm:text-base">
                {brand}
              </span>
              <span className="hidden truncate text-xs text-slate-500 sm:block">
                {tagline}
              </span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          {navLinks.length > 0 && (
            <nav
              aria-label="Navegación principal"
              className="hidden items-center gap-8 md:flex"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-slate-600 transition-colors hover:text-teal-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}

          {/* Right Action Buttons */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            <a
              href={emergencyPhone.href}
              className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-rose-600 transition-colors hover:bg-rose-50 lg:inline-flex"
            >
              <Phone aria-hidden="true" className="size-4" />
              {emergencyPhone.label}
            </a>

            <Button
              href={cta.href}
              onClick={(e) => handleNavClick(e, cta.href)}
              variant={cta.variant}
              size="sm"
              className="hidden sm:inline-flex"
            >
              {cta.label}
            </Button>

            {/* Mobile Menu Trigger Button */}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Abrir menú de navegación"
              aria-expanded={isOpen}
              aria-controls="mobile-drawer"
              className="inline-flex size-10 items-center justify-center rounded-xl text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 md:hidden"
            >
              <Menu aria-hidden="true" className="size-6" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Lateral Drawer (Right-side slide-in + Overlay) */}
      <div
        id="mobile-drawer"
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-50 md:hidden transition-all ${
          isOpen ? "visible pointer-events-auto" : "invisible pointer-events-none"
        }`}
      >
        {/* Backdrop Overlay */}
        <div
          onClick={() => setIsOpen(false)}
          className={`fixed inset-0 bg-slate-950/40 backdrop-blur-xs transition-opacity duration-300 ease-out ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        />

        {/* Drawer Panel */}
        <aside
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación móvil"
          className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white shadow-2xl transition-transform duration-350 ease-in-out flex flex-col justify-between p-6 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-lg bg-teal-600 text-white">
                <HeartPulse aria-hidden="true" className="size-4" />
              </span>
              <span className="text-sm font-bold text-slate-900">{brand}</span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar menú"
              className="inline-flex size-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              <X aria-hidden="true" className="size-5" />
            </button>
          </div>

          {/* Drawer Navigation Links */}
          <nav
            aria-label="Enlaces móviles"
            className="my-6 flex flex-col divide-y divide-slate-100 overflow-y-auto"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between py-3.5 text-base font-semibold text-slate-700 transition hover:text-teal-700"
              >
                <span>{link.label}</span>
                <span className="text-xs text-slate-400">→</span>
              </a>
            ))}
          </nav>

          {/* Drawer Footer Actions */}
          <div className="flex flex-col gap-3 border-t border-slate-100 pt-4">
            <a
              href={emergencyPhone.href}
              className="flex items-center justify-center gap-2 rounded-xl bg-rose-50 py-2.5 text-xs font-semibold text-rose-700 transition hover:bg-rose-100"
            >
              <Phone aria-hidden="true" className="size-3.5" />
              {emergencyPhone.label}
            </a>
            <Button
              href={cta.href}
              onClick={(e) => handleNavClick(e, cta.href)}
              variant={cta.variant}
              size="md"
              fullWidth
            >
              {cta.label}
            </Button>
          </div>
        </aside>
      </div>
    </>
  );
}
