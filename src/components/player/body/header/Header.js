/** @format */
import React from 'react'
import './header.css'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import Avatar from '@mui/material/Avatar'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded'
import { useDataLayerValue } from '../../../datalayer/DataLayer'

const Header = () => {
  const [{ user }] = useDataLayerValue()

  return (
    <div className="header">
      <div className="header__left">
        <ArrowBackIosNewRoundedIcon className="header__icon" />
        <ArrowForwardIosRoundedIcon className="header__icon" />
      </div>
      <div className="header__right">
        <Avatar
          alt=""
          src={user?.images[0]?.url}
          sx={{ width: 28, height: 28 }}
        />
        <h4>{user?.display_name}</h4>
        <ArrowDropDownRoundedIcon />
      </div>
    </div>
  )
}
export default Header
