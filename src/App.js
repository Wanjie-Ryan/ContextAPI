import React, {useState} from 'react'
import Functioncontext from './functioncontext'


export const Themecontext = React.createContext()
// creates a theme context which can be used in the rest of the app.


function App() {


  const [darktheme, setdarktheme] = useState(true)


  function toggletheme(){

    setdarktheme(prevdarktheme => !prevdarktheme)
  }


  return (

    <>

        {/* // context Provider is used to wrap your code that needs access to all of your information. */}


        {/* all the components wrapped inside the Provider can access the data from the value */}


      <Themecontext.Provider value ={darktheme}>

        <button onClick={toggletheme}>Toggle Theme.</button>
        <Functioncontext/>

      </Themecontext.Provider>
    
    
    
    </>




  )
}

export default App