// Typing index.js or index into command line will run an application that uses Jest for running unit tests and Inquirer for collecting input from user.


//Application will first bring up four prompts:
    // 1. Enter text for the logo. (Must not be more than 3 characters.)
    // 2. Enter a text color. (A color keyword of hexadecimal number)
    // 3. Select a shape for the logo. (choose from a dropdown: circle, trianlge, square)
    // 4. Enter a shape color.

//After four prompts are completed, logo.svg file is created and "Generated logo.svg" is printed on command line

//Use this directory structure:

// ├── examples/           // Example svg file(s) created with the app
// ├── lib/                // Folder for classes or functions
//     ├── shapes.js       // Exports `Triangle`, `Circle`, and `Square` classes
//     ├── shapes.test.js  // Jest tests for shapes
//     └── more...         // Additional files and tests
// ├── .gitignore          // Indicates which folders and files Git should ignore
// ├── index.js            // Runs the application using imports from lib/
// ├── package.json
// └── README.md           // App description, link to video, setup and usage instructions

// // The application must include Triangle, Circle, and Square classes DONE, as well as tests for each of these classes using Jest. While not a requirement, 
// it is recommended that you place any common functionality and properties shared by the Triangle, Circle, and Square classes 
// in a parent Shape class and use inheritance to reuse the code in the child classes.

// DONE: Important: Make sure that you remove dist from the .gitignore file 
// so that Git will track this folder and include it when you push up to your application's repository.

// Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.
// The following example test should pass:

// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

// // You may need to add additional files in the lib folder for handling user input, writing to a file, etc. 
// Writing tests for these additional files is optional.

// Entry way to application: indexedDB.js         Means same as what's typed in the command prompt?? How is that set?
// Instantiate a new Menu class object here and run the main function, that exists inside Menu class.

// Define classes:

//     1. Menu Class - ask questions for prompt
            // 1a. We need to have a main method and everything will go in here
            // 1b. Collect user input with Inquirer prompts
            //     1ba. Text for logo
                //    1bb. Text color
                    // 1bc. Shape Type
                    // 1bd. Shape Color
                // 1c. Which shape did the user select?
                        // 1ca. Instantiate a new shape object with the chosen shape
                        // 1cb. Using the Object, set the color
                    // 1d. Instantiate a new SVG object with the text AND the shape selected
                    // 1e. Write the SVG object to file called 'logo.svg'
//     2. Shape (color)
//         2a. Circle (Classes, render())
//         2b. Square (Classes, render())
//         2c. Triangle (Classes, render())
//     3. SVG class (text, shape) - shape and text merge together and then rendered


//     Write final product to SVG file

// FIGURE OUT LAST: How do we pass color into the object?

const fs = require('fs');
const PromptUser = require('./Main/lib/questions.js');

const promptUser = new PromptUser();

promptUser.run();

// function writeToFile(info) {
//         fs.writeFile('./Main/examples/logo.svg',"this is data", (err) =>
//        err ? console.error(err) : console.log('Success!')
//      );
//     }
// writeToFile()
