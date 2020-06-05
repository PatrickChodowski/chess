import sys
sys.path.append('./site')
import os
from flask import Flask, render_template, request, render_template_string
import datetime as dt

today_date = str(dt.date.today())
app = Flask(__name__)
SECRET_KEY = os.urandom(32)
app.config['SECRET_KEY'] = SECRET_KEY
app.config["FLASK_DEBUG"] = 0
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0



@app.route('/', methods=['GET'])
@app.route('/index', methods=['GET'])
def index():
    return render_template('chess_page.html')



if __name__ == '__main__':
    app.run(port=5002)