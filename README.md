# # REACT EMPLOYEE DIRECTORY

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The purpose of this application is to allow a user to search and filter a table of employees.

![Main]()

---

## Table of Contents

- [Installation](#installation)
- [Usage](#Usage)
- [Building the Application](#building-the-application)
- [Acceptance Criteria](#acceptance-criteria)
- [Credits](#credits)
- [Resources](#resources)
- [Contact](#contact)
- [Links](#Links)
- [License](#license)

---

## Installation

1. Follow the GitHub Repository Link in the [links](#Links) section below.
1. Clone the repository using an SSH key.
1. Open GitBash and use "git clone" to clone the repository.
1. Run npm install to install associated modules.

---

## Usage

Edit using VSCode after [installation](#installation). This is a React.js application, all files and components are included. This application is deployed to GitHub Pages, see [links](#Links) section below.

---

## Building the Application

While building this application, I chose to use the table fields image, first name, last name, email, phone number, and birth date. Upon page load, the user will see a table displaying the full list of 20 employees stored in the employees.json file. I did also include an option (commented out in the code) to utilize a random person API call, however I found the data from that API to be very inconsistent especially in the formatting of phone number and birth date as well as the language of the content.

Once the page is loaded, the user can then chose to sort the data by the first name, last name, email, phone number, or birth date columns by clicking on the column header to sort. The user can also search through each of these categories by selecting a category from the dropdown and typing in the query they would like to search. This form does have validation to throw an alert if the category has not been selected. If the user wishes to return to the full list of employees after a search, they simply have to click the "Reset" button to do so.

---

## Acceptance Criteria

Given a table of random users, when the user loads the page, a table of employees should render. :heavy_check_mark:

The user should be able to:

  * Sort the table by at least one category :heavy_check_mark:

  * Filter the users by at least one property. :heavy_check_mark:

---

## Credits

As always, a huge thanks to our instructional staff for all their hard work!

## Resources

- [w3schools](https://www.w3schools.com)
- [Node.js](https://nodejs.org/en/)
- [React.js](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Axios](https://www.npmjs.com/package/axios)

---

## Contact

Find me on LinkedIn Here:
[Aimee Esler](https://www.linkedin.com/in/aimee-esler-3bb31288/)

---

## Links

[Repository Link](https://github.com/aimeecesler/react-employee-directory)

[Deployed Application](https://aimeecesler.github.io/react-employee-directory/)

---

## License

Copyright &copy; 2020 Aimee Corbin Esler

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
