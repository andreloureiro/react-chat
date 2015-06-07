var AppDispatcher = require('../.dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');

var UserActions = {

	getUserInfo: function () {
		AppDispatcher.handleViewAction({
			actionType: Constants.GET_USER_INFO
		})
	},

	setUserInfo: function (user) {
		AppDispatcher.handleViewAction({
			actionType: Constants.SET_USER_INFO,
			data: user
		})
	}

};

module.exports = UserActions;