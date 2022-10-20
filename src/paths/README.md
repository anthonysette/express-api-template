# Paths

### What are paths?

These are all of the paths to be exposed in your API and documenation.

### Directory Structure?

The endpoints are constructed based on your directory structure. There are three
things you need to know.

1. A file such as `users.js` is equivalent to the path `/users`
2. A folder such as `users` is equivalent to the path `/users`
3. A file called `index.js` is equivalent to the root of that directory. For
   example `/users/index.js` is equivalent to `/users`
4. Finally to use path parameters you simple use `{}`. For example
   `/users/{id}.js}` is the equivalent of `/users/*` where `*` is the user's ID

In this project there are 2 paths:

- `/users` (GET, POST)
- `/users/*` (GET)

### What do paths do?

Paths allow you to create endpoints and craft documentation. The endpoints you
create will then call middleware, controllers, and more.
