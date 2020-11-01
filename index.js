const inquirer = require("inquirer");
const fs = require("fs");
const util = require('util');

// array of questions for user

const questions = [
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
        choices: ["Apache License 2.0", "GNU GPLv3", "MIT License"],
      },
    ];


  //use switch stmt to make badge id
function generateMarkdown(answer){
  return `# ${answer.title}
        //need license badge
  ![${answer.repo}](https://img.shields.io/github/languages/top/${answer.username}/${answer.repo})


    ## Description 
    ${answer.description}
    ## Installation
    ${answer.installation}
    ## Usage
    ${answer.usage}
    ##License
    This license is covered under:
    *[License]${answer.license}
    ## Contributing
    ${answer.contributing}
    ## Test
    ${answer.test}
    ## Questions
    For any question, please contact me at:
    GitHub link: ${answer.username}
    E-mail: ${answer.email}`; 

};

// function writeToFile(fileName, data) {
// }

// // function to initialize program
function init() {
  inquirer
  .prompt(questions).then(answer =>{
    fs.writeFile("sampleREADME.md", generateMarkdown, (err) => {
      if (err) {
        return console.log(err);
      }
      console.log("Success!");
    });

  });
}

// // function call to initialize program
init();
