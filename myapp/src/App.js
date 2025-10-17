import './App.css';

function App() {
  return (
    <div className='login-page-bg-container'>
      <h1 className='greeting'>Login Page</h1>
      <form className='login-form-container' id="myForm">
        <div className="username-container">
          <label for="username">Username</label>
          <input type="text" className="form-control" id="name" />
          <p id="nameErrMsg" className="error-message"></p>
        </div>
        <div class="pass-container">
          <label for="password">Password</label>
          <input type="passwd" className="form-control" id="password" />
          <p id="passwordErrMsg" className="error-message"></p>
        </div>
        <div className='button-container'>
          <button type='submit' className='sign-in-button'>Sign In</button>
          <a>Sign Up</a>
        </div>
      </form>
    </div>
  );
}

export default App;
