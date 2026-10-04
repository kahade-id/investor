import { forwardRef, type AnchorHTMLAttributes, type ReactNode } from "react";
// Type-only import: dihapus saat compile, aman untuk SSR.
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import { Icon } from "@kahade/ui";

type ButtonLinkVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonLinkSize = "sm" | "md" | "lg";

export interface ButtonLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonLinkVariant;
  size?: ButtonLinkSize;
  leftIcon?: PhosphorIcon;
  rightIcon?: PhosphorIcon;
  children: ReactNode;
}

// Disalin dari @kahade/ui Button (v0.4.x) agar anchor tampil identik.
// DS Button hanya me-render <button>; membungkusnya dengan <a> adalah
// nested interactive (HTML invalid + membingungkan screen reader).
// Sinkronkan manual bila DS Button berubah.
const variantClasses: Record<ButtonLinkVariant, string> = {
  primary: "bg-black text-white hover:bg-neutral-800 active:bg-black",
  secondary:
    "bg-white text-black border border-neutral-300 hover:border-black hover:shadow-soft active:bg-neutral-100",
  ghost: "bg-transparent text-black hover:bg-neutral-100 active:bg-neutral-200",
  danger: "bg-red-600 text-white hover:bg-red-700 active:bg-red-700",
};

const sizeClasses: Record<ButtonLinkSize, string> = {
  sm: "h-9 px-4 text-sm gap-1.5",
  md: "h-11 px-6 text-sm gap-2",
  lg: "h-13 px-8 text-base gap-2",
};

const iconSizes: Record<ButtonLinkSize, number> = { sm: 16, md: 18, lg: 20 };

/**
 * Anchor yang tampil persis seperti Button DS — untuk link yang terlihat
 * seperti tombol (unduh file, mailto, navigasi antar-subdomain).
 */
export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    {
      variant = "primary",
      size = "md",
      leftIcon,
      rightIcon,
      className = "",
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <a
        ref={ref}
        className={[
          "inline-flex items-center justify-center rounded-full font-semibold",
          "transition-all duration-150 select-none",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2",
          "active:scale-[0.97]",
          variantClasses[variant],
          sizeClasses[size],
          className,
        ].join(" ")}
        {...rest}
      >
        {leftIcon && <Icon icon={leftIcon} size={iconSizes[size]} />}
        <span>{children}</span>
        {rightIcon && <Icon icon={rightIcon} size={iconSizes[size]} />}
      </a>
    );
  }
);
ButtonLink.displayName = "ButtonLink";
