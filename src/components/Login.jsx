
import  { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contects/AuthProvider.jsx'
import googleLogo from "../assets/images/google-logo.svg"

function Login() {

  const { login, loginwithGoogle } = useContext(AuthContext)
  console.log(login);
  const [error, setError] = useState()
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/admin/dashboard/manage";

  // const handleLogin = (event) => {
  //   event.preventDefault()
  //   const form = event.target
  //   const email = form.email.value
  //   const password = form.password.value
  //   console.log(email, password)
  //   login(email, password).then((userCredential) => {
  //     const user = userCredential.user
  //     alert("Login successful")
  //     navigate(from, { replace: true })
  //   }).catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     serError(errorMessage)
  //   });
  // }

  // const handleRegister = () => {
  //   loginwithGoogle().then((result) => {
  //     const user = result.user;
  //     navigate(from, { replace: true })
  //   }).catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     serError(errorMessage)
  //   });
  // }

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const userCredential = await response.json();
        console.log(userCredential)
        alert('Login successful');
        navigate(from, { replace: true });
      } else {
        const data = await response.json();
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred during login.');
    }
  };

  // const handleRegister = () => {
    
  //   loginwithGoogle()
  //     .then((result) => {
  //       const user = result.user;
  //       navigate(from, { replace: true });
  //     })
  //     .catch((error) => {
  //       const errorMessage = error.message;
  //       setError(errorMessage);
  //     });
  // };


  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto"><div
        className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
      </div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Log In Form</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form onSubmit={handleLogin} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input id="email" name="email" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                </div>
                <div className="relative">
                  <input id="password" name="password" type="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                </div>
                {error ? <p className="text-red-600">Email or Password is not correct</p> : ""}
                <p>If you have no account. Please <Link to="/signup" className='text-blue-600'>Signup</Link></p>
                <div className="relative">
                  <button className="bg-blue-500 text-white rounded-md px-2 py-1">Login</button>
                </div>
              </form>
            </div>
            <hr />
            <div className="flex w-full items-center flex-col mt-5 gap-3">
              <button  className="block"><img src={googleLogo} />Login with Google</button>
            </div>
          </div>
        </div></div>
    </div>)
}

export default Login