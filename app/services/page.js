import HeroServices from "@/components/main/HeroServices";
import OtherServices from "@/components/main/OtherServices";
import Weddings from "@/components/main/Weddings";
import ScrollBand from "@/components/sub/extras/ScrollBand";


export default function Home() {

    return (
      <main className="h-full w-full">
        <div className="flex flex-col gap-5 overflow-hidden">
          <HeroServices />
          <Weddings />
          <ScrollBand text='Inquire about our bridal and bridesmaid/guest packages.' refe={`https://wa.me/${process.env.WHATSAPP}?text=I would like to know more about bridesmaid/guest packages.`}/>
          <OtherServices />
        </div>
      </main>
    );
  }