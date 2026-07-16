import { Hero } from "@/components/blocks/hero";
import { PricingTable } from "@/components/blocks/pricing-table";
import { ChatBubbleDemo } from "@/components/blocks/chat-bubble";
import { AuthForm } from "@/components/blocks/auth-form";
import { DashboardCardDemo } from "@/components/blocks/dashboard-card";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 py-10">
      <Hero />
      <PricingTable />
      <div className="px-6">
        <ChatBubbleDemo />
      </div>
      <div className="px-6">
        <AuthForm />
      </div>
      <div className="px-6">
        <DashboardCardDemo />
      </div>
    </div>
  );
}