var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';


var _messages = [];

function addMessage (message) {
	console.log(message);
	_messages.push(message);
}


var ChatStore = assign({}, EventEmitter.prototype	, {

	getMessages: function () {
		return _messages
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

		case Constants.SEND_MESSAGE:
			console.log(action);
			addMessage(action.data);
			ChatStore.emitChange();
			break;

		default:
	}

});

module.exports = ChatStore;