import { useState } from 'react';
 
const TrelloForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
 
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  const handleName = (event) => {
    setName(event.target.value);
    setSubmitted(false);
  };
 
 
  const handlePassword = (event) => {
    setPassword(event.target.value);
    setSubmitted(false);
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === '' || password === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };
 
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'None',
        }}>
        <h1>User {name} successfully registered!</h1>
      </div>
    );
  };
 
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'None',
        }}>
        <h1>Please enter all the fields in the form!</h1>
      </div>
    );
  };
 
  return (
    <div className="form">
      <div><h1>User Registration</h1></div>
 
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
 
      <form>
        <label className="label">Name</label>
        <br></br>
        <input onChange={handleName} className="input" value={name} type="text"></input>
        <br></br>
        <label className="label">Password</label>
        <br></br>
        <input onChange={handlePassword} className="input" value={password} type="password"></input>
        <br></br>
        <button onClick={handleSubmit} className="btn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TrelloForm;