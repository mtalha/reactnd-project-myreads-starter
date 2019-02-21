# MyReads - React Nano-Degree First Project

I forked the github starter repository and worked on the project on my local machine.
I have checked in all the code in the `master` branch of my forked repo. 

## Instructions for how to compile & run the project
After cloning the git reposioty or downloading the zip file, please open the terminal and go into the project root repositoy i.e. you should be in `reactnd-project-myreads-starter` directory

Step 1. Run the following command to add all the required dependencies
* install all project dependencies with `npm install`
Step 2. When the Step 1. is complete (it should complete without any errors), run the following command to open the review page in your default browser window
* run the project with `npm start`
When Step 2. is completed, you will see the `http://localhost:3000/` url in your browser tab.

# MyReads Project - Description 
MyReads is the first project in Udacity React Nano-Degree program.

This projects displays a list of books catergorized in three shelved, namely:
* Currently Reading
* Want to Read
* Read

Each book is displayed with a thumbnail image, under which the book's title and author name(s) are mentioed. A book can have more than one authors.

If there are more than one authors, their names are shown as comma separated. 

There are cases when a book cannot have a thumbnail, in that case only the title and author name(s) will be shown.

Each book is assigned to a shelf and there is a control with each book with which the user can move the book to another shelf. The Shelf Changer control also has an option `none`, choosing which causes the book to disappear from the shelf. 

There is also a search functionality. The Search buttin is located at the bottom right of the screen, clicking on that open the search page with the url `http://localhost:3000/search` in your browswer tab. As the user starts typing in the search input field, the BooksAPI provided in started code of the backend server is called and it returns at max 20 books against the search results. 

If a book found in search result is already in user's shelf, the book's shelf menu shows the current shelf of the book in which the book resides in user's shelf books. 

The searched books, if not in any shelf, are marked as `none` in their shelf control. 

User can move a book from `none` to any of the three shelved `Currently Reading`, `Want to Read` & `Read`. After this action, whn the user goes back to the project home, the book will be shown in the moved shelf. 

On the search page, the `none` shelf action has no effect. 

The search page also has a `back button` on the left of search input field, clicking on that takes the user back to the MyReads home page.
