import React from "react";
import {
  Activity,
  ShieldCheck,
  BarChart3,
  Clock,
  Percent,
} from "lucide-react";

import { Badge } from "@/components/shadcn-ui/badge";
import { Button } from "@/components/shadcn-ui/button";
import Link from "next/link";

export default function Title() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center px-4 pt-24 sm:px-6 lg:px-8">

      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 right-0 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl dark:bg-blue-900/20" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-orange-100/30 blur-3xl dark:bg-orange-900/10" />
      </div>

      <div className="mx-auto w-full max-w-5xl">
        <div className="flex flex-col items-center text-center lg:text-left">

          {/* Badge */}
          <Badge
            variant="outline"
            className="mb-4 border-blue-200 bg-blue-50/50 px-3 py-1 text-slate-700 dark:border-blue-800 dark:bg-blue-950/30 dark:text-slate-300"
          >
            <Activity className="mr-2 h-3 w-3 text-blue-600 dark:text-blue-400" />
            Early Warning System
          </Badge>

          {/* Heading */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Cardiovascular
            <span className="block text-blue-600 dark:text-blue-400">
              Risk Assessment
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Our AI model analyzes clinical variables to predict potential
            heart risks with precision.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <Link href="/predict">
                <Activity className="h-4 w-4" />
                Start Assessment
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg">
              <Link href="/model-info">Learn More</Link>
            </Button>
          </div>

          {/* Metrics – 2x2 Cards */}
          <div className="mt-14 grid w-full max-w-4xl grid-cols-1 gap-6 text-left sm:grid-cols-2">

            <Stat
              icon={<BarChart3 className="h-5 w-5 text-blue-600" />}
              title="Accuracy"
              value="73.4%"
              valueColor="text-blue-600"
              desc="Trained on 70,000+ clinical patient records with cross-validation"
              accent="border-blue-500/60"
            />

            <Stat
              icon={<Clock className="h-5 w-5 text-orange-500" />}
              title="Speed"
              value="< 5 sec"
              valueColor="text-orange-500"
              desc="Real-time gradient boosting prediction"
              accent="border-orange-500/60"
            />

            <Stat
              icon={<ShieldCheck className="h-5 w-5 text-emerald-600" />}
              title="Security"
              value="Encrypted"
              valueColor="text-emerald-600"
              desc="End-to-end encrypted & anonymous data processing"
              accent="border-emerald-500/60"
            />

            <Stat
              icon={<Percent className="h-5 w-5 text-purple-600" />}
              title="Confidence"
              value="Probabilistic"
              valueColor="text-purple-600"
              desc="Predictions include confidence probability scores"
              accent="border-purple-500/60"
            />

          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Stat Card ---------- */
function Stat({
  icon,
  title,
  value,
  valueColor,
  desc,
  accent,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  valueColor: string;
  desc: string;
  accent: string;
}) {
  return (
    <div
      className={`relative rounded-xl border bg-card p-6 shadow-sm transition hover:shadow-md border-l-4 ${accent}`}
    >
      <div className="flex items-center gap-3 font-semibold">
        {icon}
        {title}
      </div>

      <div className={`mt-2 text-2xl font-bold ${valueColor}`}>
        {value}
      </div>

      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {desc}
      </p>
    </div>
  );
}
