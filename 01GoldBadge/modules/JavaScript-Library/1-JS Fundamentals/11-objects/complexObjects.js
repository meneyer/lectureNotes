/*
OBJECTS
*/

let netflix = {
    id: 9,
    name: 'Super Store',
    season1: {
        seasonInfo: {
            episodeInfo: [
                {episode: 1, episodeName: 'Pilot'},
                {episode: 2, episodeName: 'Magazine Profile'},
                {episode: 3, episodeName: 'Shots and Salsa'},
                {episode: 4, episodeName: 'Mannequin'},
                {episode: 5, episodeName: 'Shoplifter'},
                {episode: 6, episodeName: 'Secret Shopper'},
                {episode: 7, episodeName: 'Color Wars'},
                {episode: 8, episodeName: 'Wedding Day Sale'},
                {episode: 9, episodeName: 'All-Nighter'},
                {episode: 10, episodeName: 'Demotion'},
                {episode: 11, episodeName: 'Labor'},      
            ]
        }
    }, 
    season2: {}, 
    season3: {},
}

console.log(netflix);          //id: 9, name: 'Super Store', season1: { seasonInfo: { episodeInfo: [Array] } }, season2: {}, season3: {}
console.log(netflix.season1);   //seasonInfo: {episodeInfo: [[Object], [Object],... [Object], [Object]
console.log(netflix.season1.seasonInfo);  //episodeInfo: [{ episode: 1, episodeName: 'Pilot' },...{ episode: 11, episodeName: 'Labor' }]
console.log(netflix.season1.seasonInfo.episodeInfo[3].episodeName)  //The 4th episode name is Mannequin

//Pick an episode to log in the terminal.  Use dot notation to print off the episode number and name
console.log(netflix.season1.seasonInfo.episodeInfo[8].episode, netflix.season1.seasonInfo.episodeInfo[8].episodeName); //9 All-Nighter


/*
JSON -> JavaScript Object Notation
*/

var json = {
    "workbench.colorTheme": "One Dark+ (Sublime)",
    "window.zoomLevel": 3,
    "files.exclude": {
        "**/.git": true,
        "**/.DS_Store": true,
        "**/*.js": {
            "when": "$(basename).ts"
        },
        "**/*.js.map": {
            "when": "$(basename)"
        }
    },
    "editor.fontFamily": "Monaco, 'Courier New', monospace",
    "editor.detectIndentation": false,
    "editor.letterSpacing": 0,
    "editor.tabSize": 2,
    "files.autoSave": "off",
    "editor.wordWrap": "on",
    "extensions.ignoreRecommendations": true,
    "[html]": {},
    "files.associations": {
        "*.html": "html",
        "*.js": "javascriptreact"
    },
    "html.format.indentInnerHtml": true,
    "editor.fontSize": 11,
    "liveServer.settings.donotShowInfoMsg": true,
    "liveServer.settings.port": 3500,
    "[javascriptreact]": {}
}


let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

console.log(Object.keys(spaceJam));          //Object.keys returns an array consisting of the keys in our object --> ['toonSquad', 'monstars','nbaPlayers']
console.log(Object.keys(spaceJam.toonSquad));   // ['human','rabbit1','rabbit2', 'duck', 'tDevil','bird','cat', 'pig']
console.log(Object.keys (spaceJam.toonSquad).toString());   //toString - changes the array answer to a string--> human,rabbit1,rabbit2,duck,tDevil,bird,cat,pig

console.log(Object.values(spaceJam.toonSquad)); //Object.values returns all the values in an object.

let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}

console.log(garden.vegetable);      //zucchini

let inc;
console.log(garden.inc)             //undefined

let inc = 'vegetable';
console.log(garden.inc)             //undefined as inc is not a sub-object in the list above, so dot notation doesn't work

let inc = 'vegetable';
console.log(garden[inc])            //zucchini.  the [square bracket notation] treats whatever is inside as a string.  vegetable is a string, so it can find the answer is zucchini

let inc = 'fruit';
console.log(garden[inc])        //grape


let baking = {};
baking['zucchini'] = 'better make some bread';
baking.bestKeyEver = 'corn bread';
console.log(baking.zucchini);       //better make some bread
console.log(baking.bestKeyEver)        //cornbread
//you can add key value pairs with either square bracket or dot notation

let baking = {};
baking['zucchini'] = 'better make some bread';
baking.bestKeyEver = 'zucchini';
console.log(baking[baking.bestKeyEver])     //better make some bread how?  the item inside the [] is zucchini, which then refers to the top line for the baking word outside the [], so -- console.log(baking[zucchini]) equals better make some bread


let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}

let g = 'water'

Object.keys(garden).forEach(key =>{
    if (key == g){
        console.log(garden[key]);
    }
})              //true