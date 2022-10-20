# Controllers

### What are controllers?

Controllers used to manage/control the flow of an endpoint.

### Directory Structure?

Typically I create a new file for each category of endpoints. For example in
this template I have a `users.js` file that has methods to control all user
endpoints.

Additionally there is an `index.js` file that imports all controller files and
exports them. This allows you to import controllers more easily.

### What do controllers do?

Controllers should simply manage the flow. Your controller should invoke methods
from `serivices`, and more to perform the necessary actions.
