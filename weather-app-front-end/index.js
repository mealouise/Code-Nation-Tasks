const hbs = require('express-handlebars'); //importing stuff installed, in nod modules folder
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express(); //set up express

const getWeather = require('./lib/getWeather');
 //look in this file and everything exported going to take
// doing getWeather.getWeather
// export function but require the file
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); // once made a string pass as json format
//path module to join 2 paths together. console log would show home and laptop username.creating file path, add public and tell express to use as static folder. dir - home,username

app.engine('.hbs', hbs({ 
    //telling express to use handlebars and passing some values so layout - keeps everything consistent(html, body tags on every page)
    defaultLayout: 'layout',
    extname: '.hbs' //setting extension name to hbs
}));
app.set('view engine', '.hbs'); //tell express to use this engine

app.get('/', (req,res) => { //to access the data
    // let data = await getWeather(); 
    // // console.log(data)
    // let location = data.name;
    // let temp = data.main.temp;
    // let pressure = data.main.pressure;
    // let humidity = data.main.humidity;
    // // console.log(temp)
    // let wind = data.wind.speed;
    // let clouds = data.clouds.all;
    // let weatherMain = data.weather[0].main;
    // let weather = data.weather[0].description;

    // console.log(wind)
    res.render('index');
//     res.render('index',{location,temp,wind,weather,pressure,humidity,clouds,weatherMain}); //render hbs page and send over css over with it
});

app.post('/', async(req, res) => {
    let location = req.body.location;
    let countryCode = req.body.countryCode;
    console.log(location);
    let data = await getWeather(location,countryCode);
    console.log(data)

    let temp = data.main.temp;
    let humidity = data.main.humidity;
    res.render('index', {data: {temp, humidity}});
});

app.listen(3000, () => {
    console.log('server listening on port 3000');
});