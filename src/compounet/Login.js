
import {useEffect} from 'react'

function Login() 
{
  useEffect(() => {
    // Define the 'otpless' function
    window.otpless = (otplessUser) => {
     // Retrieve the user's details after successful login
     const waName = otplessUser.waName;
     const waNumber = otplessUser.waNumber;
         
     // Handle the signup/signin process
     // ...
    };
   }, []);
  return (
    <div id='otpless'>
      
    </div>
  );
}

export default Login;
