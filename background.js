//browser.storage.local.set({ "key": ""})


// find a better storage solution than local storage

//Default piped instances key: name, value: instance url
let defaultpipedinstances = {"kavin rocks" : "https://piped.video", "garudalinux" : "https://piped-api.garudalinux.org",
    "libre kavin rocks" : "https://pipedapi-libre.kavin.rocks", "tokhmi" : "https://piped.tokhmi.xyz"};

let defaultnitterinstances = {"nitter official" : "https://nitter.net", "nitter lacontrevoie.fr" : "https://nitter.lacontrevoie.fr",
    "nitter 1d4 us": "https://nitter.1d4.us", "nitter kavin rocks" : "https://nitter.kavin.rocks", 
    "nitter unixfox eu" : "https://nitter.unixfox.eu", "nitter japanese" : "https://twitter.076.ne.jp"}

let defaulttedditinstances = {"teddit official" : "https://teddit.net", "teddit garudalinux" : "https://teddit.garudalinux.org",
    "teddit zaggy nl" : "https://teddit.zaggy.nl", "teddit pussthecat" : "https://teddit.pussthecat.org"}

let instances = ["pipedinstances", "nitterinstances", "tedditinstances"];
let docelem = ["pipedlist", "nitterlist", "tedditlist"]

let selected = ["kavin rocks", "nitter official", "teddit official"];

// let instanceselected = {"pipedinstances" : 0, "nitterinstances" : 0, "tedditinstances" : 0};


// function findIndexByKey(key, dic){
//     let index = 0;
//     for(let item in dic){
//         if(item == key){
//             return index;
//         }
//         index++;
//     }
//     return -1;
// }

for (let i = 0; i < instances.length; i++){
    
    browser.storage.local.get(instances[i])
    .then(result => {
        if(Object.keys(result).length == 0 && result.constructor === Object){
            temp = instances[i];
            if(temp === "pipedinstances"){ //choose piped or nitter instances
                browser.storage.local.set({[temp]: defaultpipedinstances});
                browser.storage.local.set({"pipedselected" : selected[i]});
            }
            if(temp === "nitterinstances"){
                browser.storage.local.set({[temp]: defaultnitterinstances});
                browser.storage.local.set({"nitterselected" : selected[i]});
            }
            if(temp === "tedditinstances"){
                browser.storage.local.set({[temp]: defaulttedditinstances});
                browser.storage.local.set({"tedditselected" : selected[i]});
            }
        }
    }).catch(error => {
        console.error("Error option: ", error);
    });

    let list = document.getElementById(docelem[i]);
    browser.storage.local.get(instances[i]).then(result => {
        let options = Object.values(result)
        for (let option in options[0]){
            let optionElem = document.createElement("option"); //redraw from what i selected maybe
            optionElem.value = option;
            optionElem.text = option;
            list.appendChild(optionElem);
            console.log(list);
        }
    }).catch(error => {
        console.error("Error option: ", error);
    });
}

// can optimize on 1 function
function handleInputPiped(){
    console.log("hello");
    let input = document.getElementById("InputPiped").value;

    browser.storage.local.set({"pipedselected" : input})
}

function handleInputNitter(){
    let input = document.getElementById("InputNitter").value;

    browser.storage.local.set({"nitterselected" : input})
}

function handleInputTeddit(){
    let input = document.getElementById("InputTeddit").value;
    
    browser.storage.local.set({"tedditselected" : input})
}


document.getElementById('InputPiped').addEventListener('input', handleInputPiped);
document.getElementById('InputNitter').addEventListener('input', handleInputNitter);
document.getElementById('InputTeddit').addEventListener('input', handleInputTeddit);