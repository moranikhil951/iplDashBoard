// Write your code here
import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {TeamsList} = props
  const {id, name, teamImageUrl} = TeamsList
  return (
    <Link to={`/team-matches/${id}`} className="link">
      <div className="Team-Card-Container">
        <li className="listed-items">
          <img className="imageLogo" src={teamImageUrl} alt={name} />
          <h1 className="team-name">{name}</h1>
        </li>
      </div>
    </Link>
  )
}

export default TeamCard
