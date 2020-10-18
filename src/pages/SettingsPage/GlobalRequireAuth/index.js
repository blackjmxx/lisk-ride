import React from 'react'
import Parse from 'parse'

import { Redirect } from "react-router-dom";

const GlobalRequireAuth = props => {
  if (!Parse.User.current()) {
    return (<Redirect to={'/home/params'}/>)
  }

  // if (Parse.User.current() && !Parse.User.current().get('emailVerified')) {
  //   return (<Redirect to={'/home/params'}/>)
  // }
  return (props.children);
};

export default GlobalRequireAuth;
