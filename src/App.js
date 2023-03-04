import React, {useState} from 'react'
import Functioncontext from './functioncontext'


export const Themecontext = React.createContext()



function App() {


  const [darktheme, setdarktheme] = useState(true)


  function toggletheme(){

    setdarktheme(prevdarktheme => !prevdarktheme)
  }


  return (

    <>

      <Themecontext.Provider value ={darktheme}>

        <button onClick={toggletheme}>Toggle Theme.</button>
        <Functioncontext/>

      </Themecontext.Provider>
    
    
    
    </>




  )
}

export default App