import ScrollBand from "../sub/extras/ScrollBand"
import TeamMain from "../sub/team/TeamMain"
import TeamTitle from "../sub/team/TeamTitle"

const Team = () => {
  return (
    <section className='px-2 sm:px-10'>
      <TeamTitle />
      <TeamMain />
    </section>
  )
}

export default Team