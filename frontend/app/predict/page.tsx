"use client";

import Link from "next/link";
import { ArrowLeft, Activity, ShieldCheck } from "lucide-react";
import { Button } from "@/components/shadcn-ui/button";
import { Badge } from "@/components/shadcn-ui/badge";
import PredictForm from "./predict-form"; // Adjust path as needed

export default function PredictPage() {
  return (
    <>
      <div className="animate-in fade-in mx-auto max-w-6xl p-4 pt-6 duration-700">
        {/* Navigation Header - Matches Result Page */}
        <div className="mt-25 flex items-center justify-between border-b pb-3">
          <Button variant="ghost" size="sm" asChild className="group gap-2">
            <Link href="/">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back To Home
            </Link>
          </Button>

          <Badge variant="outline" className="bg-background">
            <Activity className="text-primary mr-1 h-3 w-3" />
            Gradient Classifier
          </Badge>
        </div>

        {/* Main Content Area */}
        <div className="flex min-h-[calc(100vh-200px)] items-center justify-center py-12">
          <div className="w-full max-w-6xl">
            <PredictForm />

            {/* Subtle Disclaimer to match the Result Page footer */}
          </div>
        </div>
        <div className="mt-auto border-t py-6">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
            <p className="text-muted-foreground flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase">
              <ShieldCheck className="h-3 w-3 text-blue-500" />
              Secure • Encrypted • Research Purpose Only
            </p>
            <p className="text-[10px] italic opacity-50">
              Consult a medical professional for clinical diagnosis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
