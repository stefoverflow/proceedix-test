### Start project with `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Runs concurrently local json server which is set to port 8000.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Task text

Together with a colleague, you get an assignment to create a new client/server application.
Your colleague is responsible for the BackEnd, you will do the FrontEnd.
You will work on the project in parallel.

The React client will use your colleague's service to retrieve a list of users and their tasks. (json)
A user has a firstname, lastname and age
A task has a title, a description and a score.

You should list the users and their tasks.
If a user is younger than 30, and has an average score on his tasks of 4 or more, then show an icon with a message "Great!".
Do the same for users that are older than 30 with an average score above 4.33.
Next to that the application user should be able to select a number of tasks (for instance 3 out of 4), and the average of those selected tasks should be shown below the list.

Technologies to use:
ReactJs
Typescript
Redux-Saga
StyledComponents is a plus
