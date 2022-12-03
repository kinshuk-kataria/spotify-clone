/** @format */
import React from 'react'
import './sideBar.css'
import SidebarOption from './SidebarOption/SidebarOption'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import SearchIcon from '@mui/icons-material/Search'
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined'
import { useDataLayerValue } from '../../datalayer/DataLayer'
const SideBar = () => {
  const [{ playlists }, dispatch] = useDataLayerValue()
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
        alt=""
      />
      <SidebarOption title="Home" Icon={HomeOutlinedIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicOutlinedIcon} />

      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map(playlist => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  )
}
export default SideBar
