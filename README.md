# job_tracker server

### How to run server in development:

Create the PostgreSQL 14 database tables using data_definitions.sql

To drop all existing tables from the local public schema:

```
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO public;
```

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
