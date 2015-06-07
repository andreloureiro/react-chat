var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var GOOGLE_ID = '146321708255-e3bct6e43fok6443hoqv6nkegh8d5pvu.apps.googleusercontent.com';
var _userInfo = {};


function setUserInfo(user) {
	_userInfo['fullName'] = user.displayName;
	_userInfo['avatar'] = user.image.url;
};

var UserStore = assign({}, EventEmitter.prototype, {

	init: function () {
		hello.init({
			google: GOOGLE_ID
		});
	},

	signin: function () {
		hello('google').login();

		hello.on('auth.login', function (auth) {
			hello(auth.network).api('/me').then(function (response) {
				_userInfo['fullName'] = response.displayName;
				_userInfo['avatar'] = response.image.url;
			})
		});
	},

	getUserInfo: function () {
		return _userInfo;
	},

	emitChange: function () {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function (callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function (callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}

});

AppDispatcher.register(function (payload) {

	var action = payload.action;

	switch(action.actionType) {
		case Constants.GET_USER_INFO:
			UserStore.getUserInfo();

		case Constants.SET_USER_INFO:
			setUserInfo(payload.data);
			UserStore.emitChange();

		default:

	}
	
})

module.exports = UserStore;