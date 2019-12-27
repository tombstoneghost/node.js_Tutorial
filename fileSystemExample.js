/*The File System Module allows us to 
    1.  Create Files
    2.  Read Files
    3.  Delete Files
    4.  Create Folders
    and much more*/

const fs = require('fs');

//Create a file
//fs.writeFile('example.txt',"This is an Example",(err)=>
//{
    // if(err)
    //     console.log(err);
    // else
    // {
    //     console.log('File Successfully Created');
        // fs.readFile('example.txt','utf8',(err,file)=>   //If No Encoding time is Specified, the outpur will be in buffer
        // {
        //     if(err)
        //         console.log(err);
        //     else    
        //         console.log(file);
        // });
//     }
// });

//The above Commented code will throw an error as there will be no file as example.txt, hence no output.

// fs.rename('example.txt','example2.txt',(err)=>
// {
//     if(err)
//         console.log(err);
//     else
//         console.log('Successfully Renamed the File');
// });

//Rename Code is Commented so that the append Code can work.

// fs.appendFile('example2.txt','Some Data being appended',(err)=>
// {
//     if(err)
//         console.log(err);
//     else
//         console.log("Data Appended Successfully");
// });

//Append Code is Comment so that we can delete the file.

// fs.unlink('example2.txt',(err)=>
// {
//     if(err)
//         console.log(err);
//     else   
//         console.log("Successfully Deleted the File");
// });


/*----------------------------------------------*/

/*-----------Working with Folders---------------*/

//Creating a Folder

// fs.mkdir('tutorial',(err)=>{
//     if(err)
//         console.log(err);
//     else
//         //console.log('Folder Successfully Created');
//         fs.rmdir('tutorial',(err)=>
//         {
//             if(err)
//                 console.log(err);
//             else
//                 console.log("Successfully Deleted the Folder");
//         });
// });

//Create a Folder and then Create a File in it
// fs.mkdir('tutorial',(err)=>{
//     if(err)
//         console.log(err);
//     else{
//         fs.writeFile('./tutorial/example.txt','123',(err)=>{
//             if(err)
//                 console.log(err);
//             else
//                 console.log("Successfully Created File");
//         });
//     }
// });

//Delete a Folder which has file in it
// fs.unlink('./tutorial/example.txt',(err)=>
// {
//     if(err)
//         console.log(err);
//     else 
//     {    
//         console.log("File Deleted");
//         fs.rmdir('tutorial',(err)=>{
//             if(err)
//                 console.log(err);
//             else
//                 console.log("Folder Deleted");
//         });
//     }
// });

//readDir is a function which is used to get the list of files inside a Directory
// fs.readdir('example',(err,files)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log(files);
        //    for(let file of files)
        //    {
        //        fs.unlink('./example' + file,(err)=>{
        //             if(err)
        //                console.log(err);
        //             else
        //                 console.log("Successfully Deleted Files");
        //        });
        //    }
// });