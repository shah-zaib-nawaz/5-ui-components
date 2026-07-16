import { Hero } from "@/components/blocks/hero";
import { PricingTable } from "@/components/blocks/pricing-table";
import { ChatBubbleDemo } from "@/components/blocks/chat-bubble";
import { AuthForm } from "@/components/blocks/auth-form";
import { DashboardCardDemo } from "@/components/blocks/dashboard-card";
import { InstallCommand } from "@/components/install-command";

// 1. Component ko Home function ke BAHAR move kiya
const PreviewSection = ({ title, children, name }: { title: string, children: React.ReactNode, name: string }) => (
  <div className="flex flex-col gap-4 border border-border p-6 rounded-xl bg-card">
    <h2 className="text-xl font-semibold">{title}</h2>
    <div className="border border-dashed rounded-lg p-4 bg-muted/20">
      {children}
    </div>
    <InstallCommand name={name} />
  </div>
);

export default function Home() {
  return (
    <div className="flex flex-col gap-10 py-10 container mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">My Component Library</h1>
      
      <PreviewSection title="Hero Section" name="hero">
        <Hero />
      </PreviewSection>

      <PreviewSection title="Pricing Table" name="pricing-table">
        <PricingTable />
      </PreviewSection>

      <PreviewSection title="Chat Bubble" name="chat-bubble">
        <ChatBubbleDemo />
      </PreviewSection>

      <PreviewSection title="Auth Form" name="auth-form">
        <AuthForm />
      </PreviewSection>

      <PreviewSection title="Dashboard Card" name="dashboard-card">
        <DashboardCardDemo />
      </PreviewSection>
    </div>
  );
}