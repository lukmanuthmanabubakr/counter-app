import React from 'react'
import Navbar from './Navbar/Navbar'
import About from './About/About'
import Canter from './Canter/canter'


const App = () => {
  const list = ['Home', 'About', 'Contact']
  let stuff = About({title: 'Scope', items: list})
  return (
    <div>
      {/* <h2>World</h2> */}
    
      <Navbar title="Congratulation"/>
      <About 
        title = "Scope"
         items = {list}
         
      />

      {stuff}
      <Canter/>
      </div>
  )
}

export default App