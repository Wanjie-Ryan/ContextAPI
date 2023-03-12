import React from 'react'
import {useTheme, useThemeupdate} from './context'
// import {Themecontext} from './App'




function Functioncontext() {

    const darktheme = useTheme()
    const toggletheme = useThemeupdate()

    const themestyles ={
        backgroundColor: darktheme ? '#333' : '#ccc',
        color: darktheme ? '#ccc' : '#333',
        padding:'2 rem',
        margin: '2rem'
    }


  return (

    <>
    
        <button onClick={toggletheme}>Toggle Theme.</button>


        <div style = {themestyles}>Functioncontext</div>
    </>




  )
}

export default Functioncontext