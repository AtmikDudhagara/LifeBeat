import { Activity, ShieldCheck, BarChart3, Clock, Percent } from "lucide-react";
import { Badge } from "@/components/shadcn-ui/badge";
import Link from "next/link";
import { Button } from "@/components/shadcn-ui/button";

export default function Title() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center px-4 pt-25 sm:px-6 md:pt-24 lg:px-8">
      {/* Optional: Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 right-0 h-80 w-80 rounded-full bg-blue-100 opacity-30 blur-3xl dark:bg-blue-900/20" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-orange-100 opacity-20 blur-3xl dark:bg-orange-900/10" />
      </div>

      <div className="animate-in fade-in mx-auto w-full max-w-6xl duration-700">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Badge
              variant="outline"
              className="group mb-4 border-blue-200 bg-blue-50/50 px-3 py-1 text-slate-700 transition-all hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 hover:shadow-sm dark:border-blue-800 dark:bg-blue-950/30 dark:text-slate-300 dark:hover:border-blue-400 dark:hover:bg-blue-950/50 dark:hover:text-blue-400"
            >
              <Activity className="mr-2 h-3 w-3 text-blue-600 transition-transform group-hover:scale-110 dark:text-blue-400" />
              <span className="font-medium">Early Warning System</span>
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Cardiovascular{" "}
              <span className="block text-blue-600 dark:text-blue-400">
                Risk Assessment
              </span>
            </h1>

            <p className="text-muted-foreground mt-5 max-w-md text-lg leading-relaxed">
              Our AI model analyzes clinical variables to predict potential
              heart risks with precision.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="/predict">
                  <Activity className="h-4 w-4" />
                  Start Assessment
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/minfo">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* RIGHT FEATURES */}
          <div className="grid gap-4 sm:grid-cols-2">
            <Card
              icon={<BarChart3 className="h-5 w-5 text-blue-600" />}
              title="73.4% Accuracy"
              desc="Trained on 70,000+ clinical patient records with cross-validation."
              accent="blue"
            />
            <Card
              icon={<Clock className="h-5 w-5 text-orange-500" />}
              title="Instant Results"
              desc="Real-time gradient boosting classification in under 5 seconds."
              accent="orange"
            />
            <Card
              icon={<ShieldCheck className="h-5 w-5 text-emerald-600" />}
              title="Secure & Private"
              desc="End-to-end encrypted processing with anonymous data"
              accent="emerald"
            />
            <Card
              icon={<Percent className="h-5 w-5 text-purple-600" />}
              title="Confidence Scores"
              desc="Predictions include probability-based confidence levels."
              accent="purple"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface CardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  accent?: "blue" | "orange" | "emerald" | "purple";
  className?: string;
}

function Card({
  icon,
  title,
  desc,
  accent = "blue",
  className = "",
}: CardProps) {
  const accentColors = {
    blue: "hover:border-blue-500 hover:shadow-blue-500/10",
    orange: "hover:border-orange-500 hover:shadow-orange-500/10",
    emerald: "hover:border-emerald-500 hover:shadow-emerald-500/10",
    purple: "hover:border-purple-500 hover:shadow-purple-500/10",
  };

  return (
    <div
      className={`group bg-card relative overflow-hidden rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${accentColors[accent]} ${className}`}
    >
      {/* Accent border top */}
      <div className={`absolute top-0 left-0 h-1 w-full bg-linear-to-r`} />

      <div className="bg-background/50 mb-4 w-fit rounded-lg p-2.5 transition-transform group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-base font-semibold tracking-tight">{title}</h3>
      <p className="text-muted-foreground mt-2 text-sm leading-relaxed opacity-90">
        {desc}
      </p>
    </div>
  );
}
