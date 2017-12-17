# ./src/server/server.py
from flask import Flask, render_template
from flask_restful import Api
from api import posts

app = Flask(
        __name__,
        static_folder="../static/dist",
        template_folder="../static/templates")
api = Api(app)

@app.route("/")
def construction():
    return render_template("construction.html")

@app.route("/index")
def index():
    return render_template("index.html")

# for the main page to retrive posts
api.add_resource(
        posts.PostAPI,
        '/posts/api/v1.0/post/<string:title>',
        endpoint='post')
api.add_resource(
        posts.AllPostsAPI,
        '/posts/api/v1.0/posts',
        endpoint='posts')

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=8080, debug=True)
