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
	self.selectedNotebook = ko.observable();
	
	/**
	 * Intializes the <code>Application</code> object.
	 * @author Rishabh Rao
	 * @since 0.0.1
	 */
	Application.prototype.initialize = function() {
		debug.log("Creating sample notebook...");
		var notebook = new Notebook("New notebook " + self.notebooks.length);
		
		debug.log("Pushing notebook to notebooks", notebook);
		self.notebooks.push(notebook);
		
		debug.log("Selecting notebook", self.notebooks(), self.notebooks()[0]);
		self.selectNotebook(self.notebooks()[0]);
		
		debug.info("Successfully created application!", self);
	};
	
	/**
	 * Sets the <code>self.selectedNotebook</code> value to the 
	 * notebook that the user selects.
	 * @param {Notebook} notebook The notebook to be selected.
	 * @author Rishabh Rao
	 * @since 0.0.1
	 */
	Application.prototype.selectNotebook = function(notebook) {
		self.selectedNotebook(notebook);
		debug.info("Selected notebook", notebook);
	};
	
	self.initialize();
};