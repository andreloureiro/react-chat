var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');

var ChatActions = {

	getMessages: function () {
		AppDispatcher.handleViewAction({
			actionType: Constants.GET_MESSAGES
		});
	},

	sendMessage: function (message) {
		AppDispatcher.handleViewAction({
			actionType: Constants.SEND_MESSAGE,
			data: message
		});
	}

};

module.exports = ChatActions;