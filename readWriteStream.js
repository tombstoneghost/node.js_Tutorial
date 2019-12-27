const fs = require('fs');

//This is used to read Data from a file and Manipulate it.
const readStream = fs.createReadStream('./exampleX.txt','utf8');

//This is used to write Data into a file.
const writeStream = fs.createWriteStream('exampleX2.txt.gz'); //.gz is used for gzip function used in pipes. You can remove the .gz if not using pipes

//Data is read in chunk so that you can manipulate the data that is currently loaded. You do not need to wait for the complete file to load.
// readStream.on('data', (chunk)=>{  
//     console.log(chunk);
//     writeStream.write(chunk);
// });

//The Above Code is commented so that Pipe Stream could be used.
//In the Above Code, we Read the Data from ExampleX.txt and Write the data in ExampleX2.txt file.

/*Why to use Read/Write Streams
  
  Stream Uses a very small buffer and reads the files in chunks. 
  This helps in saving the buffer space. If we directly write the file,
  the size avaiable in buffer should is more than or equal to the file size. 
  If not so, the buffer will overflow, causing an error. 

  Suppose you have a text file of 2.7GB. If you will directly write it, 
  it will result in error and program crashes. 

  Using a Stream will be a much better idea. It will save Space as well as Time.

*/

/*-----------------------------------------------------------------------*/
/*------------------Pipes and Pipe Chaining------------------------------*/

//Pipe is a short-hand version of all the above mention code.

//readStream.pipe(writeStream);

//Pipe Chaining

const zlib = require('zlib');
const gzip = zlib.createGzip();

readStream.pipe(gzip).pipe(writeStream);
//The Above line will compress the data and then pipe it to the writeStream.