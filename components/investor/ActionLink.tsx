"use client";

import { ButtonLink, type ButtonSize, type ButtonVariant } from "@kahade/ui";
import { ArrowDown, DownloadSimple } from "@phosphor-icons/react/dist/ssr";

/** Path whitepaper statis di public/. */
export const WHITEPAPER_HREF = "/whitepaper-kahade.pdf";

interface ActionProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: string;
}

/**
 * Tombol unduh whitepaper (PDF). Dibungkus di file client karena server
 * component tidak boleh mengoper komponen ikon sebagai prop ke ButtonLink.
 */
export function WhitepaperLink({ variant = "primary", size = "md", className, children }: ActionProps) {
  return (
    <ButtonLink
      href={WHITEPAPER_HREF}
      download
      variant={variant}
      size={size}
      leftIcon={DownloadSimple}
      className={className}
    >
      {children}
    </ButtonLink>
  );
}

/** Lompat ke seksi kontak di halaman yang sama. */
export function ContactLink({ variant = "secondary", size = "md", className, children }: ActionProps) {
  return (
    <ButtonLink
      href="#kontak"
      variant={variant}
      size={size}
      rightIcon={ArrowDown}
      className={className}
    >
      {children}
    </ButtonLink>
  );
}
