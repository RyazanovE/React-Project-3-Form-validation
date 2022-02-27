import React from 'react';
import './scss/App.scss';
import useInput from './scss/hooks/useInput';
import { ValidationMessage } from './scss/components/ValidationForm';





function App() {
 
  const email = useInput('', {emailValidation: false, isEmpty: true})
  const password = useInput('', {minLength: 8, isEmpty: true})
  
 

  return (
    <div className="container">
      <h1>React form validation</h1>
      <form className="login-form">
        
        <ValidationMessage value={email}></ValidationMessage>
        <input onChange={email.onChange}  value={email.value} onBlur={email.onBlur} name="email" type="text" placeholder="Email"></input>
        <ValidationMessage value={password}></ValidationMessage>
        <input onChange={password.onChange}  value={password.value} onBlur={password.onBlur} name="password" type="password" placeholder="Password"></input>  
        <button disabled={!email.submitAccess || !password.submitAccess} type="submit">Login</button>
        </form>
    </div>
  );
}

export default App;
