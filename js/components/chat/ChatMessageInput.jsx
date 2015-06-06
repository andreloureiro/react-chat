var React = require('react');
var ChatActions = require('../../actions/ChatActions');

var ChatMessageInput = React.createClass({



	render: function () {
		
		return (
			<div className="row">
				<div className="col s11">
					<input type="text" onKeyDown={ this._onKeyDown } />
				</div>
			</div>
		)

	},

	_onKeyDown: function (e) {
		if (e.target.keyCode == 13) {
			ChatActions.addMessage(e.target.value);
		};
	}

});

module.exports = ChatMessageInput;