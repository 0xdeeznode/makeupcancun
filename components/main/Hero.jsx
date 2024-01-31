import HeroLetters from "../sub/hero/HeroLetters"
import PinPicture from "../sub/hero/PinPicture"
import Slogan from "../sub/hero/Slogan"

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center h-full w-full">
      <HeroLetters />
      <PinPicture />
      <Slogan />
      <div className="h-[800px] w-full"/>
    </section>
  )
}

export default Hero