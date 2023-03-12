
import React, {useContext, useState} from 'react';


const Themecontext = React.createContext()

// Themecontext is used in creation of the state

const Themeupdatecontext = React.createContext()

// Themeupdatecontext is used in updating the state

export function useTheme(){

  return useContext(Themecontext)

  // helps in exporting the themecontext 

}

export function useThemeupdate(){

  return useContext(Themeupdatecontext)

  // helps in exporting the themeupdatecontext 

}

 
export function Themeprovider({children}){


     const [darktheme, setdarktheme] = useState(true) 

    //  creating a state
  
  
    function toggletheme(){
  
      setdarktheme(prevdarktheme => !prevdarktheme)
    }

    // updating our state 
 

    return(

      <Themecontext.Provider value ={darktheme}>
        <Themeupdatecontext.Provider value ={toggletheme}>

          {children}

        </Themeupdatecontext.Provider>
      </Themecontext.Provider>

    )


}


