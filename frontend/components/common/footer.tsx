import Link from "next/link";
import { Separator } from "../shadcn-ui/separator";
import Logo from "./logo";

import { Montserrat } from "next/font/google";
import { Copyright } from "lucide-react";

const mon = Montserrat({
  subsets: ["cyrillic"],
  weight: ["600"],
});

function Footer() {
  function getYearFromDate(input: Date | string): number | null {
    try {
      let date: Date;

      // If input is a string, try to parse it
      if (typeof input === "string") {
        date = new Date(input);
      } else {
        date = input;
      }

      // Validate if the date is valid
      if (isNaN(date.getTime())) {
        console.error("Invalid date provided.");
        return null;
      }

      return date.getFullYear();
    } catch (error) {
      console.error("Error extracting year:", error);
      return null;
    }
  }

  return (
    <footer className="relative mt-auto overflow-hidden">
      <Separator />
      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Logo />
            </div>
            <p className="text-sm leading-relaxed">
              © {getYearFromDate(new Date())} CardioML <br />
              All rights reserved <br />
              Not medical advice, use responsibly
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-10 text-sm md:grid-cols-3">
            {/* Column 1 */}
            <div className="[&>a:hover]:text-primary flex flex-col items-start gap-2">
              <Link href="/disclaimer">Disclaimer</Link>
            </div>
            {/* Column 2 */}
            <div className="[&>a:hover]:text-primary flex flex-col gap-2">
              <a href="https://github.com/AtmikDudhagara/LifeBeat">Open Source</a>
              <a href="mailto:atmikdudhagara1980@gmail.com">Contact</a>
            </div>

            {/* Column 3 */}
            <div className="[&>a:hover]:text-primary flex flex-col gap-2">
              {/* <a href="https://x.com/kansagra_keval">Twitter</a> */}
              {/* <a href="https://in.linkedin.com/in/keval-kansagra-5b77ab286">
                LinkedIn
              </a> */}
              <a href="https://github.com/AtmikDudhagara/">GitHub</a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Wordmark */}
      <div className="pointer-events-none relative inset-x-0 bottom-0 flex justify-center">
        <h1
          className={`bg-linear-to-t from-zinc-900/10 to-zinc-800/0 bg-clip-text text-[5rem] leading-none font-extrabold tracking-tight whitespace-nowrap text-transparent opacity-90 blur-[0.5] select-none sm:text-[7rem] md:text-[9rem] lg:text-[11rem] xl:text-[14rem] dark:from-slate-200/20 dark:to-slate-50/5 ${mon.className}`}
        >
          Life Beat
        </h1>
      </div>
    </footer>
  );
}

export default Footer;
