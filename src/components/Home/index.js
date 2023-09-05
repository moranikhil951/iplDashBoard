// Write your code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {updatedData: [], isTrue: true}

  componentDidMount() {
    this.getTeamCards()
  }

  getTeamCards = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formatedData = data.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({updatedData: formatedData, isTrue: false})
  }

  render() {
    const {updatedData, isTrue} = this.state
    return isTrue ? (
      <div testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      <div className="Home-Container">
        <div className="ipl-mini-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo-ipl"
          />

          <h1 className="ipl-heading">IPL Dashboard</h1>
        </div>
        <ul className="unorderedList">
          {updatedData.map(eachItem => (
            <TeamCard TeamsList={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
