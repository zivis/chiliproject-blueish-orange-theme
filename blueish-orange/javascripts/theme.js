// Optimizations for mobile browsing done based on "Responsive Theme" by Xander Dumaine 2011
// and Christian Daehn, ASinteg 2011
//
// This script enables ChiliProject for a more responsive UI for mobile devices (iOS + Android)
// and allows users to add own top menu bar entries.
//
// This script requires jQuery 1.5 or above


/**
 * Helper function to include a given JavaScript file at runtime
 */
function includeScript(jsFilePath) {
	var js = document.createElement("script");
        js.type = "text/javascript";
	js.src = jsFilePath;

	document.body.appendChild(js);
}


/**
 * Add meta tags for mobile device support
 */
function injectViewportMetaTag() {
	var meta = $(document.createElement('meta'));
	meta.name = 'viewport';
	meta.content = 'width=device-width, initial-scale=0.75';
	$$('head')[0].insert(meta);
}


/**
 * Adds an own footer
 */
function injectSignature() {
	var footer = $(document.getElementById('footer'));
	footer.appendChild(document.createTextNode("ASinteg Theme by C. Daehn 2012"));
	if (document.documentElement.clientWidth < 490) {
		footer.appendChild(document.createTextNode(" - iPhone mode active!"));
	}
}

/**
 * Add an own menu button to the top bar menu
 *
 * @param  title        - menu button text
 * @param  link         - link target for menu button
 * @param  insertPos    - index of menu item to insert before
 *
 * The insertPos is important - this position from 0..n
 * is used to get the link object ("<a>" tag), where the new
 * menu button is inserted before. 
 *
 * See the examples in document.observe().
 */
function insertMenuEntry(title, link, insertPos) {
        var nav = document.getElementById("account-nav");
	if (!nav || insertPos < 0) { return; }

	var newItem = document.createElement("li");
	var newLink = document.createElement('a');
	var newTitle = document.createTextNode(title);
	newLink.setAttribute('href', link);
	newItem.appendChild(newLink);
	newLink.appendChild(newTitle);
	nav.insertBefore(newItem, nav.childNodes[insertPos]);
}


/**
 * Initialize and exec all modifications to the UI
 *
 * Adds responsive UI script, modifies top menu bar and footer.
 */
document.observe("dom:loaded", function() {

        // responsive UI stuff
	includeScript("/chiliproject/themes/asinteg/javascripts/respond.min.js");
    	injectViewportMetaTag();
	
	// new footer
	//
	injectSignature();

	// insert menu entry "Homepage" before "My page" button
        //
        insertMenuEntry("Homepage", "/", 3);

	// ONLY insert menu entry before "Projects" button for devices with resolution > 1024
        //
	if (document.documentElement.clientWidth > 1024) {
                insertMenuEntry("My ToDos", "/my/todos", 5);
	}
});

