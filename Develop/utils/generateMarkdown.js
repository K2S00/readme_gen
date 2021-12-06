// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
   if (data. license === "Apache"){
    return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      } else if (data.license === "GNU") {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
      } else if (data.license === "ISC") {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
      } else if (data.license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      } else if (data.license === "Mozilla") {  
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
      } else if (data.license === "Open") {
        return "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)"
      } else {
        return "None."
      };
    }

    // TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license === "Apache") {
    return "[Apache](https://choosealicense.com/licenses/apache-2.0/)"
  } else if (data.license === "GNU") {
    return "[GNU](https://choosealicense.com/licenses/agpl-3.0/)"
  } else if (data.license === "ISC") {
    return "[ISC](https://opensource.org/licenses/ISC)"
  } else if (data.license === "MIT") {
    return "[MIT](https://choosealicense.com/licenses/mit/)"
  } else if (data.license === "Mozilla") {
    return "[Mozilla](https://choosealicense.com/licenses/mpl-2.0/)"
  } else if (data.license === "Open") {
    return "[Open](https://choosealicense.com/licenses/unlicense/)"
  } else {
    return "None."
  };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return 
  `# ${data.project}
  ## Table of Contents
  * [Instalation](#install)
  * [Usage](#usage)
  * [Collaboration](#collaboration)
  * [License](#license)
  * [Features](#features)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)




   ## Installation
  ${data.install}
  
  ## Usage
  ${data.usage}
 
  ## Credits
  ${data.credits}
 
  ## License 
  ${renderLicenseLink(data)}
  
  ## Features
  ${data.features}
 
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  Questions? Contact me via [GitHub](https://github.com/${data.github}) or [by email](mailto:${data.email}).


};

module.exports = generateMarkdown;
