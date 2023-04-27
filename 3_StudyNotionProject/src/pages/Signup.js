import React from 'react'
import signupImg from "../assets/signup.png"
import Template from '../components/Template'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
        title="Join the millions learning to code with Study-Notion for free"
        desc1="Build skills for today, tomorrow, abnd beyond."
        desc2="Education to future-proof your career."
        image={signupImg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
      />
  )
}

export default Signup;