import Hero from "@/components/main/Hero";
import Horizontal from "@/components/main/Horizontal";

export default function Home() {

  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <Hero />
        <Horizontal />
      </div>
    </main>
  );
}
