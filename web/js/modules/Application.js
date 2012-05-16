/**
 * An <code>Application</code> contains many <code>Notebook</code>s.
 * Use http://code.google.com/p/jgrousedoc/ for doc generation.
 * @function {void} Application
 * @author Rishabh Rao
 * @since 0.0.1
 */
var Application = function() {
	var self = this;
	
	self.notebooks = ko.observableArray();
	
	/**
	 * Intializes the <code>Application</code> object.
	 * @author Rishabh Rao
	 * @since 0.0.1
	 */
	Application.prototype.initialize = function() {
	};
	
	self.initialize();
};