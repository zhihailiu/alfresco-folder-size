<import resource="classpath:/alfresco/templates/org/alfresco/import/alfresco-util.js">

// https://jsfiddle.net/oy02axhh/
function formatBytes(bytes) {
	if(bytes == 0) return '0 Byte';
	var k = 1024; // or 1024 for binary
	var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	var i = Math.floor(Math.log(bytes) / Math.log(k));
	return parseFloat((bytes / Math.pow(k, i)).toFixed()) + ' ' + sizes[i];
}

function main() {
	// get parameter and add to model
	AlfrescoUtil.param('nodeRef');

	// call repository webscript
	var connector = remote.connect("alfresco");
	var data = connector.get("/com/acme/nodesize/node-size.json?nodeRef=" + model.nodeRef);

	// create json object from data
	var result = eval('(' + data + ')');

	// get size
	var size = result["size"];

	model.size = formatBytes(size);
}

main();
