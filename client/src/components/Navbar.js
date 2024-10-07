import React from "react";
import "../styles/index.css";

const Navbar = () => {
  return (
    <div
      data-collapse="medium"
      data-animation="over-right"
      data-duration={400}
      role="banner"
      className="navbar-2 w-nav"
    >
      <div className="navcontainer">
      
        <img
          src="https://uploads-ssl.webflow.com/5f8dfd84d751ba4b176eac9e/5f8dfe9670ebe498ee6de57a_klem.png"
          loading="lazy"
          width={113}
          alt=""
          className="logo"
        />
        <nav role="navigation" className="nav-menu-2 w-nav-menu">
          <div className="div-block-5">
            <div className="text-block-83">Welcome</div>
            <img
              src="https://uploads-ssl.webflow.com/5f8dfd84d751ba4b176eac9e/5f8dfe9670ebe44ba96de57c_workspace.jpg"
              loading="lazy"
              width={64}
              height={64}
              alt=""
              className="image-3"
            />
          </div>
          <a href="/" aria-current="page" className="navlink w-nav-link">
            Home
          </a>
          <a
            href="/products"
            aria-current="page"
            className="navlink w-nav-link"
          >
            Products
          </a>
          {/* <a href="/discover"
                    aria-current="page" class="navlink w-nav-link ">Discover</a><a href="/about"
                    class="navlink w-nav-link">Resource</a> */}
          <a href="/resources" className="button-2 w-button">
            RESOURCES
          </a>
        </nav>
      </div>
      <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0" />
    </div>
  );
};

export default Navbar;
