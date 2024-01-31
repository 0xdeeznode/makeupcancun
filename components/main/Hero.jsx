import HeroLetters from "../sub/HeroLetters"
import PinPicture from "../sub/PinPicture"

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center h-full w-full">
      <HeroLetters />
      <PinPicture />
      <div className="h-[600px] w-full"/>
    </section>
  )
}

export default Hero