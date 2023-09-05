import './index.css'

const LatestMatch = props => {
  const {latestDetails} = props
  const {
    date,
    venue,
    result,
    umpires,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
  } = latestDetails
  return (
    <div className="latest-card">
      <div className="flex">
        <div className="left-holder">
          <h1 className="latest-heading">{competingTeam}</h1>
          <p className="date-match">{date}</p>
          <p className="venue-match">{venue}</p>
          <p className="venue-match">{result}</p>
        </div>
        <div className="img-con">
          <img
            src={competingTeamLogo}
            className="latest-image"
            alt={`latest match ${competingTeam}`}
          />
        </div>
      </div>
      <hr className="horizantal-line" />
      <div className="right-holder">
        <h1 className="latest-innings">First Innings</h1>
        <p className="values-latest">{firstInnings}</p>
        <h1 className="latest-innings">Second Innings</h1>
        <p className="values-latest">{secondInnings}</p>
        <h1 className="latest-innings">Man Of The Match</h1>
        <p className="values-latest">{manOfTheMatch}</p>
        <h1 className="latest-innings">Umpires</h1>
        <p className="venue-matches">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
