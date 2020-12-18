import React from 'react';
import {Button} from './Styles';
import {useAuth0} from '@auth0/auth0-react';

const LogoutButton = () => {
  const {isAuthenticated, logout} = useAuth0()
 return(

  isAuthenticated && (
   <Button data-testid="logoutbtn" onClick={() => logout()}>
      Log Out
   </Button>
   )
 )
}

export default LogoutButton