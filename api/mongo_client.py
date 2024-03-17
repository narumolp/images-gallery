import os
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv(dotenv_path='./.env.local')

MONGO_URL = os.environ.get('MONGO_URL', 'mongo')
MONGO_USERNAME = os.environ.get('MONGO_USERNAME', 'root')
MONGO_PASSWORD = os.environ.get('MONGO_PASSWORD', '')
MONGO_PORT = os.environ.get("MONGO_PORT", 27017)

mongo_client = MongoClient(
    host=MONGO_URL, username=MONGO_USERNAME, password=MONGO_PASSWORD, port=MONGO_PORT,)


def insert_test_document():
    """Insert sample documents to the test_collection to the testdb"""
    db = mongo_client.test
    my_collection = db.test_collection
    print('dg:::', db, my_collection)

    res = my_collection.insert_one({'name': 'Bogdan', 'instructor': True})

    print(res)
