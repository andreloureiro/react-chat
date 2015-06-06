var React = require('react');
var ChatMessageUserAvatar = require('./ChatMessageUserAvatar.jsx');

var ChatMessage = React.createClass({

	getDefaultProps: function () {
		return {
			userAvatar: '',
			userMessage: ''
		}
	},

	render: function () {
		
		return (
			<div  className="row">
				<div className="col s3">
					<ChatMessageUserAvatar avatarImage={ this.props.userAvatar } />
				</div>
				<div className="col s9">
					<p>{ this.props.userMessage }</p>
				</div>
			</div>
		)

	}

});

module.exports = ChatMessage;