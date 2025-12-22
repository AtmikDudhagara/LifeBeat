export default function Working() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-20">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <p className="text-muted-foreground mt-2">
          A precise three-step pipeline for cardiovascular risk assessment
        </p>
      </div>

      <div className="relative grid gap-12 md:grid-cols-3">
        {/* Connector line */}
        <div className="bg-border absolute top-6 right-0 left-0 hidden h-px md:block" />

        {[
          {
            title: "Clinical Data Input",
            points: [
              "Standard non-invasive clinical parameters",
              "Validated and normalized before processing",
              "Missing values handled deterministically",
            ],
          },
          {
            title: "AI Model Analysis",
            points: [
              "Gradient-boosting risk model",
              "Feature interactions learned from clinical data",
              "Policy optimized using reinforcement learning feedback",
            ],
          },
          {
            title: "Risk Assessment Output",
            points: [
              "Probability-based cardiovascular risk score",
              "High-confidence predictions with uncertainty bounds",
              "Key contributing factors highlighted",
            ],
          },
        ].map((step, i) => (
          <div key={i} className="relative text-center">
            {/* Step Dot */}
            <div className="mx-auto mb-6 flex size-10 items-center justify-center rounded-full bg-blue-500 text-sm font-semibold text-white dark:bg-blue-400">
              {i + 1}
            </div>

            <h3 className="mb-3 font-semibold">{step.title}</h3>

            <ul className="text-muted-foreground space-y-2 text-sm">
              {step.points.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start justify-center gap-2 sm:justify-start"
                >
                  {/* Bullet */}
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
                  {/* Text */}
                  <span className="max-w-xs text-center sm:text-left">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
