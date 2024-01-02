from flask import Blueprint

test_page = Blueprint('test_page', __name__)


@test_page.route("/")
def home():
    """Test rendering the HTML content for the index route"""
    html = "<h1>Home Page</h1>\n <p>This is the home page</p>"
    return html


@test_page.route("/hello")
def hello_world():
    """Test fetching the json data"""
    data = {"msg": "Request received", "type": "success"}
    return data
