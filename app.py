from flask import Flask
from flask import Flask, flash, redirect, render_template, request, session, abort
import os

app = Flask(__name__)
app.secret_key = "super secret key"

'''
@app.route('/')
def home():
  return render_template('index.html')
'''

@app.route('/')
def home():
	if not session.get('logged_in'):
		return render_template('index.html')
	else: 
		return "Hello Boss!"

@app.route('/login', methods=['POST'])
def do_admin_login():
	print request.form
	if request.form['password'] =='password' and request.form['username']=='admin':
		session['logged_in'] = True
	else:
		flash('wrong password')
	return home()

@app.route('/logout')
def logout():
	session['logged in'] = False
	return home()


if __name__ == "__main__":
	# app.secret_key = os.urandom(12)
	app.run(debug=True)
