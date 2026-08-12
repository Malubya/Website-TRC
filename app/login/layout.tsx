import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Portal — TRC Contractors",
  description: "Contact TRC Contractors for project records and client access.",
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}
