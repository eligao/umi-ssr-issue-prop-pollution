import React from 'react';
import styles from './index.css';
import { Link } from 'umi';

export default function() {
  return (
    <div className={styles.normal}>
      <ul className={styles.list}>
        <li>
          <Link to="hash">Page with hash</Link>
        </li>
        <li>
          <Link to="subroute/001">Page with subroute/001</Link>
        </li>
        <li>
          <Link to="subroute/002">Page with subroute/002</Link>
        </li>
      </ul>
    </div>
  );
}
