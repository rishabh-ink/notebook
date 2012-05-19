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
		self.fixIsoStringBug();
		
		self.setTitle(title);
		self.setContent(content);
		self.createdOn(new Date().toISOString());
		self.isFavourited(false);
		self.isStarred(false);

		debug.info("Successfully created note!", self);
	};
	
	/**
	 * Setter for title.
	 * @param {String} title A short title for the Note.
	 * @author Rishabh Rao
	 * @since 0.0.1
	 */
	Note.prototype.setTitle = function(title) {
		$.trim(title) ? self.title($.trim(title)) : self.title("No title");
	};
	
	/**
	 * Setter for content.
	 * @param {String} content A descriptive content for the Note.
	 * @author Rishabh Rao
	 * @since 0.0.1
	 */
	Note.prototype.setContent = function(content) {
		$.trim(content) ? self.content($.trim(content)) : self.content("No content");
	};
	
	/**
	 * Toggles starred.
	 * @author Rishabh Rao
	 * @since 0.0.1
	 */
	self.toggleStar = function() {
		self.isStarred(!self.isStarred());
	};
	
	/**
	 * Toggles heart.
	 * @author Rishabh Rao
	 * @since 1.0.1
	 */
	self.toggleHeart = function() {
		self.isFavourited(!self.isFavourited());
	};
	
	/**
	 * Fixes the missing Date.toISOString in browsers which don't have this function.
	 * @author Robert S. Robbins (williamsportwebdeveloper.com/cgi/wp/?p=503)
	 */
	Note.prototype.fixIsoStringBug = function() {
		if (!Date.toISOString) {
			var padzero = function(n) {
				return n < 10 ? '0' + n : n;
			};
			
			var pad2zeros = function(n) {
				if (n < 100) {
					n = '0' + n;
				}
				if (n < 10) {
					n = '0' + n;
				}
				return n;
			};
			
			Date.prototype.toISOString = function() {
				return this.getUTCFullYear() + '-'
						+ padzero(this.getUTCMonth() + 1) + '-'
						+ padzero(this.getUTCDate()) + 'T'
						+ padzero(this.getUTCHours()) + ':'
						+ padzero(this.getUTCMinutes()) + ':'
						+ padzero(this.getUTCSeconds()) + '.'
						+ pad2zeros(this.getUTCMilliseconds()) + 'Z';
			};
		}
	};
	
	self.initialize(title, content);
};