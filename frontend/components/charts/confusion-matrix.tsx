import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/shadcn-ui/card";
import { Badge } from "@/components/shadcn-ui/badge";
import { Separator } from "../shadcn-ui/separator";

type ConfusionMatrixProps = {
  yTrue: number[];
  yPred: number[];
  title?: string;
  description?: string;
};

const getConfusionMatrix = (yTrue: number[], yPred: number[]) => {
  let tp = 0,
    tn = 0,
    fp = 0,
    fn = 0;

  yTrue.forEach((y, i) => {
    if (y === 1 && yPred[i] === 1) tp++;
    else if (y === 0 && yPred[i] === 0) tn++;
    else if (y === 0 && yPred[i] === 1) fp++;
    else if (y === 1 && yPred[i] === 0) fn++;
  });

  const precision = tp / (tp + fp) || 0;
  const recall = tp / (tp + fn) || 0;

  return {
    tp,
    tn,
    fp,
    fn,
    accuracy: ((tp + tn) / yTrue.length) * 100,
    precision: precision * 100,
    recall: recall * 100,
    f1: (2 * precision * recall) / (precision + recall) || 0,
    total: yTrue.length,
  };
};

const Metric = ({
  label,
  value,
  isPercent = true,
}: {
  label: string;
  value: number;
  isPercent?: boolean;
}) => (
  <div className="flex flex-col items-center px-2">
    <span className="text-muted-foreground text-[10px] font-medium tracking-wider uppercase">
      {label}
    </span>
    <span className="text-xl font-bold tracking-tight">
      {isPercent ? `${value.toFixed(1)}%` : value.toFixed(2)}
    </span>
  </div>
);

const Cell = ({
  label,
  value,
  total,
  type,
}: {
  label: string;
  value: number;
  total: number;
  type: "good" | "bad";
}) => (
  <div
    className={`flex flex-col items-center justify-center rounded-lg border py-6 shadow-sm transition-colors ${
      type === "good"
        ? "border-emerald-100 bg-emerald-50/50 text-emerald-900 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400"
        : "border-rose-100 bg-rose-50/50 text-rose-900 dark:border-rose-500/20 dark:bg-rose-500/10 dark:text-rose-400"
    }`}
  >
    <span className="text-2xl font-bold">{value}</span>
    <span className="text-[10px] font-medium tracking-tighter uppercase opacity-60">
      {label}
    </span>
    <span className="mt-0.5 rounded-full bg-white/50 px-1.5 py-0.5 font-mono text-[10px] dark:bg-black/20">
      {((value / total) * 100).toFixed(1)}%
    </span>
  </div>
);

const ConfusionMatrix: React.FC<ConfusionMatrixProps> = ({
  yTrue,
  yPred,
  title = "Classification Results",
  description = "Performance analysis of predicted vs actual labels",
}) => {
  const { tp, tn, fp, fn, accuracy, precision, recall, f1, total } =
    getConfusionMatrix(yTrue, yPred);

  return (
    <Card className="mx-auto w-full max-w-6xl overflow-hidden">
      <CardHeader className="bg-muted/30">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription className="text-xs">{description}</CardDescription>
          </div>
          <Badge variant="secondary" className="font-mono">
            First {total} samples
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-8 pt-6">
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4 py-2 md:grid-cols-4">
          <Metric label="Accuracy" value={accuracy} />
          <Metric label="Precision" value={precision} />
          <Metric label="Recall" value={recall} />
          <Metric label="F1 Score" value={f1} isPercent={false} />
        </div>

        {/* Matrix Container */}
        <div className="flex flex-col items-center justify-center">
          <div className="text-muted-foreground mb-2 ml-16 text-[10px] font-bold tracking-[0.2em] uppercase">
            Predicted
          </div>

          <div className="grid w-full max-w-md grid-cols-[auto_1fr_1fr] items-center gap-3">
            {/* Column Headers */}
            <div />
            <div className="text-muted-foreground pb-1 text-center text-xs font-semibold">
              Class 0
            </div>
            <div className="text-muted-foreground pb-1 text-center text-xs font-semibold">
              Class 1
            </div>

            {/* Row 0 */}
            <div className="text-muted-foreground rotate-180 py-2 pr-4 text-xs font-semibold uppercase [writing-mode:vertical-lr]">
              Actual 0
            </div>
            <Cell label="True Neg" value={tn} total={total} type="good" />
            <Cell label="False Pos" value={fp} total={total} type="bad" />

            {/* Row 1 */}
            <div className="text-muted-foreground rotate-180 py-2 pr-4 text-xs font-semibold uppercase [writing-mode:vertical-lr]">
              Actual 1
            </div>
            <Cell label="False Neg" value={fn} total={total} type="bad" />
            <Cell label="True Pos" value={tp} total={total} type="good" />
          </div>
        </div>
      </CardContent>
      <span className="text-muted-foreground text-center text-sm italic">
        {" "}
        Here class 0 Means No Cardio 1 Means Cardio
      </span>
    </Card>
  );
};

export default ConfusionMatrix;
