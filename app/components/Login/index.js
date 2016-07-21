/**
*
* Login
*
*/

import React from 'react';
import Form from '../Form'
import styles from './styles.css';

function Login() {
  return (
    <div className={styles.login}>
      <h2 className={styles.loginHeader}>Login Page</h2>
      <Form/>
    </div>
  );
}

export default Login;
