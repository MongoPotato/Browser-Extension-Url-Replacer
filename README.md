# Browser-Extension-Url-Replacer
Firefox browser extension to replace youtube url with piped instances and replace all twitter url to nitter


# TODO 
1. Find a better way than to iterate through all <a> tags 
2. In man_script.js have a function as in background.js that checks if there are something that is stored in the extension cache
3. Disk slow maybe fetch from RAM instead of using localstorage to store things in a session use a mix of local and session storage (https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage)
4. Fix instances 
5. Redo the dictionnary so that it takes less space and also are more practical to use.
