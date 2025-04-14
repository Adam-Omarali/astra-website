import { BackgroundLines } from "@/components/ui/background-lines";
import { FlipWords } from "@/components/ui/flip-words";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Meteors } from "@/components/ui/meteors";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-brackground";
import { motion } from "motion/react";
import Image from "next/image";
export default function Home() {
  return (
    <div className="font-sans px-4">
      <section className="flex flex-col items-center justify-center">
        <BackgroundLines>
          <div className="flex flex-col gap-10 items-center justify-center">
            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-8 relative z-20 font-bold tracking-tight">
              <span className="text-6xl">Astra</span> <br />
              <div className="flex flex-col gap-2 pt-8">
                <span className="text-2xl">
                  Toronto Young Builders Symposium
                </span>
                <span className="text-sm font-normal pt-0">June 2025</span>
              </div>
            </h2>

            <p className="max-w-xl mx-auto text-sm md:text-lg text-center font-sans">
              Astra is a symposium where young builders, artists, and creators
              come together to share the projects they've been crafting.
            </p>
            <div className="pt-4 flex gap-4 font-sans text-neutral-700 dark:text-neutral-200">
              <button className="relative inline-flex h-10 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-3 text-sm font-medium backdrop-blur-3xl">
                  Register
                </span>
              </button>
              <button className="relative inline-flex h-10 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-3 text-sm font-medium backdrop-blur-3xl">
                  Demo
                </span>
              </button>
            </div>
          </div>
        </BackgroundLines>
      </section>
      <section className="relative h-[400px] mx-auto">
        <div className="flex flex-col gap-4 text-center h-full">
          <h1 className="text-2xl font-bold h-full">
            <HeroHighlight>
              This is for the friday night hackers, the artists building new
              worlds, those who choose to explore just cuz. We're gathering{" "}
              <Highlight className="text-black dark:text-white">
                everybody who makes stuff they love
              </Highlight>
              , even if you just started a day ago.
              <br />
              <br />
              Passionate work deserves to be celebrated.
              <br />
              <br />
              Join us to hear stories from people who make stuff they love.
              <div className="pt-8">
                <button className="relative inline-flex h-10 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-3 text-sm font-medium backdrop-blur-3xl">
                    Join us
                  </span>
                </button>
              </div>
            </HeroHighlight>
          </h1>
        </div>
      </section>
      {/* <section>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold flex flex-col items-center justify-center">
            Are you{""}
            <FlipWords
              words={[
                "an engineer",
                "an artist",
                "curious about people's stories",
              ]}
            />{" "}
            <br />
          </h2>
        </div>
      </section> */}
      <section className="relative w-[80%] mx-auto mb-16 mt-8">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-2xl font-bold">This is Astra</h2>
          <p className="text-neutral-700 dark:text-neutral-400 text-lg">
            Ever since the dawn of humanity, humans have been drawn to the stars
            — it's almost axiomatic, and rightfully so.
          </p>
          <p className="text-neutral-700 dark:text-neutral-400 text-lg">
            The stars represent opportunity, discovery, exploration,
            collaboration, and above all, creation— some of the most beautiful
            traits of humankind.
          </p>
          <ShootingStars />
          <StarsBackground />
        </div>
      </section>
      <div className="flex flex-col items-center justify-center mb-16">
        <Image src="/star 2.png" alt="Astra" width={300} height={300} />
      </div>
      <section>
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-2xl font-bold">Our Sponsors</h2>
          <div className="flex gap-4 justify-center items-center">
            <Image
              src="/Google Cloud Logo.png"
              alt="Sponsor 1"
              width={100}
              height={100}
            />
            <Image src="/beta.png" alt="Sponsor 1" width={200} height={200} />
            <Image src="/inovia.png" alt="Sponsor 1" width={100} height={100} />
          </div>
        </div>
      </section>
      <footer className="mt-16 flex flex-col gap-4 text-center mb-8">
        <p>
          made with ❤️ by the{" "}
          <a href="/team" className="text-blue-500">
            team
          </a>
          . inspired by friends at socratica.
        </p>
      </footer>
    </div>
  );
}
