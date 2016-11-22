<import resource="classpath:/alfresco/templates/org/alfresco/import/alfresco-util.js">

// get parameter and add to model
AlfrescoUtil.param('nodeRef');

// call repository webscript
var connector = remote.connect("alfresco");
var data = connector.get("/com/acme/foldersize/folder-size.json?nodeRef=" + model.nodeRef);

// create json object from data
var result = eval('(' + data + ')');
model.size = result["size"];
