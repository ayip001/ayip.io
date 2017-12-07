# ./src/server/server.py
from flask import Flask, render_template

app = Flask(__name__, static_folder="../static/dist", template_folder="../static/templates")

@app.route("/")
def construction():
    return render_template("construction.html")

@app.route("/index")
def index():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=8080, debug=True)
