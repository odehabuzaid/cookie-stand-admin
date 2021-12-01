const Login = ({ login }) => {
  return (
    <div class='h-screen text-center p-4'>
      <h2>Need to log in</h2>
      <input type='text' id='username' placeholder='Username' />
      <br />
      <input type='password' id='password' placeholder='password' />
      <br />
      <button
        onClick={() =>
          login(
            document.getElementById('username').value,
            document.getElementById('password').value
          )
        }
        className='p-2 text-white bg-gray-500 rounded'
      >
        Login
      </button>
    </div>
  )
}

export default Login
