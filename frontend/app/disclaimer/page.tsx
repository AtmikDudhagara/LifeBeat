import { Button } from "@/components/shadcn-ui/button";
import {
  AlertTriangle,
  Info,
  ShieldCheck,
  Activity,
  BrainCircuit,
  FileWarning,
  Lock,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

export default function Disclaimer() {
  return (
    <section
      className="animate-in fade-in mx-auto min-h-screen max-w-6xl px-4 pt-22 pb-28 duration-700"
      aria-labelledby="disclaimer-heading"
    >
      {/* Header */}
      <div className="mb-14 flex items-center justify-between border-b pt-7 pb-3">
        <Button variant="ghost" size="sm" asChild className="group gap-2">
          <Link href="/">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back To Home
          </Link>
        </Button>
      </div>

      <div className="mx-auto max-w-5xl">
        {/* Title */}
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-lg bg-amber-500/10 p-2">
            <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-500" />
          </div>
          <h2
            id="disclaimer-heading"
            className="text-2xl font-bold tracking-tight"
          >
            Comprehensive Medical Disclaimer
          </h2>
        </div>

        {/* Content Box */}
        <div className="bg-card/50 space-y-6 rounded-xl border p-6 shadow-sm sm:p-8">
          <p className="text-muted-foreground text-sm">
            This cardiovascular risk assessment tool uses AI-based algorithms to
            provide educational insights into heart health. Please read all
            sections carefully. Using this tool indicates your understanding and
            agreement with the terms outlined below.
          </p>

          {/* Emergency Warning */}
          <div className="border-destructive/20 bg-destructive/10 flex gap-4 rounded-lg border p-4">
            <Activity className="text-destructive mt-0.5 h-6 w-6 shrink-0" />
            <div>
              <h3 className="text-destructive text-sm font-semibold">
                Not for Emergencies
              </h3>
              <p className="text-destructive/80 mt-1 text-sm">
                If you experience chest pain, shortness of breath, fainting, or
                other severe symptoms,
                <strong> call emergency services immediately</strong>.
              </p>
            </div>
          </div>

          <ul className="space-y-4">
            <ListItem
              icon={<Info className="h-5 w-5 text-blue-500" />}
              title="Educational Use Only"
              text="This tool is for informational purposes only and does not replace professional medical advice."
            />

            <ListItem
              icon={<BrainCircuit className="h-5 w-5 text-purple-500" />}
              title="AI Model Limitations"
              text="Predictions are generated using machine learning trained on historical data and may contain bias or error."
            />

            <ListItem
              icon={<ShieldCheck className="h-5 w-5 text-green-500" />}
              title="Data Privacy"
              text="User data is processed securely following industry-standard privacy practices."
            />

            <ListItem
              icon={<Lock className="h-5 w-5 text-indigo-500" />}
              title="Prediction Confidence"
              text="Confidence scores indicate statistical likelihood, not guaranteed outcomes."
            />

            <ListItem
              icon={<CheckCircle className="h-5 w-5 text-green-400" />}
              title="Clinical Validation"
              text="The model has been evaluated on large datasets but is not a substitute for clinical evaluation."
            />

            <ListItem
              icon={<FileWarning className="h-5 w-5 text-orange-500" />}
              title="Scope"
              text="The system considers limited cardiovascular indicators and may not cover rare conditions."
            />

            <ListItem
              icon={<Activity className="h-5 w-5 text-red-500" />}
              title="Liability"
              text="The developers are not responsible for medical decisions or outcomes based on this tool."
            />

            <ListItem
              icon={<Info className="h-5 w-5 text-blue-500" />}
              title="User Consent"
              text="By continuing, you acknowledge and accept these limitations."
            />
          </ul>
        </div>
      </div>
    </section>
  );
}

function ListItem({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="bg-background mt-0.5 shrink-0 rounded-full border p-1.5 shadow-sm">
        {icon}
      </span>
      <div className="text-sm">
        <strong className="mb-0.5 block font-semibold">{title}</strong>
        <span className="text-muted-foreground leading-relaxed">{text}</span>
      </div>
    </li>
  );
}
