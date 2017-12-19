# ./src/server/api/posts.py
from flask import jsonify, abort
from flask_restful import Resource
from google.cloud import datastore

client = datastore.Client()

# Returns a datastore client query object of every post ordered by most recent
def QueryHelper():
    query = client.query(kind='Post', order=['-date'])
    query.add_filter('public', '=', True)
    return query

# API entry point for all posts
class AllPostsAPI(Resource):
    def get(self):
        query = QueryHelper()
        return jsonify(list(query.fetch()))

# API entry point for a post given its title
class PostAPI(Resource):
    def get(self, title):
        query = QueryHelper()
        fetched = query.fetch()
        result = list(
            post for post in fetched if title == post['title'])
        if len(result) == 0:
            abort(404)
        return jsonify(result[0])

# API entry point for posts given a category
class PostCategoryAPI(Resource):
    def get(self, category):
        query = QueryHelper()
        fetched = query.fetch()
        result = list(
            post for post in fetched if category in post['categories'])
        if len(result) == 0:
            abort(404)
        return jsonify(result)
