import React from "react";
import { Link } from "react-router-dom";

class Resources extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/v1.0/products")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            products: result.products,
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
    const { error, isLoaded, products } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          {products.map((product) => (
            <div className="wrapper">
              <img
                src={product.coverimg}
                loading="lazy"
                // srcSet="https://uploads-ssl.webflow.com/5fc560888aae314ab030f312/5fc5624039335f8d456214a1_Electro-min-p-500.jpeg 500w, https://uploads-ssl.webflow.com/5fc560888aae314ab030f312/5fc5624039335f8d456214a1_Electro-min-p-800.jpeg 800w, https://uploads-ssl.webflow.com/5fc560888aae314ab030f312/5fc5624039335f8d456214a1_Electro-min-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/5fc560888aae314ab030f312/5fc5624039335f8d456214a1_Electro-min-p-2000.jpeg 2000w, https://uploads-ssl.webflow.com/5fc560888aae314ab030f312/5fc5624039335f8d456214a1_Electro-min.JPG 2480w"
                sizes="100vw"
                alt=""
                className="featureimg"
              />
              <div className="textbox">
                <h1 className="kittitle">{product.name}</h1>
                <Link
                  to={`/resources/${product.short_code}`}
                  className="link-block w-inline-block"
                >
                  <img
                    src="https://uploads-ssl.webflow.com/5fc560888aae314ab030f312/5fc571eb0682150b2bf4b494_try.png"
                    loading="lazy"
                    width={98}
                    alt=""
                    className="playbtn"
                  />
                </Link>
              </div>
            </div>
          ))}
        </>
      );
    }
  }
}

export default Resources;
