import React from "react";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import ReactPlayer from "react-player";

import "@splidejs/react-splide/dist/css/splide-core.min.css";
import "@splidejs/react-splide/dist/css/splide.min.css";

function VideoPlayer() {
  return (
    <ReactPlayer url="https://youtu.be/4NNS8jj2lgY" width="100%" controls />
  );
}

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      product: {},
    };
  }

  componentDidMount() {
    const { short_code } = this.props.params;
    fetch(`http://localhost:5000/api/v1.0/products/${short_code}`)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            product: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, product } = this.state;
    if (error) {
      return (
        <>
          <div className="margint60">
            <div className="_10container">
              <p style={{ textAlign: "center" }}>Error: {error.message}</p>
            </div>
          </div>
          <div className="bottomspace" />
        </>
      );
    } else if (!isLoaded) {
      return (
        <>
          <div className="margint60">
            <div className="_10container">
              <p style={{ textAlign: "center" }}>Loading...</p>
            </div>
          </div>
          <div className="bottomspace" />
        </>
      );
    } else if (product.available != "true") {
      return (
        <>
          <div className="margint60">
            <div className="_10container">
              <h3 className="heading-14">Coming Out Soon..</h3>
            </div>
          </div>
          <div className="bottomspace" />
        </>
      );
    } else {
      return (
        <>
          <div className="margint60">
            <div className="standard-container">
              <div className="w-row">
                <div className="w-col w-col-7">
                  <div></div>

                  <Splide aria-label="My Favorite Images">
                    <SplideSlide>
                      <ReactPlayer
                        url={`https://youtu.be/${product.intro_video}`}
                        height="100%"
                        width="100%"
                        controls
                      />
                    </SplideSlide>

                    {product.images.map((img) => (
                      <SplideSlide>
                        <img
                          src={img}
                          loading="lazy"
                          sizes="(max-width: 479px) 86vw, (max-width: 767px) 87vw, (max-width: 991px) 50vw, 51vw"
                          alt=""
                          className="image-14"
                        />
                      </SplideSlide>
                    ))}
                  </Splide>
                </div>
                <div className="column w-col w-col-5">
                  <h4>{product.title}</h4>
                  <div>
                    BY: <span className="text-span-5">KLEM</span>
                  </div>

                  <div className="bluebox">Grade 7 - 9</div>
                  <div className="bluebox">{product.subject}</div>
                  <h1 className="heading-20">Description</h1>
                  <div className="text-block-102">{product.description}</div>
                  <a href="{{ url_for('video', kit=content.kit)}}">
                    <div className="bluebox yellow">WATCH TUTORIAL</div>
                  </a>
                  <a href="https://forms.gle/dRkfUJutkxvTkykr9">
                    <div className="bluebox">BUY NOW</div>
                  </a>
                  <h1 className="heading-20">Special Benefit</h1>
                  <div className="text-block-102">
                    <ul>
                      {product.benefit.map((item) => (
                        <li style={{ color: "#333", fontSize: "inherit" }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <h1 className="heading-20">Unique Features</h1>
                  <div className="text-block-102">
                    <ul>
                      {product.features.map((item) => (
                        <li style={{ color: "#333", fontSize: "inherit" }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <h1 className="heading-20">Material List</h1>
                  <div className="text-block-102">
                    <ul>
                      {product.material.map((item) => (
                        <li style={{ color: "#333", fontSize: "inherit" }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottomspace" />
        </>
      );
    }
  }
}

const ProductDetailWithRouter = (props) => {
  const params = useParams(); // useParams is allowed in functional components
  return <Product {...props} params={params} />;
};

export default ProductDetailWithRouter;
