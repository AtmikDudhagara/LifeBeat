import { Button } from "@/components/shadcn-ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="fade-in animate-in relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center duration-700 select-none">
      {/* Content */}
      <h1 className="text-[clamp(8rem,20vw,12rem)] leading-none font-black tracking-tight text-transparent [-webkit-text-stroke-color:var(--color-foreground)] [-webkit-text-stroke-width:10px]">
        404
      </h1>

      <p className="text-muted-foreground mt-4 text-xs font-medium uppercase">
        Page not found
      </p>

      <Button
        asChild
        className="mt-7 rounded-full text-sm tracking-wide transition hover:shadow-lg"
      >
        <Link href="/">
          {" "}
          <ArrowLeft /> Back to home
        </Link>
      </Button>
    </div>
  );
}
