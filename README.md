# node.js_Tutorial

This is a Complete node.js Tutorial. This Covers almost all necessary topics of node.js

node.js is a Server Side Framework of JavaScript.

Download and Installation:

You can download its package from https://nodejs.org/en/
Installation of node.js is way to simple. Just follow the installer. Nothing Special to do in the installtion.

Running Node Projects:

To Run a Node Project, just type:
  node projectname
in the command prompt.

The Tutorial Contents and Documentation is below.

1. Testing Node is Working                                :    app.js

2. Working with Modules                                   :    app.js + tutorial.js

3. Event Module and EventEmitter Class                    :    Eventapp.js + tutorial.js

4. Working with ReadLine Modules                          :    readLineExample.js

5. Working with File System Module                        :    fileSystemExample.js
  
6. Working with Readable and Writeable Streams            :    readWriteStream.js

7. Creating an HTTP Server                                :    httpServer.js

8. Serving Static Files with HTTP and File System Modules :    filesHttp.js

9. Create Package.json using npm init:-
    npm stands for Node Package Manager

    Package.json contains all the meta data. 
    To Create one, type npm init in the command line. 
    Enter the Data Accordinly. 

10.Installing Packages Using npm:-
    Package is a reusable code which we can include in our own application.
    To look for new Packages visit: https://www.npmjs.com/

    Command: npm install packageName

    Package is installed in the folder which you are currently in. 

    Every Package you install in automatically added in the Dependencies Section in the Package.json file

    To Remove a package: npm uninstall packageName

11.Semantic Versioning:-
    This tells us about the changes that occured and the current version of the package.

    Suppose we have a Dependency 'loadash' with version '^4.17.11'
        The Version is defined as major.minor.patch.

        Major Version tells us the Currently fully updated version

        Minor Version is when some new features are added and some old are removed. 

        Patch Version is when some bugs are fixed.

        ^ character symbolsis the following rules:
            1. Do not make any Major Update.
            2. You are allowed to do any Minor and Patch Update only.
            3. If you want to perform only patch updates use ~ symbol instead of ^
            4. If no Symbol is used, then you can only use the current installed version and no updates can be done. 
12.Getting Started with Express Web Framework               :    expressServer.js

    Install the express Framework by performing the following steps:
        create a package.json file 
        install express by typing the following command:    npm install express

13.Serving Static Files with Express                        :    expressStatic.js

14.HTTP Post Request with Express and Body Parser Module    :    expressPost.js
    Install the Body Parser Module by using the following command:
        npm install body-parser

15.Working with JSON Data - Express and Body Parser         :    expressJSON.js

16.User Input Validation with Express and JOI               :    expressUserValid.js
    Install the JOI module by using the following command:
        npm install joi
    Comment the Script in the body Section in loginForm.html in Static folder

17.Array Validation with Express and JOI                    :    expressArrayValid.js

18.Getting Started with EJS Templates with Express          :    expressEJS.js
    EJS is a Template Langauge which allow us to develop more more dynamic web pages.

    Template Used: EJSTemplate.html available in Static folder.

    Create Folder named views.
    Create a file index.ejs in the same and copy the content of EJSTemplate.html in it.

19.Middleware                                               :    middleWare.js

    Middleware is the code that executed between the user itself and the server.

20.Working with Express Router                              :    expressRouter.js
    Express Router allows us to separate our routes to different paths. Makes our code manageable.

    Create a folder routes. This will contain all our routes. 
    Here we have used people.js as an example.
