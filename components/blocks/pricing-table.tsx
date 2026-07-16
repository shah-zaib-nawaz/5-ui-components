import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Personal",
    price: "$99",
    description: "For solo developers and side projects.",
    features: ["1 project", "Lifetime access", "Community support", "Free updates"],
    popular: false,
  },
  {
    name: "Pro",
    price: "$199",
    description: "For professionals shipping real products.",
    features: [
      "Unlimited projects",
      "Lifetime access",
      "Priority support",
      "Free updates",
      "AI components",
    ],
    popular: true,
  },
  {
    name: "Agency",
    price: "$499",
    description: "For teams and client work.",
    features: [
      "Everything in Pro",
      "Client projects",
      "Team license",
      "1-on-1 onboarding",
    ],
    popular: false,
  },
];

export function PricingTable() {
  return (
    <section className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Simple, transparent pricing
        </h2>
        <p className="mt-4 text-muted-foreground">
          Pay once. Own it forever. No subscriptions.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-2xl border p-8 shadow-sm ${
              plan.popular
                ? "border-emerald-500 shadow-lg shadow-emerald-500/10 dark:border-emerald-400 dark:shadow-emerald-400/10"
                : "border-border"
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white dark:bg-emerald-400 dark:text-emerald-950">
                Most popular
              </span>
            )}

            <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {plan.description}
            </p>

            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-foreground">
                {plan.price}
              </span>
              <span className="text-muted-foreground">one-time</span>
            </div>

            <ul className="mt-8 flex flex-1 flex-col gap-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-sm text-foreground"
                >
                  <Check className="h-4 w-4 shrink-0 text-emerald-500 dark:text-emerald-400" />
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              className="mt-8 w-full"
              variant={plan.popular ? "default" : "outline"}
            >
              Get {plan.name}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}