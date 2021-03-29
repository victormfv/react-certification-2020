import React from 'react';
// import Header from './Header.component';
import './Layout.styles.css';
import Navigation from './Navigation';

function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <main className="container">{children}</main>
    </div>
  );
}

export default Layout;
