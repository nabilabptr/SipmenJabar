import yargs from 'yargs';
import * as dotenv from 'dotenv';
import * as sipmen from "./src/sipmen.js";


/**
 * Environment Variables
 */
dotenv.config();

/**
 * Custom function to Array Protoptype 
 */
Object.defineProperty(Array.prototype, 'chunk', {
  value: function (chunkSize) {
    var that = this;
    return Array(Math.ceil(that.length / chunkSize)).fill().map(function (_, i) {
      return that.slice(i * chunkSize, i * chunkSize + chunkSize);
    });
  }
});

/**
 * CLI config with yargs
 */
yargs(process.argv.slice(2))
  .scriptName('node index.js')
  .usage('$0 <cmd>')
  .command('pengambilan', 'input pengambilan', async () => {
    await sipmen.launch(async (page) => { await sipmen.pengambilan(page) })
  })
  .command('pengembalian', 'input pengembalian', async () => {
    await sipmen.launch(async (page) => { await sipmen.pengembalian(page) })
  })
  .command('hapus', 'hapus record', async () => {
    await sipmen.launch(async (page) => { await sipmen.hapus_all_record(page) })
  })
  .help()
  .argv;
