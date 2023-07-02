import React from 'react'
import './LandingPage.css'
import Hero from '../../components/Hero/Hero'

export default function LandingPage() {
  return (
    <>
        <Hero
            cName="hero"
            heroImg="src\assets\uno-background-image.jpg"
            title="¡Bienvenido al Juego de UNO!"
            text="¡Juega con tus amigos y familiares!"
            buttonText="¡Ingresar!"
            url="/home-page"
            btnClass="show"
        />  
    </>
  )
}

