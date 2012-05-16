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
	
	self.title = ko.observable();
	self.content = ko.observable();
	self.createdOn = ko.observable();
	self.isFavourited = ko.observable();
	self.isStarred = ko.observable();
	
	/**
	 * Intializes the <code>Note</code> object with a <code>title</code> and a <code>content</code>.
	 * @param {String} title A short title for the Note.
	 * @param {String} content A descriptive content for the Note.
	 * @author Rishabh Rao
	 * @since 0.0.1
	 */
	Note.prototype.initialize = function(title, content) {
		self.setTitle(title);
		self.setContent(content);
		self.createdOn(new Date());
		self.isFavourited(false);
		self.isStarred(false);

		debug.info("Successfully created note!", self.title(), self.content(), self.createdOn(), self.isFavourited(), self.isStarred());
	};
	
	/**
	 * Setter for title.
	 * @param {String} title A short title for the Note.
	 * @author Rishabh Rao
	 * @since 0.0.1
	 */
	Note.prototype.setTitle = function(title) {
		(null == title) ? self.title("No title") : self.title($.trim(title));
	};
	
	/**
	 * Setter for content.
	 * @param {String} content A descriptive content for the Note.
	 * @author Rishabh Rao
	 * @since 0.0.1
	 */
	Note.prototype.setContent = function(content) {
		(null == content) ? self.content("No content") : self.content($.trim(content));
	};
	
	self.initialize(title, content);
};