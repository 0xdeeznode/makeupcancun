import Portada from "../sub/hero/Portada"
import Slogan from "../sub/hero/Slogan"

const Hero = () => {
  return (
    <section className="flex flex-col h-full w-full">
      <Portada />
      <Slogan />
      <div className="h-[900px] md:h-32 lg:h-[500px]"/>
    </section>
  )
}

export default Hero 