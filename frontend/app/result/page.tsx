"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PredictionResult from "@/components/common/prediction-result";

export default function ResultPage() {
  const [prediction, setPrediction] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const data = sessionStorage.getItem("last_prediction");
    if (!data) return router.push("/");
    setPrediction(JSON.parse(data));
  }, []);

  if (!prediction) return null;

  return (
    <div className="animate-in fade-in min-h-screen pt-22 duration-700">
      <PredictionResult
        prediction={prediction}
        onReset={() => router.push("/")}
      />
    </div>
  );
}
