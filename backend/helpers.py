"""Helper Functions"""
import requests


def convert_array_to_string(list_of_items):
    """Convert an array to a string"""
    string_list = ",".join(str(x) for x in list_of_items)
    return string_list


def get_request(url):
    """Perform a get request on an external api"""
    response = requests.get(url, timeout=5)
    return response
