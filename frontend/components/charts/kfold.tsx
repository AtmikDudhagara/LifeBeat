import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/shadcn-ui/card";

type KFoldProps = {
  accuracies: number[]; // values between 0 and 1
};

const KFold: React.FC<KFoldProps> = ({ accuracies }) => {
  // Calculate average
  const avgKfold =
    accuracies.reduce((sum, acc) => sum + acc * 100, 0) / accuracies.length;

  return (
    <Card className="mx-auto w-full max-w-6xl">
      <CardHeader>
        <CardTitle>K-Fold Cross Validation</CardTitle>
        <CardDescription>
          <p>
            Accuracy for each fold. Average Accuracy: {avgKfold.toFixed(2)}%.
          </p>
          <p className="text-muted-foreground mt-1 text-sm">
            Here, the data is divided into N folds. For each iteration, one fold
            is used for testing while the remaining folds are used for training.
          </p>
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-5 gap-4">
          {accuracies.map((acc, index) => (
            <div
              key={index}
              className="bg-primary/85 text-white flex flex-col items-center justify-center rounded-lg border p-4 shadow"
            >
              <span className="font-medium">Fold {index + 1}</span>
              <span className="mt-2 text-lg font-bold">
                {(acc * 100).toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default KFold;
