/** @format */
import './player.css'
import React from 'react'
import SideBar from './Sidebar/SideBar'
import Body from './body/Body'
import Footer from './footer/Footer'

export default function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <SideBar />
        <Body spotify={spotify} />
      </div>

      <Footer />
    </div>
  )
}
