// import axios from 'axios';
import { useState, useEffect } from 'react';
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
// import cellEditFactory from 'react-bootstrap-table2-editor';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ApplicationModal from './AddApplicationModal';
import ViewApplicationModal from './ViewApplicationModal';
import LinkAddModal from './LinkAddModal';
import SkillAddModal from './AddSkillModal';
import SkillRemoveModal from './SkillRemoveModal';
import ApplicationRemoveModal from './ApplicationRemoveModal';

const ApplicationTable = () => {
    const [addModalAppId, setAddModalAppId] = useState();
    const[isAppModalOpen, setAppModalOpen] = useState(false);
    const[isLinkAddModalOpen, setLinkAddModalOpen] = useState(false);
    const[isSkillAddModalOpen, setSkillAddModalOpen] = useState(false);
    const[isViewModalOpen, setViewModalOpen] = useState(false);
    const[isSkillRmModOpen, setSkillRmModalOpen] = useState(false);

    const[isAppRemoveModalOpen, setAppRemoveModalOpen] = useState(false);

    const[liveData, setData] = useState([]);
    const[modalInfo, setModalInfo] = useState([]);
    const[rowNum, setRowNum] = useState([]);

    useEffect(() => {
      fetch("/applications", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((res) => res.json())
        .then(async (res) => {
          for(let obj of res){
            obj.skills = await getSkills(obj.id)
          } 
          setData(buildData(res));
        });
    }, []);

    function readyToDelete(x){
      setAppRemoveModalOpen(true)
      setRowNum(x)
    };
    async function getSkills(application_id){
         const res = await fetch(`/skills/application_skills/${application_id}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        const result = await res.json()
        return result

    }

    const buildData = (resultList) => {
      const liveData = [];
      for (let i = 0; i < resultList.length; ++i) {

        liveData.push({
          idCol: resultList[i].id,
          statusCol: resultList[i].status,
          date_addedCol: resultList[i].date_added,
          notesCol: resultList[i].notes,
          companyCol: resultList[i].company,
          positionCol: resultList[i].position,
          descriptionCol: resultList[i].description,
          salaryCol: resultList[i].salary,
          skills: resultList[i].skills,
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
  // /// Editing cells
  
  // // const handleChange = (e) => {
  // //   const name = e.target.name;
  // //   const value = e.target.value;
  // //   setInputs((values) => ({ ...values, [name]: value }));
  // // };

  // // const handleSubmit = (e) => e.preventDefault();

  // const handleEdit = (row, column, rowIndex, columnIndex, bodyKey, bodyVal) => {
  //   // if (!inputs.nameCol) return setError("Name is required.");
    
  //   let gggg = row[bodyVal];
  //       let bod = `
  //         "${bodyKey}" : "${gggg}"
  //         "id": "${row.idCol}"
  //       `
  //   console.log(bod);

  //   fetch(`/applications/${row.idCol}`, {
  //     method: "PUT",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer " + localStorage.getItem("token"),
  //     },
  //     body: bod
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       if (res.error) return alert(res.error);

  //       // Create new copy of state and replace chosen row with new input
  //       // const dataCopy = [...data];
  //       // dataCopy[tableProps.row.index] = inputs;
  //       // setData(dataCopy);
  //     });
  // };
  //   const cellEdit = cellEditFactory({
  //     mode: 'click',
  //     onStartEdit: (row, column, rowIndex, columnIndex) => {
  //       console.log(row, column, rowIndex, columnIndex);
  //       let bodyKey = column.text.toLowerCase();
  //       let bodyVal = columns[columnIndex].dataField;
  //       handleEdit(row, column, rowIndex, columnIndex, bodyKey, bodyVal);
        

  //     }
  //   });
// /// End editing Cells Code.

      const openAddModal = (appId) => {
        setAddModalAppId(appId);
        setSkillAddModalOpen(true);
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
                buttons : <div>
                <button onClick={() => openAddModal(item.idCol)} className="btn">+ Skill</button>
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
          <SkillAddModal modalIsOpen={isSkillAddModalOpen} handleSkillModClose={() => setSkillAddModalOpen(false)} appId={addModalAppId} />
          <SkillRemoveModal modalIsOpen={isSkillRmModOpen} handleSkillRmModClose={() => setSkillRmModalOpen(false)} />
          <ApplicationRemoveModal rowToDelete={rowNum} setData={setData} modalData={liveData} modalIsOpen={isAppRemoveModalOpen} handleAppRmModClose={() => setAppRemoveModalOpen(false)} />
          <ViewApplicationModal modalIsOpen={isViewModalOpen} handleViewAppClose={() => setViewModalOpen(false)} modalData={liveData} />
        </div>
      );
        
};

export default ApplicationTable;
