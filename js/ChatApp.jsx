var React = require('react');
var ChatMessageInput = require('./components/chat/ChatMessageInput.jsx');

var ChatApp = React.createClass({

	render: function () {
		
		return (
			<div>
				Chat App
				<ChatMessageInput />
			</div>
		)

	}

});

React.render(<ChatApp />, document.querySelector('#ChatContainer'));