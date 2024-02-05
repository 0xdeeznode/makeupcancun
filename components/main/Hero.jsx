import HeroLetters from "../sub/hero/HeroLetters"
import PinPicture from "../sub/hero/PinPicture"
import Slogan from "../sub/hero/Slogan"

const Hero = () => {
  return (
    <section className="flex flex-col h-full w-full px-2 sm:px-0">
      <HeroLetters />
      <PinPicture />
      <Slogan />
      <div className="h-[900px] md:h-32 lg:h-[500px]"/>
    </section>
  )
}

export default Hero 