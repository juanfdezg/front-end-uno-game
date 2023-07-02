import React from 'react'
import './HomePage.css'
import Hero from '../../components/Hero/Hero'
import ContentHome from '../../components/ContentHome/ContentHome'
import Games from '../../components/ContentHome/Games'
import LogoutButton from '../../components/User/Login/Logout'
import { AuthContext, useAuth } from '../../auth/AuthContext'

export default function HomePage() {
  const { username } = useAuth(AuthContext);
  return (
    <>

        <Hero
            cName="hero"
            heroImg="\uno-home-hero1.jpeg"
            title={`¡Bienvenido, ${username}!`} // Agrega el username al título
            text="Podrás jugar al Uno de manera rápida y sencilla. ¡No te lo pierdas!"
            buttonText="¡Jugar!"
            url="/game"
            btnClass="show"
        
            />
        
        <ContentHome />
        <Games />
    </>
    
  )
}
