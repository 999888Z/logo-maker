// Typing index.js into command line will run an application that uses Jest for running unit tests and Inquirer for collecting input from user.

//Application will first bring up four prompts:
    // 1. Enter text for the logo. (Must not be more than 3 characters.)
    // 2. Enter a text color.
    // 3. Select a shape for the logo. (choose from a dropdown)
    // 4. Enter a shape color.

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

// The application must include Triangle, Circle, and Square classes, as well as tests for each of these classes using Jest. While not a requirement, it is recommended that you place any common functionality and properties shared by the Triangle, Circle, and Square classes in a parent Shape class 
// and use inheritance to reuse the code in the child classes.

// DONE: Important: Make sure that you remove dist from the .gitignore file so that Git will track this folder and include it when you push up to your application's repository.

// Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.
// The following example test should pass:

// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

// You may need to add additional files in the lib folder for handling user input, writing to a file, etc. Writing tests for these additional files is optional.