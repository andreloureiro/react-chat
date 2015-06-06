var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';


var _messages = [];

function addMessage (message) {
	_messages.push(message);
}


var ChatStore = assign({}, EventEmitter, {

	getMessages: function () {
		return _messages
	}

	emitChange: function () {
		this.emit(CHANGE_EVENT);
	},

	addListener: function (callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeListener: function (callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}

});


AppDispatcher.register(function (action) {
	
	switch(action.actionType) {

		case Constants.ADD_MESSAGE:
			addMessage(action.data);
			ChatStore.emitChange();
			break;

		default:
	}

});


module.exports = ChatStore;