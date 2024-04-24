const jsonfile = require('jsonfile');
const moment = require ('moment');
const simpleGit = require('simple-git');
const FILE_PATH = './data. json';

function getRandomInt(min, max) {
    min = Math.ceil(min); // Round up the minimum value
    max = Math.floor(max); // Round down the maximum value
  
    // Use Math.random() to get a random decimal between 0 (inclusive) and 1 (exclusive)
    const randomDecimal = Math.random();
  
    // Multiply the random decimal by the range (max minus min) and add min to get the range within the desired limits
    const range = max - min;
    const randomInteger = Math.floor(randomDecimal * range) + min;
  
    return randomInteger;
  }


const makeCommit = n => {
    if(n==0){
        return simpleGit().push()
    }
        const x = getRandomInt(0,54);
        const y = getRandomInt(0,6);
        const DATE = moment().subtract(1, 'y').add(1, 'd')
        .add (x, 'w').add(y, 'd').format();
    const data = {
        date: DATE,
        data: "Random Noise Sampling Sample",
    }
        console.debug("Adding Random Noise Sampling into Git Submission Experiment", DATE);
        jsonfile.writeFile(FILE_PATH, data, ()=>{
        simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE },
        makeCommit.bind(this, --n));
    });
    }
    makeCommit(100);