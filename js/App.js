import React, {Component} from 'react';
require('./style.css');

class App extends Component {

	
  render() {
  	console.log('Warf, Warp 1 Engage');
    return (
		<div>
			<form action="/login" method="POST">
				<div className="login">
					<div className="login-screen">
						<div className="app-title">
							<h1>Login</h1>
						</div>
			 
						<div className="login-form">
							<div className="control-group">
							<input type="text" className="login-field"  placeholder="username" name="username"/>
							<label className="login-field-icon fui-user" htmlFor="login-name"></label>
							</div>
			 
							<div className="control-group">
							<input type="password" className="login-field"  placeholder="password" name="password"/>
							<label className="login-field-icon fui-lock" htmlFor="login-pass"></label>
							</div>
			 
			                <input type="submit" value="Log in" className="btn btn-primary btn-large btn-block" />
						    <br/>
						</div>
					</div>
				</div>
			</form>

		</div>

    	);
  }
};

export default App;