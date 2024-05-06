[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
# ORM E-commerce BackEnd 
## Week 13 module challenge 

### Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Demo](#demo)
  - [Contribution](#contribution)
  - [License](#license)

## Description
The purpose of this challenge was to tie front and backend development to successfully perform CRUD operations for an internet retail company's e-commerce database. Starter code was provided for the front end of the challenge, but the backend code had to be created. Libraries and technologies used in this challenge included: Sequelize, Express, mysql, and Insomnia. To successfully connect both ends, api routes were used for different endpoints of the database. This allowed data to be created, read, updated, or deleted to and from the database seamlessly. Testing for these routes was done by calling api routes in Insomnia. 

## Installation 
To run the app successfully, these steps are recommended:
- Clone the git repository
- Open the schema.sql file in the terminal
- Run the command 'mysql -u root -p' and enter the provided password in the connection.js file
- Now source the schema file by running 'SOURCE schema.sql;' 
- Open the server.js file in the terminal
- Run 'npm install' to install are required packages for the app
- Seed the databases with data by running 'npm run seed' 
- To begin using the app, run 'node server.js' in the terminal, and the user prompt begins
  
## Usage
This app allows you to create, read, update, and delete data from a database using front and back end development. As an e-commerce retailer, this functionality is important in order to keep track of all products and services that are available to customers.  

## Demo 
This is a video demonstrating the functionality of the finished app. 
[DemoVideo link] (https://drive.google.com/file/d/1BxGj_iqkpW4L0N4mel84UQ0eXI-yThDH/view?usp=drive_link)





## Contribution
I referenced these articles to help me with the code of this project.
- [Associations in Sequelize](https://sequelize.org/docs/v6/core-concepts/assocs/)
- [Validations in Sequelize](https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/)
- [Eager Loading in Sequelize](https://sequelize.org/docs/v6/advanced-association-concepts/eager-loading/)

## License
This application is covered under the MIT License.

