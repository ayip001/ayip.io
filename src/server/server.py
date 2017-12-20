# ./src/server/server.py
from flask import Flask, render_template
from flask_restful import Api
from api import posts
# Uncomment this for development in c9.io
import os

app = Flask(
        __name__,
        static_folder="../static/dist",
        template_folder="../static/templates")
api = Api(app)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    return render_template("index.html")

# APIs for retriving posts
api.add_resource(
        posts.PostAPI,
        '/posts/api/v1.0/post/<string:title>',
        endpoint='post')
api.add_resource(
        posts.AllPostsAPI,
        '/posts/api/v1.0/all',
        endpoint='all')
api.add_resource(
        posts.PostCategoryAPI,
        '/posts/api/v1.0/category/<string:category>',
        endpoint='category')

if __name__ == "__main__":
    #app.run(host='127.0.0.1', port=8080, debug=True)
    # Uncomment this for development in c9.io
    app.run(host=os.getenv('IP', '0.0.0.0'),port=int(os.getenv('PORT', 8080)),debug=True)
