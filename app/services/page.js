import HeroServices from "@/components/main/HeroServices";
import ScrollBand from "@/components/sub/extras/ScrollBand";




export default function Home() {

    return (
      <main className="h-full w-full">
        <div className="flex flex-col gap-5 overflow-hidden">
          <HeroServices />
        </div>
      </main>
    );
  }