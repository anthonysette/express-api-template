# Database

This folder is for database related files.

For example as an avid Sequelize user I would structure this folder like below.

- db
  - migrations
    - migration-files
  - models
    - model-files
  - seeders
    - seeder-files
  - config.js

That being said this will change depending on whether you are using an ORM, raw
SQL, no SQL, etc. The purpose of this folder is all database configuration.
