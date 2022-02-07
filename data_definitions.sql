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

--
-- TOC entry 220 (class 1259 OID 16520)
-- Name: Account_Skills; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Account_Skills" (
    "Id" integer NOT NULL,
    "Skill_Id" integer NOT NULL,
    "Account_Id" integer NOT NULL
);


ALTER TABLE public."Account_Skills" OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 16386)
-- Name: Accounts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Accounts" (
    "Id" integer NOT NULL,
    "Username" text NOT NULL,
    "Password" text NOT NULL,
    "Email" text NOT NULL
);


ALTER TABLE public."Accounts" OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16483)
-- Name: Application_Contact; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Application_Contact" (
    "Id" integer NOT NULL,
    "Application_Id" integer NOT NULL,
    "Contact_Id" integer NOT NULL,
    "Account_Id" integer NOT NULL
);


ALTER TABLE public."Application_Contact" OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16466)
-- Name: Applications; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Applications" (
    "Id" integer NOT NULL,
    "Posting_Id" integer NOT NULL,
    "Account_Id" integer NOT NULL,
    "Status" text,
    "Date_Added" date NOT NULL,
    "Notes" text
);


ALTER TABLE public."Applications" OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 16405)
-- Name: Communications; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Communications" (
    "Id" integer NOT NULL,
    "Account_Id" integer NOT NULL,
    "Date" date NOT NULL,
    "Message" text
);


ALTER TABLE public."Communications" OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 16429)
-- Name: Contact_Communications; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Contact_Communications" (
    "Id" integer NOT NULL,
    "Contact_Id" integer NOT NULL,
    "Communication_id" integer NOT NULL,
    "Account_Id" integer NOT NULL
);


ALTER TABLE public."Contact_Communications" OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 16393)
-- Name: Contacts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Contacts" (
    "Id" integer NOT NULL,
    "Account_Id" integer NOT NULL,
    "Name" text NOT NULL,
    "Company" text,
    "Position" text,
    "Email" text,
    "Phone_Number" text,
    "Notes" text
);


ALTER TABLE public."Contacts" OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16451)
-- Name: Job Offers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Job Offers" (
    "Id" integer NOT NULL,
    "Account_Id" integer NOT NULL,
    "Posting_Id" integer NOT NULL,
    "Salary" text NOT NULL,
    "Benefits" text,
    "Options" text,
    "Bonus" text
);


ALTER TABLE public."Job Offers" OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 16444)
-- Name: Postings; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Postings" (
    "Id" integer NOT NULL,
    "Company" text NOT NULL,
    "Position" text NOT NULL,
    "Description" text,
    "Salary" text,
    "Deadline" date,
    "Account_Id" integer NOT NULL
);


ALTER TABLE public."Postings" OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16505)
-- Name: Postings_Skills; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Postings_Skills" (
    "Id" integer NOT NULL,
    "Skill_Id" integer NOT NULL,
    "Posting_Id" integer NOT NULL,
    "Account_Id" integer NOT NULL
);


ALTER TABLE public."Postings_Skills" OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 16417)
-- Name: Resumes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Resumes" (
    "Id" integer NOT NULL,
    "Account_Id" integer NOT NULL,
    "Resume_Link" text NOT NULL
);


ALTER TABLE public."Resumes" OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16498)
-- Name: Skills; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Skills" (
    "Id" integer NOT NULL,
    "Name" text NOT NULL,
    "Account_Id" integer NOT NULL
);


ALTER TABLE public."Skills" OWNER TO postgres;

--
-- TOC entry 3495 (class 2606 OID 16524)
-- Name: Account_Skills Account_Skills_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Account_Skills"
    ADD CONSTRAINT "Account_Skills_pkey" PRIMARY KEY ("Id");


--
-- TOC entry 3475 (class 2606 OID 16392)
-- Name: Accounts Accounts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Accounts"
    ADD CONSTRAINT "Accounts_pkey" PRIMARY KEY ("Id");


--
-- TOC entry 3489 (class 2606 OID 16487)
-- Name: Application_Contact Application_Contact_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Application_Contact"
    ADD CONSTRAINT "Application_Contact_pkey" PRIMARY KEY ("Id");


--
-- TOC entry 3487 (class 2606 OID 16472)
-- Name: Applications Applications_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Applications"
    ADD CONSTRAINT "Applications_pkey" PRIMARY KEY ("Id");


--
-- TOC entry 3479 (class 2606 OID 16411)
-- Name: Communications Communications_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Communications"
    ADD CONSTRAINT "Communications_pkey" PRIMARY KEY ("Id");


--
-- TOC entry 3483 (class 2606 OID 16433)
-- Name: Contact_Communications Contact_Communications_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Contact_Communications"
    ADD CONSTRAINT "Contact_Communications_pkey" PRIMARY KEY ("Id");


--
-- TOC entry 3477 (class 2606 OID 16399)
-- Name: Contacts Contacts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Contacts"
    ADD CONSTRAINT "Contacts_pkey" PRIMARY KEY ("Id");


--
-- TOC entry 3493 (class 2606 OID 16509)
-- Name: Postings_Skills Postings_Skills_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Postings_Skills"
    ADD CONSTRAINT "Postings_Skills_pkey" PRIMARY KEY ("Id");


--
-- TOC entry 3485 (class 2606 OID 16450)
-- Name: Postings Postings_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Postings"
    ADD CONSTRAINT "Postings_pkey" PRIMARY KEY ("Id");


--
-- TOC entry 3481 (class 2606 OID 16423)
-- Name: Resumes Resumes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Resumes"
    ADD CONSTRAINT "Resumes_pkey" PRIMARY KEY ("Id");


--
-- TOC entry 3491 (class 2606 OID 16504)
-- Name: Skills Skills_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Skills"
    ADD CONSTRAINT "Skills_pkey" PRIMARY KEY ("Id");


--
-- TOC entry 3515 (class 2606 OID 16535)
-- Name: Account_Skills Account_Id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Account_Skills"
    ADD CONSTRAINT "Account_Id" FOREIGN KEY ("Account_Id") REFERENCES public."Accounts"("Id") ON DELETE CASCADE NOT VALID;


--
-- TOC entry 3508 (class 2606 OID 16540)
-- Name: Application_Contact Account_Id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Application_Contact"
    ADD CONSTRAINT "Account_Id" FOREIGN KEY ("Account_Id") REFERENCES public."Accounts"("Id") ON DELETE CASCADE NOT VALID;


--
-- TOC entry 3506 (class 2606 OID 16545)
-- Name: Applications Account_Id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Applications"
    ADD CONSTRAINT "Account_Id" FOREIGN KEY ("Account_Id") REFERENCES public."Accounts"("Id") ON DELETE CASCADE NOT VALID;


--
-- TOC entry 3497 (class 2606 OID 16550)
-- Name: Communications Account_Id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Communications"
    ADD CONSTRAINT "Account_Id" FOREIGN KEY ("Account_Id") REFERENCES public."Accounts"("Id") ON DELETE CASCADE NOT VALID;


--
-- TOC entry 3499 (class 2606 OID 16555)
-- Name: Contact_Communications Account_Id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Contact_Communications"
    ADD CONSTRAINT "Account_Id" FOREIGN KEY ("Account_Id") REFERENCES public."Accounts"("Id") ON DELETE CASCADE NOT VALID;


--
-- TOC entry 3496 (class 2606 OID 16560)
-- Name: Contacts Account_Id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Contacts"
    ADD CONSTRAINT "Account_Id" FOREIGN KEY ("Account_Id") REFERENCES public."Accounts"("Id") ON DELETE CASCADE NOT VALID;


--
-- TOC entry 3504 (class 2606 OID 16565)
-- Name: Job Offers Account_Id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Job Offers"
    ADD CONSTRAINT "Account_Id" FOREIGN KEY ("Account_Id") REFERENCES public."Accounts"("Id") ON DELETE CASCADE NOT VALID;


--
-- TOC entry 3502 (class 2606 OID 16570)
-- Name: Postings Account_Id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Postings"
    ADD CONSTRAINT "Account_Id" FOREIGN KEY ("Account_Id") REFERENCES public."Accounts"("Id") ON DELETE CASCADE NOT VALID;


--
-- TOC entry 3512 (class 2606 OID 16575)
-- Name: Postings_Skills Account_Id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Postings_Skills"
    ADD CONSTRAINT "Account_Id" FOREIGN KEY ("Account_Id") REFERENCES public."Accounts"("Id") ON DELETE CASCADE NOT VALID;


--
-- TOC entry 3498 (class 2606 OID 16580)
-- Name: Resumes Account_Id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Resumes"
    ADD CONSTRAINT "Account_Id" FOREIGN KEY ("Account_Id") REFERENCES public."Accounts"("Id") ON DELETE CASCADE NOT VALID;


--
-- TOC entry 3510 (class 2606 OID 16585)
-- Name: Skills Account_Id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Skills"
    ADD CONSTRAINT "Account_Id" FOREIGN KEY ("Account_Id") REFERENCES public."Accounts"("Id") ON DELETE CASCADE NOT VALID;


--
-- TOC entry 3509 (class 2606 OID 16595)
-- Name: Application_Contact Application_Id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Application_Contact"
    ADD CONSTRAINT "Application_Id" FOREIGN KEY ("Application_Id") REFERENCES public."Applications"("Id") ON DELETE CASCADE NOT VALID;


--
-- TOC entry 3500 (class 2606 OID 16600)
-- Name: Contact_Communications Communication_Id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Contact_Communications"
    ADD CONSTRAINT "Communication_Id" FOREIGN KEY ("Communication_id") REFERENCES public."Communications"("Id") ON DELETE CASCADE NOT VALID;


--
-- TOC entry 3507 (class 2606 OID 16493)
-- Name: Application_Contact Contact_Id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Application_Contact"
    ADD CONSTRAINT "Contact_Id" FOREIGN KEY ("Contact_Id") REFERENCES public."Contacts"("Id") NOT VALID;


--
-- TOC entry 3501 (class 2606 OID 16605)
-- Name: Contact_Communications Contact_Id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Contact_Communications"
    ADD CONSTRAINT "Contact_Id" FOREIGN KEY ("Contact_Id") REFERENCES public."Contacts"("Id") ON DELETE CASCADE NOT VALID;


--
-- TOC entry 3503 (class 2606 OID 16461)
-- Name: Job Offers Posting_Id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Job Offers"
    ADD CONSTRAINT "Posting_Id" FOREIGN KEY ("Posting_Id") REFERENCES public."Postings"("Id") NOT VALID;


--
-- TOC entry 3505 (class 2606 OID 16473)
-- Name: Applications Posting_Id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Applications"
    ADD CONSTRAINT "Posting_Id" FOREIGN KEY ("Posting_Id") REFERENCES public."Postings"("Id");


--
-- TOC entry 3513 (class 2606 OID 16590)
-- Name: Postings_Skills Posting_Id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Postings_Skills"
    ADD CONSTRAINT "Posting_Id" FOREIGN KEY ("Posting_Id") REFERENCES public."Postings"("Id") ON DELETE CASCADE NOT VALID;


--
-- TOC entry 3511 (class 2606 OID 16510)
-- Name: Postings_Skills Skill_Id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Postings_Skills"
    ADD CONSTRAINT "Skill_Id" FOREIGN KEY ("Skill_Id") REFERENCES public."Skills"("Id");


--
-- TOC entry 3514 (class 2606 OID 16525)
-- Name: Account_Skills Skill_Id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Account_Skills"
    ADD CONSTRAINT "Skill_Id" FOREIGN KEY ("Skill_Id") REFERENCES public."Skills"("Id");


-- Completed on 2022-01-26 16:10:28 PST

--
-- PostgreSQL database dump complete
--

