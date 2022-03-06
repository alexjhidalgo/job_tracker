// import axios from 'axios';
import { useState } from 'react';
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from 'react-bootstrap-table2-editor';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ApplicationModal from './AddApplicationModal';
import LinkAddModal from './LinkAddModal';
const ApplicationTable = () => {

    const[isAppModalOpen, setAppModalOpen] = useState(false);
    const[isLinkAddModalOpen, setLinkAddModalOpen] = useState(false);

    const columns = [
        {text: 'ID', dataField: 'id'},
        { text: 'Position', dataField: 'position' },
        { text: 'Company', dataField: 'company' },
        { text: 'Company', dataField: 'company'},
        { text: 'Skills', dataField: 'skills', editable: false},
        { text: 'Options', dataField: 'buttons', editable: false}
    ];
    const data = [
        { id: '1', position: "SWEIII", company: "Airbnb", skills: <div><button className='btn'>JavaScript</button> <button className='btn'>C++</button><button className='btn'>Jira</button></div>, buttons: <div><button className='btn'>View</button> <button className='btn'>Delete</button><button className='btn'>+ Skill</button></div>  },
        { id: '2', position: "SWE Intern", company: "Compass", skills: <div><button className='btn'>JavaScript</button> <button className='btn'>C++</button><button className='btn'>Jira</button></div>, buttons: <div><button className='btn'>View</button> <button className='btn'>Delete</button><button className='btn'>+ Skill</button></div> },
        { id: '3', position: "SWE Intern", company: "Compass", skills: <div><button className='btn'>JavaScript</button> <button className='btn'>C++</button><button className='btn'>Jira</button></div>, buttons: <div><button className='btn'>View</button> <button className='btn'>Delete</button><button className='btn'>+ Skill</button></div> },
        { id: '4', position: "SWE Intern", company: "Compass", skills: <div><button className='btn'>JavaScript</button> <button className='btn'>C++</button><button className='btn'>Jira</button></div>, buttons: <div><button className='btn'>View</button> <button className='btn'>Delete</button><button className='btn'>+ Skill</button></div> },
        { id: '5', position: "SWE Intern", company: "Compass", skills: <div><button className='btn'>JavaScript</button> <button className='btn'>C++</button><button className='btn'>Jira</button></div>, buttons: <div><button className='btn'>View</button> <button className='btn'>Delete</button><button className='btn'>+ Skill</button></div> },
        { id: '6', position: "SWE Intern", company: "Compass", skills: <div><button className='btn'>JavaScript</button> <button className='btn'>C++</button><button className='btn'>Jira</button></div>, buttons: <div><button className='btn'>View</button> <button className='btn'>Delete</button><button className='btn'>+ Skill</button></div> },
        { id: '7', position: "SWE Intern", company: "Compass", skills: <div><button className='btn'>JavaScript</button> <button className='btn'>C++</button><button className='btn'>Jira</button></div>, buttons: <div><button className='btn'>View</button> <button className='btn'>Delete</button><button className='btn'>+ Skill</button></div> },
        { id: '8', position: "SWE Intern", company: "Compass", skills: <div><button className='btn'>JavaScript</button> <button className='btn'>C++</button><button className='btn'>Jira</button></div>, buttons: <div><button className='btn'>View</button> <button className='btn'>Delete</button><button className='btn'>+ Skill</button></div> },
        { id: '9', position: "SWE Intern", company: "Compass", skills: <div><button className='btn'>JavaScript</button> <button className='btn'>C++</button><button className='btn'>Jira</button></div>, buttons: <div><button className='btn'>View</button> <button className='btn'>Delete</button><button className='btn'>+ Skill</button></div> },
        { id: '10', position: "SWE Intern", company: "Compass", skills: <div><button className='btn'>JavaScript</button> <button className='btn'>C++</button><button className='btn'>Jira</button></div>, buttons: <div><button className='btn'>View</button> <button className='btn'>Delete</button><button className='btn'>+ Skill</button></div> },
        { id: '11', position: "SWE Intern", company: "Compass", skills: <div><button className='btn'>JavaScript</button> <button className='btn'>C++</button><button className='btn'>Jira</button></div>, buttons: <div><button className='btn'>View</button> <button className='btn'>Delete</button><button className='btn'>+ Skill</button></div> },
        { id: '12', position: "SWE Intern", company: "Compass", skills: <div><button className='btn'>JavaScript</button> <button className='btn'>C++</button><button className='btn'>Jira</button></div>, buttons: <div><button className='btn'>View</button> <button className='btn'>Delete</button><button className='btn'>+ Skill</button></div> },
        { id: '13', position: "SWE Intern", company: "Compass", skills: <div><button className='btn'>JavaScript</button> <button className='btn'>C++</button><button className='btn'>Jira</button></div>, buttons: <div><button className='btn'>View</button> <button className='btn'>Delete</button><button className='btn'>+ Skill</button></div> },

      ];

      return (
        <div>
          <button className='btn' variant='primary' onClick={() =>setAppModalOpen(true)}>+ Add Application</button>
          <button className='btn' variant='primary' onClick={() =>setLinkAddModalOpen(true)}>+ App Link Add</button>
          <BootstrapTable
            data={ data }
            keyField='id'
            columns={ columns }
            cellEdit={ cellEditFactory({ mode: 'click'}) }
            pagination={paginationFactory()}
          />
          <ApplicationModal modalIsOpen={isAppModalOpen} handleAppModClose={() => setAppModalOpen(false)}/>
          <LinkAddModal modalIsOpen={isLinkAddModalOpen} handleLinkModClose={() => setLinkAddModalOpen(false)}/>
        </div>
      );
        
};

export default ApplicationTable;