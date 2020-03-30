import React from 'react';
import styles from './index.css';
import { Link } from 'umi';

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>
        <Link to="/">Home</Link>
      </h1>
      {props.children}
    </div>
  );
};

export default BasicLayout;
