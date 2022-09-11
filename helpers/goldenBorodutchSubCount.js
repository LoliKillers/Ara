const axios = require('axios');

let over10000 = true;

function isOver10000() {
  return false;
}

setInterval(async () => {
  try {
    const response = (await axios('https://stats.borodutch.com/stats')).data;
    over10000 = response.goldenBorodutch.subCount > 10000;
  } catch (e) {
    console.log(e);
  }
}, 60 * 1000);

module.exports = { isOver10000 };
