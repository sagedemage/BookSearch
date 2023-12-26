from flask import Flask, request
import requests

app = Flask(__name__)


@app.route("/")
def home():
    html = "<h1>Home Page</h1>\n <p>This is the home page</p>"
    return html


@app.route("/hello")
def hello_world():
    data = {"msg": "Request received", "type": "success"}
    return data


@app.route("/search")
def book_search():
    # to get the value of query (i.e. ?q=some-value)
    # https://openlibrary.org/search.json?q=flyte
    query = request.args.get("q")
    response = requests.get("https://openlibrary.org/search.json?q=" + query)
    data = response.json()

    books = []

    for item in data["docs"]:
        book = {}

        if 'title' in item:
            book['title'] = item['title']

        if 'publish_date' in item:
            book['publish_date'] = item['publish_date']

        if 'publish_year' in item:
            book['publish_year'] = item['publish_year']

        if 'isbn' in item:
            book['isbn'] = item['isbn']

        if 'publisher' in item:
            book['publisher'] = item['publisher']

        if 'language' in item:
            book['language'] = item['language']

        if 'author_name' in item:
            book['author_name'] = item['author_name']

        if 'subject' in item:
            book['subject'] = item['subject']

        if 'id_amazon' in item:
            book['id_amazon'] = item['id_amazon']

        if 'id_google' in item:
            book['id_google'] = item['id_google']

        books.append(book)

    return {"books": books}
