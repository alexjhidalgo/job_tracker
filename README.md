# job_tracker server

### How to run server in development:

Create the PostgreSQL 14 database tables using data_definitions.sql

Create a file called '.env' with these variables:

```
DATABASE_URL=postgresql://<user>:<password>@<host>:<port>/<database>
```

Example: DATABASE_URL=postgresql://postgres:postgres@localhost:5432/postgres

From the terminal:

```
npm install
npm start
```
