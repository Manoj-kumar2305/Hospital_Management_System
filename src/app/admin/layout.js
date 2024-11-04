'use client';
import React from 'react';
import styles from './page.module.css'
import Sidebar from './Sidebar';
export default function AdminLayout({ children }) {
  return (
    <div className={styles.box}>
      <div className={styles.box1}>
        <Sidebar />
      </div>
      <div className={styles.box2}>{children}</div>
    </div>
  );
}
