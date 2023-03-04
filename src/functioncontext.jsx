import React, {useContext} from 'react'
import {Themecontext} from './App'





function Functioncontext() {

    const darktheme = useContext(Themecontext)

    const themestyles ={
        backgroundColor: darktheme ? '#333' : '#ccc',
        color: darktheme ? '#ccc' : '#333',
        padding:'2 rem',
        margin: '2rem'
    }


  return (


    <div style = {themestyles}>Functioncontext</div>



  )
}

export default Functioncontext