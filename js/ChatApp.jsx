var React = require('react');
var ChatList = require('./components/chat/ChatList.jsx');
var ChatMessageInput = require('./components/chat/ChatMessageInput.jsx');
var UserOauth = require('./components/oauth/UserOauth.jsx');

var ChatApp = React.createClass({

	render: function () {
		
		return (
			<div className="container">
				<ChatList />
				<ChatMessageInput />
				<UserOauth />
			</div>
		)

	}

});

React.render(<ChatApp />, document.querySelector('#ChatContainer'));