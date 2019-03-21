import React from 'react';
import styles from '../../styles/scss/main.scss';

const content = 'Hello world!';

const App = () => {
  return(
    <div className={styles}>{content}</div>
  );
}

export default App;
