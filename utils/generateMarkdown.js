// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if(license === 'MIT License'){
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if(license === 'ISC License'){
    return `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`
  } else if(license === 'GNU GPLv3'){
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else {
    return ''
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if(license === 'MIT License'){
    return `https://opensource.org/licenses/MIT`
  } else if(license === 'ISC License'){
    return `https://opensource.org/licenses/ISC`
  } else if(license === 'GNU GPLv3'){
    return `https://www.gnu.org/licenses/gpl-3.0`
  } else {
    return ''
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None' || license === 'undefined'){
    return ''  
  } else {
    return `## License
This application falls under the following license:

${renderLicenseBadge(license)}

(${renderLicenseLink(license)})`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ### Created by: ${data.name}

  ${renderLicenseSection(data.license)}
  

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Application Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contributors}

  ## Tests
  ${data.tests}

  ## Questions
  Questions? Please contact me at ${data.email} and use the subject line "README Generator Help"

  You can also visit my Github to view this application at https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;


