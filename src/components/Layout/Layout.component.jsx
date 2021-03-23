import React from 'react';
import Header from './Header.component';
import './Layout.styles.css';

function Layout({ children }) {

return (
  <div>
    <Header/>
    <main className="container">{children}</main>
  </div>
);

}

export default Layout;
