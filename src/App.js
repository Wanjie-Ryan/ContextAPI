import React from 'react'
import Functioncontext from './functioncontext'
import { Themeprovider } from './context'

// export const Themecontext = React.createContext()
// creates a theme context which can be used in the rest of the app.


function App() {


  

  return (

    <>

        {/* // context Provider is used to wrap your code that needs access to all of your information. */}


        {/* all the components wrapped inside the Provider can access the data from the value */}


      <Themeprovider>

        <Functioncontext/>

      </Themeprovider>
    
    
    
    </>




  )
}

export default App