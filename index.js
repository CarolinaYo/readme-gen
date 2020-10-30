const inquirer = require("inquirer");
const fs = require("fs");
// const util = require('util');
// const generateMarkdown = require("./utils/generateMarkdown")
// const writeFileAsync = util.promisify(fs.writeFile);
// const data = {title:"test title"}
// const userInput= generateMarkdown(data);
// console.log(userInput);

// array of questions for user

const questions = () =>
  inquirer
    .prompt([
      {
        type: "input",
        name: "username",
        message: "Enter your GitHub Username",
        default: "CarolinaYo",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your e-mail address.",
      },
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        default: "Project Title",
      },
      {
        type: "input",
        name: "repo",
        message: "Enter your project repo name",
      },
      {
        type: "input",
        name: "description",
        message: "Please describe your project.",
        default: "Project Description.",
      },
      {
        type: "input",
        name: "installation",
        message: "Please describe the steps required to install your project.",
      },
      {
        type: "input",
        name: "usage",
        message: "Please provide instructions and examples.",
      },
      {
        type: "input",
        name: "contributing",
        message: "Please provide guidline for others to contribute.",
      },
      {
        type: "input",
        name: "test",
        message: "Please provide examples on how to run your project.",
      },
      {
        type: "list",
        name: "license",
        message: "Please choose a license.",
        choice: ["Apache License 2.0", "GNU GPLv3", "MIT License"],
      },
    ])
    .then((answer) => {
      const draftReadMe = `# ${answer.title}
![${answer.repo}](https://img.shields.io/github/languages/top/${answer.username}/${answer.repo})


  ## Description 
  ${answer.description}
  ## Installation
  ${answer.installation}
  ## Usage
  ${answer.usage}
  ##License
  *[License]${answer.license}
  ## Contributing
  ${answer.contributing}
  ## Test
  ${answer.test}
  ## Questions
  For any question, please contact me at:
  GitHub link: ${answer.username}
  E-mail: ${answer.email}`;

      fs.writeFile("sampleREADME.md", draftReadMe, (err) => {
        if (err) {
          return console.log(err);
        }
        console.log("Success!");
      });
    });
questions();

//example from 9-32

const inquirer = require("inquirer");
const fs = require("fs");

const promptUser = () =>
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "location",
        message: "Where are you from?",
      },
      {
        type: "input",
        name: "hobby",
        message: "What is your favorite hobby?",
      },
      {
        type: "input",
        name: "food",
        message: "What is your favorite food?",
      },
      {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username",
      },
      {
        type: "input",
        name: "linkedin",
        message: "Enter your LinkedIn URL.",
      },
    ])
    .then((answers) => {
      console.log(answers);

      const htmlString = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        />
        <title>Document</title>
      </head>
      <body>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Hi! My name is ${answers.name}</h1>
            <p class="lead">I am from ${answers.location}.</p>
            <h3>
              Example heading <span class="badge badge-secondary">Contact Me</span>
            </h3>
            <ul class="list-group">
              <li class="list-group-item">
                My GitHub username is ${answers.github}
              </li>
              <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
            </ul>
          </div>
        </div>
      </body>
    </html>
    `;

      fs.writeFile("index.html", htmlString, (err) => {
        if (err) console.log(err);
      });
    });
promptUser();

// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
