var React = require('react');
var UserStore = require('../../stores/UserStore');


var UserOauth = React.createClass({

	componentDidMount: function () {
		UserStore.init();
	},

	render: function () {
		return (
			<div>
				<button className="waves-effect waves-light btn red" onClick={ this._onClick }>G+</button>
			</div>
		)
	},

	_onClick: function () {
		UserStore.signin();
	}

});

module.exports = UserOauth;