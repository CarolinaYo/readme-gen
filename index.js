const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

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
    name: "repo",
    message: "Enter the name of your GitHub repository",
    default: "readme-gen",
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
    message: "Please provide guideline for others to contribute.",
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

function generateMarkdown(answer) {
  // Adding badge for license
  let licenseBadge = "";
  switch (answer.license) {
    case "Apache License 2.0":
      licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case "GNU GPLv3":
      licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case "MIT License":
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
  }
// Drafting the README file
  let draftMarkdown = `# ${answer.title}
  `;
  //adding badge
  draftMarkdown += licenseBadge;

  draftMarkdown += `
  ## Description 
    ${answer.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Questions](#questions)
  
  ## Installation
    ${answer.installation}

  ## Usage
    ${answer.usage}

  ## License
  This license is covered under:
  * ${answer.license}

  ## Contributing
    ${answer.contributing}

  ## Test
    ${answer.test}

  ## Questions
  For any question, please contact me at:
  * GitHub account: https://github.com/${answer.username}
  * GitHub repository: https://github.com/${answer.username}/${answer.repo}.git
  * E-mail: ${answer.email}`;

  return draftMarkdown;
}

// // function to initialize program
function init() {
  inquirer.prompt(questions).then((answer) =>
    fs.writeFile("sampleREADME.md", generateMarkdown(answer), (err) => {
      if (err) {
        return console.log(err);
      }
      console.log("Success!");
    })
  );
}
// function call to initialize program
init();
