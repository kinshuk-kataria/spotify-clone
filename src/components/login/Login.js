/** @format */
import './Login.css'
import React from 'react'
import { loginUrl } from '../spotify/spotify'

function Login() {
  return (
    <div className="login">
      <h1>Login page</h1>
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png"
        alt="Logo"
      />
      <a href={loginUrl}>Login with Spotify</a>
    </div>
  )
}

export default Login
