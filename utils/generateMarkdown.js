// a function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.title}
## Description
${data.description}
## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
## Installation
To Install dependencies, run the following: \n 
      ${data.installation}
## Usage
${data.usage}
## License
This repository is licensed under the ${data.license} license.
## Contribution
${data.collaborator}
## Tests
To run test, run the following:\n 
      ${data.test}
## Questions
- Check out my Github repos [${data.github}](https://github.com/${data.github})
- Any questions regarding this repository please contact me at [${data.email}](mailto:${data.email}).
`;
}

module.exports = generateMarkdown;