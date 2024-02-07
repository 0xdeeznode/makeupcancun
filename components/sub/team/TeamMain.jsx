import { AboutTeam } from "@/constants"

const TeamMain = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-14 h-full w-full">
        {/* Col1 */}
        <div className="flex flex-col gap-20 col-span-1">
          <div className="flex flex-col gap-4 text-black font-playFair">
            <h4 className="text-2xl sm:text-4xl">{AboutTeam.first.main}</h4>
            <p>{AboutTeam.first.sub}</p>
          </div>

          <div className="h-fit sm:h-[570px] w-fit border-4 border-rojo object-contain object-center overflow-hidden">
            <video className="w-[450px] object-cover transition-transform hover:scale-110 ease-in-out duration-500" playsInline autoPlay muted loop>
              <source src="/team1.mp4" type="video/mp4" />
            </video>        
          </div>
            
        </div>

        {/* Col2 */}
        <div className="flex flex-col gap-32 sm:gap-16 col-span-1">

          <div className="h-fit sm:h-[570px] w-fit border-4 border-rojo object-contain overflow-hidden">
            <video className="w-[450px] object-cover transition-transform hover:scale-110 ease-in-out duration-500" playsInline autoPlay muted loop>
              <source src="/team2.mp4" type="video/mp4" />
            </video>        
          </div>

          <div className="flex flex-col gap-4 text-black font-playFair">
            <h4 className="text-2xl sm:text-4xl">{AboutTeam.second.main}</h4>
            <p>{AboutTeam.second.sub}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamMain