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


def convert_array_to_string(list_of_items):
    string_list = ",".join(str(x) for x in list_of_items)
    return string_list


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

        if 'number_of_pages_median' in item:
            book['number_of_pages_median'] = item['number_of_pages_median']

        if 'first_publish_year' in item:
            book['first_publish_year'] = item['first_publish_year']

        if 'isbn' in item:
            book['isbn'] = convert_array_to_string(item['isbn'])

        if 'publisher' in item:
            book['publisher'] = convert_array_to_string(item['publisher'])

        if 'language' in item:
            book['language'] = convert_array_to_string(item['language'])

        if 'author_name' in item:
            book['author_name'] = convert_array_to_string(item['author_name'])

        if 'subject' in item:
            book['subject'] = convert_array_to_string(item['subject'])

        if 'id_amazon' in item:
            book['id_amazon'] = convert_array_to_string(item['id_amazon'])

        if 'id_google' in item:
            book['id_google'] = convert_array_to_string(item['id_google'])

        books.append(book)

    return {"books": books}


@app.route("/search_by_subject")
def book_search_by_subject():
    # to get the value of query (i.e. ?q=some-value)
    # https://openlibrary.org/search.json?q=flyte
    query = request.args.get("q")
    response = requests.get("https://openlibrary.org/subjects/" + query + ".json")
    data = response.json()

    books = []

    for item in data["works"]:
        book = {}

        if 'title' in item:
            book['title'] = item['title']

        if 'authors' in item:
            book['author_name'] = item['authors'][0]['name']

        if 'number_of_pages_median' in item:
            book['number_of_pages_median'] = item['number_of_pages_median']

        if 'first_publish_year' in item:
            book['first_publish_year'] = item['first_publish_year']

        books.append(book)

    return {"books": books}
