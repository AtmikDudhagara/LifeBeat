import { Button } from "@/components/shadcn-ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function DataInsight() {
  return (
    <div className="animate-in fade-in mx-auto flex min-h-screen max-w-6xl flex-col px-4 pt-17 duration-700">
      <div className="mt-12 flex w-full items-center justify-between border-b pb-3">
        <Button variant="ghost" size="sm" asChild className="group gap-2">
          <Link href="/">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back To Home
          </Link>
        </Button>
      </div>

      <main className="flex flex-1 flex-col items-center pt-10">
        <div className="space-y-2 text-center">
          <h2 className="text-xl font-semibold tracking-tight sm:text-3xl">
            Data Insights
          </h2>
          <p className="text-muted-foreground">
            Key trends, patterns, and observations extracted from the data
          </p>
        </div>
      </main>
    </div>
  );
}
