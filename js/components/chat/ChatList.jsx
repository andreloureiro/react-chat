var React = require('react');
var ChatMessage = require('./ChatMessage.jsx');
var ChatStore = require('../../stores/ChatStore');

function getMessages() {
	return {
		messages: ChatStore.getMessages()
	};
}

var ChatList = React.createClass({

	getInitialState: function () {
		return getMessages();
	},

	componentDidMount: function () {
		ChatStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function () {
		ChatStore.removeChangeListener(this._onChange);
	},

	render: function () {

		var messages = this.state.messages.map(function (message) {
			return (
				<ChatMessage key={ message._id } userName={ message.fullName } userAvatar={ message.avatar } userMessage={ message.text } />
			)
		});
		
		return (
			<div className="row">
				{ messages }
			</div>
		)

	},

	_onChange: function () {
		this.setState(getMessages());
	}

});

module.exports = ChatList;