# ./src/server/api/posts.py
from flask import jsonify
from flask_restful import Resource
from google.cloud import datastore

client = datastore.Client()

class PostsAPI(Resource):
    def get(self, id):
        return jsonify( { 'it': 'works' } )
