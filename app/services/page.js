import HeroServices from "@/components/main/HeroServices";


export default function Home() {

    return (
      <main className="h-full w-full">
        <div className="flex flex-col gap-5 overflow-hidden">
          <HeroServices />
        </div>
      </main>
    );
  }