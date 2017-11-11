# server.py
from flask import Flask, render_template
import random

app = Flask(__name__, static_folder="../static/dist", template_folder="../static/templates")

def get_hello():
    greeting_list = [
        'Ciao',
        'Hei',
        'Salut',
        'Hola',
        'Hallo',
        'Hej'
    ]
    return random.choice(greeting_list)

@app.route("/")
def construction():
    return render_template("construction.html")

@app.route("/index")
def index():
    return render_template("index.html")

@app.route("/hello")
def hello():
    return get_hello()

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5000, debug=True)
