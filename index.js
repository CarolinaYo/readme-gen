const inquirer = require('inquirer');
const fs = require('fs');
// const util = require('util');
// const generateMarkdown = require("./utils/generateMarkdown")
// const writeFileAsync = util.promisify(fs.writeFile);
// const data = {title:"test title"}
// const userInput= generateMarkdown(data);
// console.log(userInput);

// array of questions for user

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is th etitle of your project?',
  },
  {
    type: 'input',
    name: 'location',
    message: 'Where are you from?',
  },
  {
    type: 'input',
    name: 'hobby',
    message: 'What is your favorite hobby?',
  },
  {
    type: 'input',
    name: 'food',
    message: 'What is your favorite food?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username',
  },
  {
    type: 'input',
    name: 'linkedin',
    message: 'Enter your LinkedIn URL.',
  },
];



//example from 9-32

const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'Where are you from?',
    },
    {
      type: 'input',
      name: 'hobby',
      message: 'What is your favorite hobby?',
    },
    {
      type: 'input',
      name: 'food',
      message: 'What is your favorite food?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ]).then((answers) => {
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

    fs.writeFile("index.html", htmlString, err => {
      if(err) console.log(err)
    })
  });
promptUser();

function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
