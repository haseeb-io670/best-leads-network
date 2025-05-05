import React from 'react';

type CmnBannerProps = {
  title: string;
  breadcrumb?: { name: string; link: string }[];
};

const CmnBanner = ({ title, breadcrumb }: CmnBannerProps) => {
  return (
    <section className="common-banner">
      <div className="container">
        <div className="banner-content">
          <h1 className="banner-title">{title}</h1>
          {breadcrumb && (
            <div className="breadcrumb-wrapper">
              <ul className="breadcrumb">
                {breadcrumb.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CmnBanner; 