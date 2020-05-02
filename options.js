function init() {
	loadVals();
	document.getElementById("btnSave").addEventListener("click", save);
}

function save() {
	var BlockSeen = document.getElementById('chkBlockSeen').checked;
	var BlockTyping = document.getElementById('chkBlockTyping').checked;

	chrome.extension.sendRequest({ optBlockSeen: BlockSeen, optBlockTyping: BlockTyping }, function (response) {
		// do something with response.addr...
	});


	chrome.storage.sync.set({ 'blockSeen': BlockSeen, 'blockTyping': BlockTyping }, function () {
	});

}

window.onload = function () {
	init();
}

function loadVals() {
	chrome.storage.sync.get(['blockSeen', 'blockTyping'], function (SeenBlock) {
		document.getElementById('chkBlockSeen').checked = SeenBlock.blockSeen;
		document.getElementById('chkBlockTyping').checked = SeenBlock.blockTyping;
	})
}
