"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Activity,
  Zap,
  ShieldCheck,
  BarChart3,
  Clock,
} from "lucide-react";
import { Button } from "@/components/shadcn-ui/button";
import { Badge } from "@/components/shadcn-ui/badge";

export default function PredictPage() {
  return (
    <>
      <div className="animate-in fade-in mx-auto max-w-6xl p-4 pt-6 duration-700">
        {/* Navigation Header */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-3 dark:border-slate-800">
          <Badge
            variant="outline"
            className="bg-background border-blue-200 dark:border-blue-800"
          >
            <Activity className="mr-1 h-3 w-3 text-blue-600 dark:text-blue-400" />
            <span className="font-medium text-slate-600 dark:text-slate-300">
              Gradient Classifier v1.0
            </span>
          </Badge>
        </div>

        {/* --- MINI-HERO & CARDS SECTION --- */}
        <div className="py-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Left: Content */}
            <div className="flex flex-col justify-center">
              <Badge className="mb-4 w-fit border-none bg-orange-100 px-3 text-orange-700 dark:bg-orange-950/40 dark:text-orange-400">
                <Zap className="mr-1 h-3 w-3 fill-current" />
                Early Warning System
              </Badge>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl dark:text-white">
                Cardiovascular <br />
                <span className="text-blue-600 dark:text-blue-400">
                  Risk Assessment
                </span>
              </h1>
              <p className="text-muted-foreground mt-4 max-w-md text-lg">
                Our AI model analyzes clinical variables to predict potential
                heart risks with precision. Fill in the data below to begin.
              </p>
            </div>

            {/* Right: Feature Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Card
                icon={<BarChart3 className="text-blue-600" />}
                title="73.4% Accuracy"
                desc="Trained on 70,000+ clinical patient records."
              />
              <Card
                icon={<Clock className="text-orange-500" />}
                title="Instant Results"
                desc="Real-time gradient boosting classification."
              />
              <Card
                icon={<ShieldCheck className="text-blue-600" />}
                title="Secure Data"
                desc="Encrypted processing for research integrity."
                className="sm:col-span-2"
              />
            </div>
          </div>
        </div>
      </div>

      <footer className="text-muted-foreground mx-auto flex max-w-5xl items-center justify-center border-t p-8 text-center text-[9px] font-bold tracking-[0.2em] uppercase">
        Secure • Encrypted • Research Purpose Only
      </footer>
    </>
  );
}

function Card({
  icon,
  title,
  desc,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  className?: string;
}) {
  return (
    <div
      className={`bg-card hover rounded-xl border p-4 backdrop-blur-sm transition-colors hover:border-orange-600 ${className}`}
    >
      <div className="mb-2">{icon}</div>
      <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
        {title}
      </h3>
      <p className="text-muted-foreground text-xs leading-relaxed">{desc}</p>
    </div>
  );
}
