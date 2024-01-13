"""Book APIs"""

from flask import Blueprint, request
from helpers import convert_array_to_string, get_request

book_api = Blueprint('book_api', __name__)


@book_api.route('/search')
def book_search():  # pylint: disable=unused-variable
    """Search for books by a query"""
    # to get the value of query (i.e. ?q=some-value)
    # /search?q=some-value
    query = request.args.get('q')
    response = get_request('https://openlibrary.org/search.json?q=' + query)
    data = response.json()

    books = []

    for item in data['docs']:
        book = {}

        if 'title' in item:
            book['title'] = item['title']

        if 'number_of_pages_median' in item:
            book['number_of_pages_median'] = item['number_of_pages_median']

        if 'first_publish_year' in item:
            book['first_publish_year'] = item['first_publish_year']

        if 'cover_edition_key' in item:
            book['image_url'] = ('https://covers.openlibrary.org/b/olid/'
                                 + item['cover_edition_key'] + '-S.jpg')

        if 'author_name' in item:
            book['author_name'] = convert_array_to_string(item['author_name'])

        books.append(book)

    return {'books': books}


@book_api.route('/search_by_subject')
def book_search_by_subject():  # pylint: disable=unused-variable
    """Search for books by subject"""
    # to get the value of query (i.e. ?q=some-value)
    # /search_by_subject?q=some-value
    query = request.args.get('q').lower()
    response = get_request('https://openlibrary.org/subjects/'
                           + query + '.json')
    data = response.json()

    books = []

    for item in data['works']:
        book = {}

        if 'title' in item:
            book['title'] = item['title']

        if 'authors' in item:
            book['author_name'] = item['authors'][0]['name']

        if 'first_publish_year' in item:
            book['first_publish_year'] = item['first_publish_year']

        if 'cover_edition_key' in item:
            book['image_url'] = ('https://covers.openlibrary.org/b/olid/'
                                 + item['cover_edition_key'] + '-S.jpg')

        books.append(book)

    return {'books': books}


@book_api.route('/search_by_author')
def book_search_by_author():  # pylint: disable=unused-variable
    """Search for books by author"""
    # to get the value of query (i.e. ?q=some-value)
    # /search_by_author?q=some-value
    query = request.args.get('q').lower()
    response = get_request('https://openlibrary.org/search.json?author='
                           + query)
    data = response.json()

    books = []

    for item in data['docs']:
        book = {}

        if 'title' in item:
            book['title'] = item['title']

        if 'first_publish_year' in item:
            book['first_publish_year'] = item['first_publish_year']

        if 'number_of_pages_median' in item:
            book['number_of_pages_median'] = item['number_of_pages_median']

        if 'cover_edition_key' in item:
            book['image_url'] = ('https://covers.openlibrary.org/b/olid/'
                                 + item['cover_edition_key'] + '-S.jpg')

        books.append(book)

    return {'books': books}
