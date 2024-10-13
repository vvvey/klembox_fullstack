import React from "react";
import { Link } from "react-router-dom";

class ProductsList extends React.Component {
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
    } else {
      return (
        <div className="_10container">
          <div className="w-layout-grid grid">
            {products.map((item) => (
              <Link
                to={`/products/${item.short_code}`}
                className="link-block w-inline-block"
              >
                <div className="div-block-46">
                  <div className="div-block-47">
                    <img
                      src={item.coverimg}
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
                    <div className="text-block-97">{item.name}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default ProductsList;
