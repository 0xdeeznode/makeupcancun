import Portada from '../sub/horizontal/Portada'
import HScroller from '../sub/horizontal/HScroller'

const Horizontal = () => {
  return (
    <section className='flex flex-col justify-center items-center gap-12 w-full h-full bg-rojo z-20'>
      <Portada />
      <HScroller />
    </section>
  )
}

export default Horizontal