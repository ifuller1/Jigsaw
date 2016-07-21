/**
*
* AppHeader
*
*/

import React from 'react';

import styles from './styles.css';

function AppHeader() {
  return (
    <div className={styles.appHeader}>
      <h1 className={styles.appTitle}>Jigsaw</h1>
    </div>
  );
}

export default AppHeader;
