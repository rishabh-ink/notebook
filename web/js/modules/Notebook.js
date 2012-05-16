/**
 * A <code>Note</code> contains a <code>title</code> and a <code>content</code>.
 * Use http://code.google.com/p/jgrousedoc/ for doc generation.
 * @function {void} Note
 * @param {String} title A short title for the Note.
 * @param {String} content A descriptive content for the Note.
 * @author Rishabh Rao
 * @since 0.0.1
 */
var Notebook = function() {
	var self = this;
	
	self.notes = ko.observableArray();
	
	self.initialize();
};

/**
 * Intializes the <code>Notebook</code> object.
 * @author Rishabh Rao
 * @since 0.0.1
 */
Notebook.prototype.initialize = function() {
};

/**
 * Appends a new <code>Note</code> object to the current <code>Notebook</code>.
 * @param note A <code>Note</code> object that needs to be added to the current <code>Notebook</code>.
 * @author Rishabh Rao
 * @since 0.0.1
 */
Notebook.prototype.addNote = function(note) {
	
};