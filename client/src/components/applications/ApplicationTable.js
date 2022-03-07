// import axios from 'axios';
import { useEffect, useState } from 'react';
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from 'react-bootstrap-table2-editor';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ApplicationModal from './AddApplicationModal';
import ViewApplicationModal from './ViewApplicationModal';
import LinkAddModal from './LinkAddModal';
import SkillAddModal from './AddSkillModal';
import SkillRemoveModal from './SkillRemoveModal';
import ApplicationRemoveModal from './ApplicationRemoveModal';
const ApplicationTable = () => {

    const[isAppModalOpen, setAppModalOpen] = useState(false);
    const[isLinkAddModalOpen, setLinkAddModalOpen] = useState(false);
    const[isSkillAddModalOpen, setSkillAddModalOpen] = useState(false);
    const[isSkillRmModOpen, setSkillRmModalOpen] = useState(false);
    const[isAppRemoveModalOpen, setAppRemoveModalOpen] = useState(false);
    const[isViewModalOpen, setViewModalOpen] = useState(false);
    const[tableData, setData] = useState([]);
    const[modalInfo, setModalInfo] = useState([]);

    const columns = [
        {text: 'ID', dataField: 'id'},
        { text: 'Position', dataField: 'position' },
        { text: 'Company', dataField: 'company' },
        { text: 'Skills', dataField: 'skills', editable: false},
        { text: 'Options', dataField: 'buttons', editable: false}
    ];
    // function handleModalView (position, company) {
    //     let newData = {};
    //     let newArr = [];
    //     setModalInfo()
    //     newData.push(position)
    //     setViewModalOpen(true);
    // };
    // <div><button onClick={() => setViewModalOpen(true)} className='btn'>View</button> <button onClick={() =>setAppRemoveModalOpen(true)} className='btn'>Delete</button><button onClick={() =>setSkillAddModalOpen(true)} className='btn'>+ Skill</button></div>
    // <div><button onClick={() =>setSkillRmModalOpen(true)} className='btn'>JavaScript</button> <button onClick={() =>setSkillRmModalOpen(true)} className='btn'>C++</button><button onClick={() =>setSkillRmModalOpen(true)} className='btn'>Jira</button>
    const data = [
        { id: '1', position: "SWEIII", company: "Airbnb", skills: [{ id: '23', name: 'Jira'}, {id: '24', name: 'C++'}] },
        // { id: '2', position: "SWE Intern", company: "Compass", skills: <div><button className='btn'>JavaScript</button> <button className='btn'>C++</button><button className='btn'>Jira</button></div>, buttons: <div><button className='btn'>View</button> <button className='btn'>Delete</button><button onClick={() =>setSkillAddModalOpen(true)} className='btn'>+ Skill</button></div> },
        // { id: '3', position: "SWE Intern", company: "Compass", skills: <div><button className='btn'>JavaScript</button> <button className='btn'>C++</button><button className='btn'>Jira</button></div>, buttons: <div><button className='btn'>View</button> <button className='btn'>Delete</button><button onClick={() =>setSkillAddModalOpen(true)} className='btn'>+ Skill</button></div> },
        // { id: '4', position: "SWE Intern", company: "Compass", skills: <div><button className='btn'>JavaScript</button> <button className='btn'>C++</button><button className='btn'>Jira</button></div>, buttons: <div><button className='btn'>View</button> <button className='btn'>Delete</button><button onClick={() =>setSkillAddModalOpen(true)} className='btn'>+ Skill</button></div> },
        // { id: '5', position: "SWE Intern", company: "Compass", skills: <div><button className='btn'>JavaScript</button> <button className='btn'>C++</button><button className='btn'>Jira</button></div>, buttons: <div><button className='btn'>View</button> <button className='btn'>Delete</button><button onClick={() =>setSkillAddModalOpen(true)} className='btn'>+ Skill</button></div> },
        // { id: '6', position: "SWE Intern", company: "Compass", skills: <div><button className='btn'>JavaScript</button> <button className='btn'>C++</button><button className='btn'>Jira</button></div>, buttons: <div><button className='btn'>View</button> <button className='btn'>Delete</button><button onClick={() =>setSkillAddModalOpen(true)} className='btn'>+ Skill</button></div> },
        // { id: '7', position: "SWE Intern", company: "Compass", skills: <div><button className='btn'>JavaScript</button> <button className='btn'>C++</button><button className='btn'>Jira</button></div>, buttons: <div><button className='btn'>View</button> <button className='btn'>Delete</button><button onClick={() =>setSkillAddModalOpen(true)} className='btn'>+ Skill</button></div> },
        // { id: '8', position: "SWE Intern", company: "Compass", skills: <div><button className='btn'>JavaScript</button> <button className='btn'>C++</button><button className='btn'>Jira</button></div>, buttons: <div><button className='btn'>View</button> <button className='btn'>Delete</button><button onClick={() =>setSkillAddModalOpen(true)} className='btn'>+ Skill</button></div> },
        // { id: '9', position: "SWE Intern", company: "Compass", skills: <div><button className='btn'>JavaScript</button> <button className='btn'>C++</button><button className='btn'>Jira</button></div>, buttons: <div><button className='btn'>View</button> <button className='btn'>Delete</button><button onClick={() =>setSkillAddModalOpen(true)} className='btn'>+ Skill</button></div> },
        // { id: '10', position: "SWE Intern", company: "Compass", skills: <div><button className='btn'>JavaScript</button> <button className='btn'>C++</button><button className='btn'>Jira</button></div>, buttons: <div><button className='btn'>View</button> <button className='btn'>Delete</button><button onClick={() =>setSkillAddModalOpen(true)} className='btn'>+ Skill</button></div> },
        // { id: '11', position: "SWE Intern", company: "Compass", skills: <div><button className='btn'>JavaScript</button> <button className='btn'>C++</button><button className='btn'>Jira</button></div>, buttons: <div><button className='btn'>View</button> <button className='btn'>Delete</button><button onClick={() =>setSkillAddModalOpen(true)} className='btn'>+ Skill</button></div> },
        // { id: '12', position: "SWE Intern", company: "Compass", skills: <div><button className='btn'>JavaScript</button> <button className='btn'>C++</button><button className='btn'>Jira</button></div>, buttons: <div><button className='btn'>View</button> <button className='btn'>Delete</button><button onClick={() =>setSkillAddModalOpen(true)} className='btn'>+ Skill</button></div> },
        // { id: '13', position: "SWE Intern", company: "Compass", skills: <div><button className='btn'>JavaScript</button> <button className='btn'>C++</button><button className='btn'>Jira</button></div>, buttons: <div><button className='btn'>View</button> <button className='btn'>Delete</button><button onClick={() =>setSkillAddModalOpen(true)} className='btn'>+ Skill</button></div> },
      ];
      useEffect(() => {
        //setData(data);
        //setModalInfo({ id: '1', position: "SWEIII", company: "Airbnb"})
      })
      
      return (
        <div>
          <button className='btn' variant='primary' onClick={() =>setAppModalOpen(true)}>+ Add Application</button>
          <button className='btn' variant='primary' onClick={() =>setLinkAddModalOpen(true)}>+ App Link Add</button>
          <BootstrapTable
            data={ data.map((item) => { 
              const { skills, ...rest} = item;
              return {
                ...rest,
                skills: skills.map((skill) => {
                  return (
                    <button onClick={() =>setSkillRmModalOpen(skill)} className='btn'>{skill.name}</button>
                  )
                })
              }
            }) }
            keyField='id'
            columns={ columns }
            cellEdit={ cellEditFactory({ mode: 'click'}) }
            pagination={paginationFactory()}
          />
          <ApplicationModal setData={setData} modalIsOpen={isAppModalOpen} handleAppModClose={() => setAppModalOpen(false)} />
          <LinkAddModal modalIsOpen={isLinkAddModalOpen} handleLinkModClose={() => setLinkAddModalOpen(false)} />
          <SkillAddModal modalIsOpen={isSkillAddModalOpen} handleSkillModClose={() => setSkillAddModalOpen(false)} />
          <SkillRemoveModal skill={isSkillRmModOpen} handleSkillRmModClose={() => setSkillRmModalOpen(false)} />
          <ApplicationRemoveModal modalIsOpen={isAppRemoveModalOpen} handleAppRmModClose={() => setAppRemoveModalOpen(false)} />
          <ViewApplicationModal modalIsOpen={isViewModalOpen} handleViewAppClose={() => setViewModalOpen(false)} modalData={modalInfo} />
        </div>
      );
        
};

export default ApplicationTable;