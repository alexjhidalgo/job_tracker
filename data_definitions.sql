--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

-- Started on 2022-01-26 16:10:28 PST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3660 (class 1262 OID 14021)
-- Name: postgres; Type: DATABASE; Schema: -; Owner: postgres
--

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3661 (class 0 OID 0)
-- Dependencies: 3660
-- Name: DATABASE postgres; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


SET default_tablespace = '';

SET default_table_access_method = heap;

-- Table: public.accounts

DROP TABLE IF EXISTS public.accounts_skills;

DROP TABLE IF EXISTS public.application_skills;

DROP TABLE IF EXISTS public.applications_contacts;

DROP TABLE IF EXISTS public.job_offers;

DROP TABLE IF EXISTS public.applications;

DROP TABLE IF EXISTS public.contacts_communications;

DROP TABLE IF EXISTS public.communications;

DROP TABLE IF EXISTS public.contacts;

DROP TABLE IF EXISTS public.resumes;

DROP TABLE IF EXISTS public.skills;

DROP TABLE IF EXISTS public.accounts;


CREATE TABLE IF NOT EXISTS public.accounts
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    username text COLLATE pg_catalog."default" NOT NULL,
    password text COLLATE pg_catalog."default" NOT NULL,
    email text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT accounts_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.accounts
    OWNER to postgres;



-- Table: public.skills

CREATE TABLE IF NOT EXISTS public.skills
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    name text COLLATE pg_catalog."default" NOT NULL,
    account_id integer NOT NULL,
    CONSTRAINT skills_pkey PRIMARY KEY (id),
    CONSTRAINT skills_account_id_fkey FOREIGN KEY (account_id)
        REFERENCES public.accounts (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.skills
    OWNER to postgres;

-- Table: public.accounts_skills

CREATE TABLE IF NOT EXISTS public.accounts_skills
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    skill_id integer NOT NULL,
    account_id integer NOT NULL,
    CONSTRAINT accounts_skills_pkey PRIMARY KEY (id),
    CONSTRAINT accounts_skills_account_id_fkey FOREIGN KEY (account_id)
        REFERENCES public.accounts (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT accounts_skills_skill_id_fkey FOREIGN KEY (skill_id)
        REFERENCES public.skills (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.accounts_skills
    OWNER to postgres;

-- Table: public.applications
CREATE TABLE IF NOT EXISTS public.applications
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    account_id integer NOT NULL,
    status text COLLATE pg_catalog."default",
    date_added date NOT NULL,
    notes text COLLATE pg_catalog."default",
    company text COLLATE pg_catalog."default",
    "position" text COLLATE pg_catalog."default",
    description text COLLATE pg_catalog."default",
    salary text COLLATE pg_catalog."default",
    CONSTRAINT applications_pkey PRIMARY KEY (id),
    CONSTRAINT applications_account_id_fkey FOREIGN KEY (account_id)
        REFERENCES public.accounts (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
)

TABLESPACE pg_default;
ALTER TABLE IF EXISTS public.applications
    OWNER to postgres;

-- Table: public.contacts


CREATE TABLE IF NOT EXISTS public.contacts
(
    account_id integer NOT NULL,
    name text COLLATE pg_catalog."default" NOT NULL,
    company text COLLATE pg_catalog."default",
    "position" text COLLATE pg_catalog."default",
    email text COLLATE pg_catalog."default",
    phone_number text COLLATE pg_catalog."default",
    notes text COLLATE pg_catalog."default",
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    CONSTRAINT id PRIMARY KEY (id),
    CONSTRAINT contacts_account_id_fkey FOREIGN KEY (account_id)
        REFERENCES public.accounts (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.contacts
    OWNER to postgres;

-- Table: public.application_skills


CREATE TABLE IF NOT EXISTS public.application_skills
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    application_id integer,
    skill_id integer,
    account_id integer,
    CONSTRAINT application_skills_pkey PRIMARY KEY (id),
    CONSTRAINT account_id_fk FOREIGN KEY (account_id)
        REFERENCES public.accounts (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT application_id_fk FOREIGN KEY (application_id)
        REFERENCES public.applications (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT skill_id_fk FOREIGN KEY (skill_id)
        REFERENCES public.skills (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.application_skills
    OWNER to postgres;



-- Table: public.applications_contacts


CREATE TABLE IF NOT EXISTS public.applications_contacts
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    application_id integer NOT NULL,
    contact_id integer NOT NULL,
    account_id integer NOT NULL,
    CONSTRAINT applications_contacts_pkey PRIMARY KEY (id),
    CONSTRAINT applications_contacts_account_id_fkey FOREIGN KEY (account_id)
        REFERENCES public.accounts (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT applications_contacts_application_id_fkey FOREIGN KEY (application_id)
        REFERENCES public.applications (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT contact_id_fk FOREIGN KEY (contact_id)
        REFERENCES public.contacts (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.applications_contacts
    OWNER to postgres;
-- Index: fki_contact_id_fk

-- DROP INDEX IF EXISTS public.fki_contact_id_fk;

CREATE INDEX IF NOT EXISTS fki_contact_id_fk
    ON public.applications_contacts USING btree
    (contact_id ASC NULLS LAST)
    TABLESPACE pg_default;

-- Table: public.communications



CREATE TABLE IF NOT EXISTS public.communications
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    account_id integer NOT NULL,
    date date NOT NULL,
    message text COLLATE pg_catalog."default",
    CONSTRAINT communications_pkey PRIMARY KEY (id),
    CONSTRAINT communications_account_id_fkey FOREIGN KEY (account_id)
        REFERENCES public.accounts (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.communications
    OWNER to postgres;


-- Table: public.contacts_communications


CREATE TABLE IF NOT EXISTS public.contacts_communications
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    contact_id integer NOT NULL,
    communication_id integer NOT NULL,
    account_id integer NOT NULL,
    CONSTRAINT contacts_communications_pkey PRIMARY KEY (id),
    CONSTRAINT contact_id FOREIGN KEY (contact_id)
        REFERENCES public.contacts (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
        NOT VALID,
    CONSTRAINT contacts_communications_account_id_fkey FOREIGN KEY (account_id)
        REFERENCES public.accounts (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT contacts_communications_communication_id_fkey FOREIGN KEY (communication_id)
        REFERENCES public.communications (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.contacts_communications
    OWNER to postgres;
-- Index: fki_contact_id

-- DROP INDEX IF EXISTS public.fki_contact_id;

CREATE INDEX IF NOT EXISTS fki_contact_id
    ON public.contacts_communications USING btree
    (contact_id ASC NULLS LAST)
    TABLESPACE pg_default;

-- Table: public.job_offers

CREATE TABLE IF NOT EXISTS public.job_offers
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    account_id integer NOT NULL,
    posting_id integer NOT NULL,
    salary text COLLATE pg_catalog."default" NOT NULL,
    benefits text COLLATE pg_catalog."default",
    options text COLLATE pg_catalog."default",
    bonus text COLLATE pg_catalog."default",
    CONSTRAINT job_offers_pkey PRIMARY KEY (id),
    CONSTRAINT job_offers_account_id_fkey FOREIGN KEY (account_id)
        REFERENCES public.accounts (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.job_offers
    OWNER to postgres;

-- Table: public.resumes



CREATE TABLE IF NOT EXISTS public.resumes
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    account_id integer NOT NULL,
    resume_link text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT resumes_pkey PRIMARY KEY (id),
    CONSTRAINT resumes_account_id_fkey FOREIGN KEY (account_id)
        REFERENCES public.accounts (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.resumes
    OWNER to postgres;



