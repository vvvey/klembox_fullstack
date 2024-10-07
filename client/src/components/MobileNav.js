import React from 'react';
import "../styles/index.css"

const MobileNav = () => {
    return (
        <div className="bottom-menu">
  <a href="/" className="bottommenuitem w-inline-block">
    <img
      src="https://uploads-ssl.webflow.com/5f8dfd84d751ba4b176eac9e/5f8e1261885c4b6c31835d41_home-page.png"
      loading="lazy"
      width={43}
      alt=""
      className="image-5"
    />
    <div className="text-block-84">Home</div>
  </a>
  <a href="/products" className="bottommenuitem w-inline-block">
    <img
      src="https://uploads-ssl.webflow.com/5f8dfd84d751ba4b176eac9e/5f8e1260b6101dd22044ddaf_store.png"
      loading="lazy"
      width={43}
      alt=""
      className="image-5"
    />
    <div className="text-block-84">Product</div>
  </a>
  <a href="/resources" className="bottommenuitem w-inline-block">
    <img
      src="https://uploads-ssl.webflow.com/5f8dfd84d751ba4b176eac9e/5f8e125fca6a9c1bfc80b13f_book-shelf.png"
      loading="lazy"
      width={43}
      alt=""
      className="image-5"
    />
    <div className="text-block-84">Resource</div>
  </a>
</div>


    );
};

export default MobileNav;

