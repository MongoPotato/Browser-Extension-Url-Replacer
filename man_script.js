let links = document.getElementsByTagName("a");
const divswithDataLink = document.querySelectorAll('div[data-link]');
const iframeyt = document.querySelectorAll('iframe[src]');


function replaceurlpiped(url, links){
    browser.storage.local.get("pipedselected").then(result => { //redo the browser storage get
        selectedpiped = result;
        browser.storage.local.get("pipedinstances").then(result => {
            instances = result;
            console.log("Here");
            console.log(url);
            let newurl = url.replace("https://www.youtube.com", instances.pipedinstances[selectedpiped.pipedselected]);
            
            links.setAttribute("href", newurl);
        })});
}


console.log(links);
// deal with www and not 
if(links.length != 0){
    
    for (let i = 0; i < links.length; i++) {
        console.log(links[i].href.includes("https://www.youtube.com"));
        if(links[i].href != null && links[i].href.includes("https://www.youtube.com")){
            console.log("hello");
            let url = links[i].getAttribute('href');
            // datalink for duckduckgo
            newurl = replaceurlpiped(url, links[i]);
        }
        // if(links[i].getAttribute('href').includes("https://twitter.com")){
        //     selectednitter = browser.storage.local.get("nitterselected");
        //     instances = browser.storage.local.get("nitterinstances");

        //     let url = links[i].href;
        //     let newurl = url.replace("https://twitter.com", instances.nitterinstances[selectednitter.nitterselected]);

        //     console.log(newurl);
        //     links[i].href = newurl;
        // }

        // if(links[i].getAttribute('href').includes("https://www.reddit.com")){
        //     selectedteddit = browser.storage.local.get("tedditselected");
        //     instances = browser.storage.local.get("tedditinstances");
            
        //     let url = links[i].href;
        //     newurl = url.replace("https://www.reddit.com", instances[selectedteddit.tedditselected]);
        //     links[i].href = newurl;
        // }
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

