import HeroLetters from "../sub/hero/HeroLetters"
import PinPicture from "../sub/hero/PinPicture"
import Slogan from "../sub/hero/Slogan"

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center h-full w-full px-2 sm:px-0">
      <HeroLetters />
      <PinPicture />
      <Slogan />
      <div className="h-[900px] sm:h-[600px] w-full"/>
    </section>
  )
}

export default Hero