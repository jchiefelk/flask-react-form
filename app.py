from flask import Flask
from flask import Flask, flash, redirect, render_template, request, session, abort, jsonify, url_for
import os

app = Flask(__name__)
app.secret_key = "super secret key"

# attempted a login
attempted = False

@app.route('/')
def home():
	return render_template('index.html')


@app.route('/login', methods=['POST'])
def do_admin_login():
	print(request.form)
	if request.form['password'] =='mice3333' and request.form['username']=='admin':
		session['logged_in'] = True
		return redirect(url_for('loggedin'))
	else:
		print("blah blah")
		return redirect(url_for('error')) # redirect to error route if password or username incorrect
	# return home()

@app.route('/loggedin')
def loggedin():
	if session['logged_in'] == True:
		return "Logged In"


@app.route('/error')
def error():
	session['logged in'] = False
	return render_template('index.html')
	

@app.route('/logout')
def logout():
	session['logged in'] = False
	return home()


if __name__ == "__main__":
	# app.secret_key = os.urandom(12)
	app.run(debug=True)
