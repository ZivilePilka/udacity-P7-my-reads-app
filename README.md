# MyReads Project

## Description

The My Reads App project is made for the Udacity FrontEnd Web Development Nanodegree course (7th project). The task for this project was to create a bookshelf app that allows user to select and categorize books he/she have read, are currently reading, or want to read. The focus of this project is on writing functional React code.

## MyReads App Functionality

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

- Currently Reading
- Want to Read
- Read

Each book has a control that lets user select the shelf for that book. When user selects a different shelf, the book moves there.

The main page also has a link to a search page that allows user to find books to add to own library. The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets user to add the book to the library.

## Installation

To start the project, follow these steps:

- Download project files or clone the project's repository to your local machine.
- Using terminal or command line navigate to the project folder and run `npm install` command to install all project dependencies.
- Then run `npm start` to start the development server - the project will open on your browser window using http://localhost:3000 port.

## Important

The project includes a backend server provided by Udacity.
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend.

## Dependencies

- Starter code from [Udacity](https://github.com/udacity/reactnd-project-myreads-starter).
- This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
