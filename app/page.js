import Break from "@/components/main/Break";
import Hero from "@/components/main/Hero";
import Horizontal from "@/components/main/Horizontal";
import Team from "@/components/main/Team";

export default function Home() {

  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-5 overflow-hidden">
        <Hero />
        <Break />
        <Horizontal />
        <Team />
      </div>
    </main>
  );
}
