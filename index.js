// Simple travel. In the future we can expand this script
const csv = require('csv-parser');
const fs = require('fs');
const { performance } = require('perf_hooks');
const grab = require('./helpers/grab');

if (!process.argv[2] || process.argv[2].indexOf('.csv') === -1) {
  throw new Error('No csv file provided!');
}



let cities1 = cities2 = []; // cities2 values will be copied to cities1
fs.createReadStream(process.argv[2])
  .pipe(csv(['id', 'city', 'country']))
  .on('data', (data) => { 
    cities1.push([parseInt(data.id), `${data.city.trim()},${data.country}`]); 
  })
  .on('end', () => {
    // we should try/catch in all async/promise operations => no warnings from node
    try {
      const measureMS = require('./performance_tests/measureMS');
      let t0 = performance.now();
      let from = to = '';
      for (let i = 1; i < cities1.length; i++){
        for (let j = 1; j < cities2.length; j++){
          if (cities1[i] !== cities2[j]){
            // grab({
            //   id: cities1[i][0],
            //   from: cities1[i][1],
            //   to: cities2[j][1]
            // });
          }
        }
      }
      measureMS('grab-jsons', t0);
    } catch (error) {
      console.error(error);
    }

    
  });












