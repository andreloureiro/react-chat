var React = require('react');

var ChatMessageInput = React.createClass({

	render: function () {
		
		return (
			<div className="row">
				<div className="col s11">
					<input type="text" />
				</div>
			</div>
		)

	}

});

module.exports = ChatMessageInput;