"""Test Pages"""

from flask import Blueprint

test_page = Blueprint('test_page', __name__)


@test_page.route("/")
def home():  # pylint: disable=unused-variable
    """Test rendering the HTML content"""
    html = "<h1>Home Page</h1>\n <p>This is the home page</p>"
    return html


@test_page.route("/hello")
def hello_world():  # pylint: disable=unused-variable
    """Test fetching the json data"""
    data = {"msg": "Request received", "type": "success"}
    return data
