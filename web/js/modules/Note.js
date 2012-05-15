/**
 * A <code>Note</code> contains a <code>title</code> and a <code>content</code>.
 * Use http://code.google.com/p/jgrousedoc/ for doc generation.
 * @function {void} Note
 * @param {String} title A short title for the Note.
 * @param {String} content A descriptive content for the Note.
 * @author Rishabh Rao
 * @since 0.0.1
 */
var Note = function(title, content) {
	var self = this;
	
	self.title = null;
	self.content = null;
	self.createdOn = null;
	
	self.initialize = function(title, content) {
		debug.info("Creating Note", title, content);
		
		self.title = (null == title) ? "No title" : title;
		self.content = (null == content) ? "No content" : content;
		self.createdOn = new Date();
	};
	
	self.initialize();
};