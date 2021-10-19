import React from 'react';

const Form = () => {
  return (
    <form action="">
        <label htmlFor=""><span>Username</span> <input type="text" /></label>
        <label htmlFor=""><span>Password</span> <input type="password" /></label>
        <input type="submit" value="LOGIN"/>
      </form>
  )
}

export default Form;