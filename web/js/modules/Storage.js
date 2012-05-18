var Storage = function() {
	var self = this;
	
	self.STORE_KEY = "NOTEBOOK_APP_DATA";
	
	self.model = null;
	
	/**
	 * Loads an already stored model.
	 * @author Rishabh Rao
	 * @since 0.0.1
	 */
	self.loadModel = function() {
		debug.info("Attempting to load from localstorage...");
		if(Modernizr.localstorage) {
			debug.log("Checking for previously stored data...");
			var notebookData = localStorage.getItem(self.STORE_KEY);
			
			if(notebookData) {
				debug.info("Found previously stored data! Applying Knockout mapping...");
				self.model = ko.mapping.fromJS(notebookData, { 'ignore': [ "addNote", "removeNote"] });
			} else {
				debug.warn("No previously stored data found.");
				self.model = new Notebook(self);
			}
		} else {
			debug.warn("No localstorage capability found.");
			self.model = new Notebook(self);
		}
		
		return self.model;
	};
	
	/**
	 * Stores the model.
	 * @author Rishabh Rao
	 * @since 0.0.1
	 */
	self.storeModel = function() {
		debug.info("Attempting to store to localstorage...");
		if(Modernizr.localstorage) {
			localStorage.setItem(self.STORE_KEY, ko.mapping.toJS(self.model));
		} else {
			debug.warn("No localstorage capability found.");
		}
	};
};