// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
//function renderLicenseBadge(license) {

// } else if {
//   return 
//}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
//function renderLicenseLink(license) { }


// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string



function renderLicenseAll(license){
switch (license) { 
  case (license == 'BSD3'): return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  case (license == 'Eclipse'): return '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
  case (license == 'ISC'): return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  default: return
}}

//TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseAll(data.license)}
 
  ## Table of contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Questions](#questions)
  
  ## Description

  ${data.description}
  
  ## Installation

  ${data.installation}
  
  ### Usage
  
  ${data.usage}

  ### License
  
  ${renderLicenseAll(data.license)}

  ### Contributing

  ${data.contributing}
  
  ### Test
  
  ${data.test}
  
  ### Questions

  
  * [Github](https://github.com/${data.github}) - to my github
  * [Email](mailto:${data.email}) - how to reach me
`;
}


module.exports = generateMarkdown;