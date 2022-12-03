/** @format */
import React from 'react'
import './footer.css'
import ShuffleIcon from '@mui/icons-material/Shuffle'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import AllInclusiveIcon from '@mui/icons-material/AllInclusive'
import Grid from '@mui/material/Grid'
import PlaylistPlayOutlinedIcon from '@mui/icons-material/PlaylistPlayOutlined'
import VolumeDownOutlinedIcon from '@mui/icons-material/VolumeDownOutlined'
import Slider from '@mui/material/Slider'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src="https://i.scdn.co/image/ab67616d00004851395fe02e3e98a3348491a55f"
          alt=""
        />
        <div className="footer__songInfo">
          <h4>Ashes</h4>
          <p>Bones</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__grey" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleFilledIcon fontSize="large" className="footer__icon" />
        <SkipNextIcon className="footer__icon" />
        <AllInclusiveIcon className="footer__grey" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayOutlinedIcon />
          </Grid>
          <Grid item>
            <VolumeDownOutlinedIcon />
          </Grid>
          <Grid item>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
export default Footer
