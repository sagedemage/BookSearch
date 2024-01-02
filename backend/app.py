"""Main App Program"""

from flask import Flask
from routes.book_api import book_api
from routes.test_page import test_page

app = Flask(__name__)

app.register_blueprint(book_api, url_prefix='/api')
app.register_blueprint(test_page, url_prefix='/test')
