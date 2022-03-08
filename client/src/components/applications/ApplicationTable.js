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
    const[isViewModalOpen, setViewModalOpen] = useState(false);
    const[isSkillRmModOpen, setSkillRmModalOpen] = useState(false);
    const[isAppRemoveModalOpen, setAppRemoveModalOpen] = useState(false);
    const[liveData, setData] = useState([]);
    const[modalInfo, setModalInfo] = useState([]);

    useEffect(() => {
      fetch("/applications", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setData(buildData(res));
          
        });
    }, []);
  
    const buildData = (resultList) => {
      const liveData = [];
      for (let i = 0; i < resultList.length; ++i) {
        liveData.push({
          statusCol: resultList[i].status,
          date_addedCol: resultList[i].date_added,
          notesCol: resultList[i].notes,
          companyCol: resultList[i].company,
          positionCol: resultList[i].position,
          descriptionCol: resultList[i].description,
          salaryCol: resultList[i].salary,
          skills: [{ id: '23', name: 'Jira'}, {id: '24', name: 'C++'}], 
          buttons: <div>
                    <button className='btn'>View</button> 
                    <button onClick={() =>setAppRemoveModalOpen(true)} className='btn'>Delete</button>
                    <button onClick={() =>setSkillAddModalOpen(true)} className='btn'>+ Skill</button>
                  </div>
        });
      }
      return liveData;
    };


    const columns = [
        { text: 'Date Added', dataField: 'date_addedCol' },
        { text: 'Status', dataField: 'statusCol' },
        { text: 'Position', dataField: 'positionCol' },
        { text: 'Company', dataField: 'companyCol' },
        { text: 'Salary', dataField: 'salaryCol'},
        { text: 'Skills', dataField: 'skills', editable: false},
        { text: 'Options', dataField: 'buttons', editable: false}
    ];

    function handleViewModalDataOpen (modalArr) {
      setModalInfo(modalArr);
      setViewModalOpen(true);
    }

      return (
        <div>
          <button className='btn' variant='primary' onClick={() =>setAppModalOpen(true)}>+ Add Application</button>
          <button className='btn' variant='primary' onClick={() =>setLinkAddModalOpen(true)}>+ App Link Add</button>
          <BootstrapTable
            data={ liveData.map((item) => { 
              const { skills, ...rest} = item;
              return {
                ...rest,
                buttons : <div><button onClick={() => handleViewModalDataOpen([item.date_addedCol, item.statusCol, item.positionCol, item.companyCol, item.salaryCol, item.skills])} className='btn'>View</button>
                <button className='btn'>+ Skill</button>
                <button className='btn'>Delete</button>
                </div>,
                skills: skills.map((skill) => {
                  return (
                    <button onClick={() =>setSkillRmModalOpen(skill)} className='btn'>{skill.name}</button>
                  )
                })
              }
            }) }
            keyField='id'
            columns={ columns }
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
