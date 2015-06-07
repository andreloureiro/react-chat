var React = require('react');

var ChatMessageUserAvatar = React.createClass({

	getDefaultProps: function () {
		return {
			avatarImage: ''
		}
	},

	render: function () {
		return (
			<div>
				<img class="circle reponsive-img" src={ this.props.avatarImage } />
			</div>
		)
	}

});

module.exports = ChatMessageUserAvatar;