import React from 'react'
import './About.css'
import AboutList from '../AboutList';


const About = (props) => {
  let items = props.items.map(item => 
  <AboutList text= {item}/>)
  return (
    <>
      {/* <h3>{props.title}</h3>
      <ul>
        
           { items}
        
      </ul> */}
    </>
  )
}

export default About

// import React from 'react'
// import './About.css'

// const About = () => {
//   return (
//     <div>About</div>
//   )
// }

// export default About