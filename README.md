# Folder Content Size in Alfresco Share 
Customize Share Folder Details page to show (recursive) content size in this folder.

## Share
- Customize Folder Details Page
- Add Folder Size as sub-component to Folder Metadata section
- When browsing with Repository menu in Share, this can show the size of Site, User Homes etc, which are sub-types of cm:folder.

## Repo
Create webscript to calculate node content size. The number may be different from that of Alfresco OOTB webscript (/slingshot/doclib2/node). It includes the child nodes such as thumbnails while the OOTB does not.

## TODO
- Include number of documents & number of sub-folders
- Add Folder Size as a new region/component to Folder Details template, instead of sub-component of Folder Metadata

## References
### Add sub-component to existing component/region
http://docs.alfresco.com/5.0/tasks/dev-extensions-share-tutorials-add-content.html

### YUI widget - Alfresco.FolderMetadata
http://sharextras.org/jsdoc/share/community-4.0.e/symbols/Alfresco.FolderMetadata.html

### Add component/region to existing page/template
- http://docs.alfresco.com/4.0/tasks/tu_40_add-content.html
- http://docs.alfresco.com/4.0/tasks/tu-share-FM-temp-customize.html
- http://docs.alfresco.com/5.0/tasks/dev-extensions-share-tutorials-fm-temp-customize.html
- https://www.alfresco.com/blogs/developer/2011/08/12/customizing-alfresco-share-freemarker-templates/
