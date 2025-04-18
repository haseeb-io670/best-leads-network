import React, { ReactNode } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import HomeOneBanner from './banner/HomeOneBanner';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="main-layout">
      <Header />
     {/* <HomeOneBanner /> */}
   
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout; 