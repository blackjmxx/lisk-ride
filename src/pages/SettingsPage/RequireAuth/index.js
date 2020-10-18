import React from 'react'
import Parse from 'parse'

import LoginForm from '../LoginForm'

const RequireAuth = props => {
  
  if (!Parse.User.current()) {
    return <LoginForm {...props}/>
  }
  
  // if (Parse.User.current() && !Parse.User.current().get('emailVerified')) {
  //   return <LoginForm {...props} isVerified={false}/>
  // }
  
  return (props.children);
};

export default RequireAuth;
