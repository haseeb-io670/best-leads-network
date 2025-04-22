import React, { ReactNode } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="main-layout">
      <Header />
   
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout; 