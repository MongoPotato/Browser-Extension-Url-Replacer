let links = document.getElementsByTagName("a");
const divswithDataLink = document.querySelectorAll('div[data-link]');
const iframeyt = document.querySelectorAll('iframe[src]');


function replaceurlpiped(url, links){
    browser.storage.local.get("pipedselected").then(result => { //redo the browser storage get
        selectedpiped = result;
        browser.storage.local.get("pipedinstances").then(result => {
            instances = result;
            let newurl = url.replace("https://www.youtube.com", instances.pipedinstances[selectedpiped.pipedselected]);
            
            links.setAttribute("href", newurl);
        })});
}

function replacednitter(url, links){
    browser.storage.local.get("nitterselected").then(result => { //redo the browser storage get
        selectednitter = result;
        browser.storage.local.get("nitterinstances").then(result => {
            instances = result;
            let newurl = url.replace("https://www.twitter.com", instances.nitterinstances[selectednitter.nitterselected]);
            
            links.setAttribute("href", newurl);
        })});
}

function replaceteddit(url, links){
    browser.storage.local.get("tedditselected").then(result => { //redo the browser storage get
        selectedteddit = result;
        browser.storage.local.get("tedditinstances").then(result => {
            instances = result;
            let newurl = url.replace("https://www.reddit.com", instances.tedditinstances[selectedteddit.tedditselected]);
            
            links.setAttribute("href", newurl);
        })});
}




console.log(links);
if(links.length != 0){
    
    for (let i = 0; i < links.length; i++) {

        if(links[i].href != null && links[i].href.includes("https://www.youtube.com")){
            let url = links[i].getAttribute('href');
            replaceurlpiped(url, links[i]);
        }
        
        if(links[i].href != null && links[i].getAttribute('href').includes("https://www.twitter.com")){
            let url = links[i].getAttribute('href');
            replacednitter(url, links[i]);
        }

        if(links[i].getAttribute('href').includes("https://www.reddit.com")){
            let url = links[i].getAttribute('href');
            replacednitter(url, links[i]);
        }
    }
}

//divs with src check

// if(divswithDataLink.length != 0){
//     for(let i = 0; i < divswithDataLink.length; i++){
//         if(divswithDataLink[i].getAttribute('data-link').includes("https://www.youtube.com")){
//             let url = divswithDataLink[i];
//             // datalink for duckduckgo
//             newurl = replaceurlpiped(url.getAttribute('data-link'));
//             divswithDataLink[i].setAttribute('data-link', newurl);
//         }
//     }
// }

//iframe check

// if(iframeyt.length != 0){
   
//     for(let i = 0; i < iframeyt.length; i++){
//         if(iframeyt[i].getAttribute('src').includes("https://www.youtube.com")){
//             let url = iframeyt[i];

//             newurl = replaceurlpiped(url.getAttribute('src'));
//             iframeyt[i].setAttribute('src', newurl);
//         }
//     }
// }

