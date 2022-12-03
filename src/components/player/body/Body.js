/** @format */
import Header from './header/Header'
import React from 'react'
import './body.css'
import { useDataLayerValue } from '../../datalayer/DataLayer'
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import SongRow from './SongRow'

const Body = () => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue()
  return (
    <div className="body">
      <Header />
      <div className="body__info">
        <img
          src={discover_weekly?.images[0].url}
          alt="
      "
        />
        <div className="body__infoText">
          <strong>Playlist</strong>

          <h1>Discover Weekly</h1>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledWhiteIcon className="body_shuffle" />
          <FavoriteBorderIcon fontSize="large" />
          <MoreHorizIcon fontSize="large" />
        </div>
        {/*List of songs */}
        {discover_weekly?.tracks.items.map(item => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  )
}
export default Body
