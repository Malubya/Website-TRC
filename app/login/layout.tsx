import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in — TRC Contractors Portal",
  description: "Sign in to the TRC Contractors portal — for clients, site engineers, and professionals.",
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}
