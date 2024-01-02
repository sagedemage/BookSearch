from flask import Blueprint, request
import requests

test_page = Blueprint('test_page', __name__)


@test_page.route("/")
def home():
    html = "<h1>Home Page</h1>\n <p>This is the home page</p>"
    return html


@test_page.route("/hello")
def hello_world():
    data = {"msg": "Request received", "type": "success"}
    return data
