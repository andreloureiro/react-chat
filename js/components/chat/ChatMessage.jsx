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
			<div className="row">
				<div className="col s8 card-panel grey lighten-3">
					<div  className="row">
						<div className="col s2">
							<ChatMessageUserAvatar avatarImage={ this.props.userAvatar } />
						</div>
						<div className="col s10">
							<p>{ this.props.userMessage }</p>
						</div>
					</div>
				</div>
			</div>
		)

	}

});

module.exports = ChatMessage;