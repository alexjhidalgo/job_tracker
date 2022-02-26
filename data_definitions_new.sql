DROP TABLE IF EXISTS accounts_skills;
DROP TABLE IF EXISTS applications_contacts;
DROP TABLE IF EXISTS contacts_communications;
DROP TABLE IF EXISTS postings_skills;
DROP TABLE IF EXISTS resumes;
DROP TABLE IF EXISTS job_offers;
DROP TABLE IF EXISTS communications;
DROP TABLE IF EXISTS contacts;
DROP TABLE IF EXISTS skills;
DROP TABLE IF EXISTS applications;
DROP TABLE IF EXISTS postings;
DROP TABLE IF EXISTS accounts;

CREATE TABLE accounts (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL,
  password TEXT NOT NULL,
  email TEXT NOT NULL
);

CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  account_id INTEGER NOT NULL REFERENCES accounts ON DELETE CASCADE,
  name TEXT NOT NULL,
  company TEXT,
  position TEXT,
  email TEXT,
  phone_number TEXT,
  notes TEXT
);

CREATE TABLE skills (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  account_id INTEGER NOT NULL REFERENCES accounts ON DELETE CASCADE
);

CREATE TABLE postings (
  id SERIAL PRIMARY KEY,
  company TEXT NOT NULL,
  position TEXT NOT NULL,
  description TEXT,
  salary TEXT,
  deadline date,
  account_id INTEGER NOT NULL REFERENCES accounts ON DELETE CASCADE
);

CREATE TABLE applications (
  id SERIAL PRIMARY KEY,
  posting_id INTEGER NOT NULL REFERENCES postings ON DELETE CASCADE,
  account_id INTEGER NOT NULL REFERENCES accounts ON DELETE CASCADE,
  status TEXT,
  date_added date NOT NULL,
  notes TEXT
);

CREATE TABLE communications (
  id SERIAL PRIMARY KEY,
  account_id INTEGER NOT NULL REFERENCES accounts ON DELETE CASCADE,
  date date NOT NULL,
  message TEXT
);

CREATE TABLE job_offers (
  id SERIAL PRIMARY KEY,
  account_id INTEGER NOT NULL REFERENCES accounts ON DELETE CASCADE,
  posting_id INTEGER NOT NULL REFERENCES postings ON DELETE CASCADE,
  salary TEXT NOT NULL,
  benefits TEXT,
  options TEXT,
  bonus TEXT
);

CREATE TABLE resumes (
  id SERIAL PRIMARY KEY,
  account_id INTEGER NOT NULL REFERENCES accounts ON DELETE CASCADE,
  resume_link TEXT NOT NULL
);

CREATE TABLE contacts_communications (
  id SERIAL PRIMARY KEY,
  contact_id INTEGER NOT NULL REFERENCES contacts ON DELETE CASCADE,
  communication_id INTEGER NOT NULL REFERENCES communications ON DELETE CASCADE,
  account_id INTEGER NOT NULL REFERENCES accounts ON DELETE CASCADE
);

CREATE TABLE accounts_skills (
  id SERIAL PRIMARY KEY,
  skill_id INTEGER NOT NULL REFERENCES skills ON DELETE CASCADE,
  account_id INTEGER NOT NULL REFERENCES accounts ON DELETE CASCADE
);

CREATE TABLE applications_contacts (
  id SERIAL PRIMARY KEY,
  application_id INTEGER NOT NULL REFERENCES applications ON DELETE CASCADE,
  contact_id INTEGER NOT NULL REFERENCES contacts ON DELETE CASCADE,
  account_id INTEGER NOT NULL REFERENCES accounts ON DELETE CASCADE
);

CREATE TABLE postings_skills (
  id SERIAL PRIMARY KEY,
  skill_id INTEGER NOT NULL REFERENCES skills ON DELETE CASCADE,
  posting_id INTEGER NOT NULL REFERENCES postings ON DELETE CASCADE,
  account_id INTEGER NOT NULL REFERENCES accounts ON DELETE CASCADE
);

INSERT INTO accounts (username, password, email) VALUES ('name1', 'pass1', 'mail1');
INSERT INTO contacts (account_id, name, company) VALUES (1, 'contact name1', 'contact company1');
