// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from '@core/store';
import routes from '@pkgs/routes';
import { useFirebase } from '@pkgs/utils';

const AccountStatus = (): React.Node => {
  const firebase = useFirebase();
  const authenticated = useSelector((state) => state.app.authenticated);

  const handleLogout = () => {
    firebase.auth().signOut();
  };

  if (authenticated) {
    return (
      <button
        type="button"
        onClick={handleLogout}
      >
        Logout
      </button>
    );
  }

  return (
    <Link
      to={routes.login}
    >
      Login
    </Link>
  );
};

export default AccountStatus;