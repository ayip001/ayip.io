# ./src/server/api/posts.py
from flask import jsonify, abort
from flask_restful import Resource
from google.cloud import datastore

client = datastore.Client()

class AllPostsAPI(Resource):
    def get(self):
        query = client.query(kind='Post', order=['-date'])
        query.add_filter('public', '=', True)
        return jsonify(list(query.fetch()))

class PostAPI(Resource):
    def get(self, title):
        query = client.query(kind='Post')
        query.add_filter('public', '=', True)
        query.add_filter('title', '=', title)
        result = list(query.fetch())
        if len(result) == 0:
            abort(404)
        return jsonify(result[0])
