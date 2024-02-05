import Break from "@/components/main/Break";
import Hero from "@/components/main/Hero";
import Horizontal from "@/components/main/Horizontal";
import Team from "@/components/main/Team";
import ScrollBand from "@/components/sub/extras/ScrollBand";

export default function Home() {

  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-5 overflow-hidden">
        <Hero />
        <Break />
        <Horizontal />
        <Team />
        <ScrollBand text='Our Services' refe='/services'/>
      </div>
    </main>
  );
}
