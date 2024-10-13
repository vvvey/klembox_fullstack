from flask import Flask, jsonify, make_response, Blueprint
import json

app = Flask(__name__)

# Create a Blueprint for API version 1
api_v1 = Blueprint('api_v1', __name__, url_prefix='/api/v1.0')

# Load the JSON file containing the products
def load_products():
    with open('data.json', 'r') as f:
        products_data = json.load(f)
    return products_data

data  = load_products()

# Helper function to add default headers
def custom_response(data):
    """Create a JSON response with default headers."""
    response = make_response(data)
    response.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
    return response

@api_v1.route('/products', methods=['GET'])
def product_all():
    """Return a list of all products."""
    return custom_response(data)

# New route to get a product by its short_id
@api_v1.route('/products/<string:short_code>', methods=['GET'])
def get_product_by_short(short_code):
    """Return a specific product based on its short_code."""
    
    product = next((item for item in data['products'] if item["short_code"] == short_code), None)

    if product:
        return custom_response(product)
    else:
        return custom_response({"error": "Product not found"}, 404)

# Register the Blueprint with the main Flask app
app.register_blueprint(api_v1)

if __name__ == '__main__':
    app.run(debug=True)
