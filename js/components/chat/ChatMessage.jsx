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
				<div class="col s12 m8 offset-m2 l6 offset-l3">
			        <div class="card-panel grey lighten-5 z-depth-1">
			          <div class="row valign-wrapper">
			            <div class="col s2">
			              <img src={ this.props.userAvatar } alt="" class="circle responsive-img" />
			            </div>
			            <div class="col s10">
			              <small>{ this.props.userName.toUpperCase() } diz:<br /></small>
			              <span class="black-text">
			                { this.props.userMessage }
			              </span>
			            </div>
			          </div>
			        </div>
			      </div>
			</div>
		)

	}

});

module.exports = ChatMessage;