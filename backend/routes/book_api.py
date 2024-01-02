"""Book APIs"""

from flask import Blueprint, request
import requests

book_api = Blueprint('book_api', __name__)


def convert_array_to_string(list_of_items):
    """Convert an array to a string"""
    string_list = ",".join(str(x) for x in list_of_items)
    return string_list


@book_api.route("/search")
def book_search():  # pylint: disable=unused-variable
    """Search for books by a query"""
    # to get the value of query (i.e. ?q=some-value)
    # /search?q=some-value
    query = request.args.get("q")
    response = requests.get("https://openlibrary.org/search.json?q=" + query, timeout=5)
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


@book_api.route("/search_by_subject")
def book_search_by_subject():  # pylint: disable=unused-variable
    """Search for books by subject"""
    # to get the value of query (i.e. ?q=some-value)
    # /search_by_subject?q=some-value
    query = request.args.get("q").lower()
    response = requests.get("https://openlibrary.org/subjects/" + query + ".json", timeout=5)
    data = response.json()

    books = []

    for item in data["works"]:
        book = {}

        if 'title' in item:
            book['title'] = item['title']

        if 'authors' in item:
            book['author_name'] = item['authors'][0]['name']

        if 'first_publish_year' in item:
            book['first_publish_year'] = item['first_publish_year']

        books.append(book)

    return {"books": books}


@book_api.route("/search_by_author")
def book_search_by_author():  # pylint: disable=unused-variable
    """Search for books by author"""
    # to get the value of query (i.e. ?q=some-value)
    # /search_by_author?q=some-value
    query = request.args.get("q").lower()
    response = requests.get("https://openlibrary.org/search.json?author=" + query, timeout=5)
    data = response.json()

    books = []

    for item in data["docs"]:
        book = {}

        if 'title' in item:
            book['title'] = item['title']

        if 'first_publish_year' in item:
            book['first_publish_year'] = item['first_publish_year']

        if 'number_of_pages_median' in item:
            book['number_of_pages_median'] = item['number_of_pages_median']

        books.append(book)

    return {"books": books}
