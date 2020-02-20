// const fetch = require('node-fetch');

require('dotenv').config()

const fetch = require('node-fetch');



const getWeather = async (location,countryCode) => {
    let data = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${location},${countryCode}&APPID=${process.env.APPID}`);

    return await data.json(); ///not console logging, now returning so can display on the page
    
}

module.exports = getWeather; //export function to be run in index.js. On one line can only export one but can put in an object

// const request = require('request');
// const {promisify} = require('util');

// const promisifiedRequest = promisify(request);

// const getWeather = async () => {
//     let data = await promisifiedRequest({
//         uri:`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${process.env.APPID}`,
//         json:true
//     });

//     return data.body;
    
// }

// module.exports = getWeather;