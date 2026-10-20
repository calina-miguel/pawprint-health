import { FunnelLanding } from "./funnel-landing";

export const metadata = { title: "Pawprint Health", description: "A calmer way to choose preventative care for the animal who counts on you." };

export default function Page(){ return <FunnelLanding config={{ name: "Pawprint Health", monogram: "PH", eyebrow: "BETTER CARE, ONE STEP AT A TIME", title: "Care for what matters.", body: "Pet health & preventative care", accent: "#9b4d83", soft: "#f7e5f2", steps: ["Tell us what matters now","Find the right care lane","Save the next appointment"], cta: "Find the care path", outcome: "Care path" }} />; }

