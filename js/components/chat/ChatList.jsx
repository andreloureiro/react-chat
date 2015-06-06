var React = require('react');
var ChatMessage = require('./ChatList.jsx');

var ChatList = React.createClass({

	render: function () {
		
		return (
			<div className="row">
				<ChatMessage />
			</div>
		)

	}

});

module.exports = ChatList;