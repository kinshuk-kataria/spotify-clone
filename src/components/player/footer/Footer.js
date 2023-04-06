/** @format */
import React, { useState } from 'react'
import './footer.css'
import ShuffleIcon from '@mui/icons-material/Shuffle'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import AllInclusiveIcon from '@mui/icons-material/AllInclusive'
import Grid from '@mui/material/Grid'
import PlaylistPlayOutlinedIcon from '@mui/icons-material/PlaylistPlayOutlined'
import VolumeDownOutlinedIcon from '@mui/icons-material/VolumeDownOutlined'
import Slider from '@mui/material/Slider';

const Footer = () => {
  const [position,setPosition]=useState(12);
  const duration=20;

  console.log(position);


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
        <div className='footer__playbackControls'><ShuffleIcon className="footer__grey" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleFilledIcon fontSize="large" className="footer__icon" />
        <SkipNextIcon className="footer__icon" />
        <AllInclusiveIcon className="footer__grey" /></div>
        <div className='footer__playbackSlider'>
        <Slider
          aria-label="time-indicator"
          size="small"
          value={position}
          min={0}
          step={1}
          max={duration}
          onChange={(_, value) => setPosition(value)}
          color='secondary'
          
        />
        </div>
      </div>
      <div className="footer__right">
                          
            <VolumeDownOutlinedIcon />
            <div className='sliderContainer'><Slider size='small'/></div>
          
      </div>
    </div>
  )
}
export default Footer
