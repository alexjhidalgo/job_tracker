DROP TABLE IF EXISTS accounts_skills;

DROP TABLE IF EXISTS application_skills;

DROP TABLE IF EXISTS applications_contacts;

DROP TABLE IF EXISTS job_offers;

DROP TABLE IF EXISTS applications;

DROP TABLE IF EXISTS contacts_communications;

DROP TABLE IF EXISTS communications;

DROP TABLE IF EXISTS contacts;

DROP TABLE IF EXISTS resumes;

DROP TABLE IF EXISTS skills;

DROP TABLE IF EXISTS accounts;


CREATE TABLE IF NOT EXISTS accounts
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    username text COLLATE pg_catalog."default" NOT NULL,
    password text COLLATE pg_catalog."default" NOT NULL,
    email text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT accounts_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS skills
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    name text COLLATE pg_catalog."default" NOT NULL,
    account_id integer NOT NULL,
    CONSTRAINT skills_pkey PRIMARY KEY (id),
    CONSTRAINT skills_account_id_fkey FOREIGN KEY (account_id)
        REFERENCES public.accounts (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS accounts_skills
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
);

CREATE TABLE IF NOT EXISTS applications
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
);



CREATE TABLE IF NOT EXISTS contacts
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
);



CREATE TABLE IF NOT EXISTS application_skills
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
);



CREATE TABLE IF NOT EXISTS applications_contacts
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
);

CREATE INDEX IF NOT EXISTS fki_contact_id_fk
    ON applications_contacts USING btree
    (contact_id ASC NULLS LAST)
    TABLESPACE pg_default;

CREATE TABLE IF NOT EXISTS communications
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
);

CREATE TABLE IF NOT EXISTS contacts_communications
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
);

CREATE INDEX IF NOT EXISTS fki_contact_id
    ON contacts_communications USING btree
    (contact_id ASC NULLS LAST)
    TABLESPACE pg_default;

CREATE TABLE IF NOT EXISTS job_offers
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
);

CREATE TABLE IF NOT EXISTS resumes
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    account_id integer NOT NULL,
    resume_link text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT resumes_pkey PRIMARY KEY (id),
    CONSTRAINT resumes_account_id_fkey FOREIGN KEY (account_id)
        REFERENCES public.accounts (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
);
