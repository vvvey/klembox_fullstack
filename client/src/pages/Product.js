import React from 'react';

const Product = () => {
    return (
        <>
        <div className="margint60">
          <div className="_10container">
            <h3 className="heading-14">Explore Our Kits</h3>
          </div>
          <div className="_10container">
            <div className="w-layout-grid grid">
              <a
                href="{{ url_for('product', kit='electro') }}"
                className="link-block w-inline-block"
              >
                <div className="div-block-46">
                  <div className="div-block-47">
                    <img
                      src="https://uploads-ssl.webflow.com/5fc560888aae314ab030f312/5fc5624039335f8d456214a1_Electro-min-p-1080.jpeg"
                      loading="lazy"
                      sizes="(max-width: 479px) 90vw, 199.84376525878906px"
                      alt=""
                      className="image-13"
                    />
                    <div className="div-block-48">
                      <div className="text-block-96">NEW</div>
                    </div>
                  </div>
                  <div className="div-block-49">
                    <div className="text-block-97">LIGHT UP!</div>
                  </div>
                </div>
              </a>
              <a href="{{ url_for('product', kit='hydro') }}">
                <div className="div-block-46">
                  <div className="div-block-47">
                    <img
                      src="https://uploads-ssl.webflow.com/5fc560888aae314ab030f312/5fc562406abc59352fcc0254_hydro-min-p-1600.jpeg"
                      loading="lazy"
                      alt=""
                      className="image-13"
                    />
                    <div className="div-block-48">
                      <div className="text-block-96">NEW</div>
                    </div>
                  </div>
                  <div className="div-block-49">
                    <div className="text-block-97">PLANT THE SEEDS!</div>
                  </div>
                </div>
              </a>
              <a href="{{ url_for('product', kit='foldscope') }}">
                <div className="div-block-46">
                  <div className="div-block-47">
                    <img
                      src="https://uploads-ssl.webflow.com/5fc560888aae314ab030f312/5fc562400120d536b2d585da_cell-min-p-1080.jpeg"
                      loading="lazy"
                      alt=""
                      className="image-13"
                    />
                    <div className="div-block-48">
                      <div className="text-block-96">NEW</div>
                    </div>
                  </div>
                  <div className="div-block-49">
                    <div className="text-block-97">CELL AND MICROSCOPE</div>
                  </div>
                </div>
              </a>
              <a href="{{ url_for('product', kit='foldscope') }}">
                <div className="div-block-46">
                  <div className="div-block-47">
                    <img
                      src="https://uploads-ssl.webflow.com/5fc560888aae314ab030f312/6007e10e2d5efccec8a3179a_energy%20solar-min.JPG"
                      loading="lazy"
                      alt=""
                      className="image-13"
                    />
                    <div className="div-block-48">
                      <div className="text-block-96">NEW</div>
                    </div>
                  </div>
                  <div className="div-block-49">
                    <div className="text-block-97">CLEAN ENERGY</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="bottomspace" />
      </>
      

    );
};

export default Product;