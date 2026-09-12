import { redirect } from "next/navigation";

const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL ?? "https://app.trccontractors.org/";

export default function PortalPage() {
  redirect(portalUrl);
}
