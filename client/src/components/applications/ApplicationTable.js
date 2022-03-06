import { useState } from 'react';
import React from "react";
// import axios from 'axios';
import BootstrapTable from "react-bootstrap-table-next";
import Button from "react-modal"
import cellEditFactory from 'react-bootstrap-table2-editor';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Modal from 'react-modal';
const ApplicationTable = () => {

    const[modalIsOpen, setIsOpen] = useState(false);

    const columns = [
        {text: 'ID', dataField: 'id'},
        { text: 'Position', dataField: 'position' },
        { text: 'Company', dataField: 'company'},
        { text: 'Options', dataField: 'buttons', editable: false}
    ];
    const data = [
        { id: '1', position: "SWEIII", company: "Airbnb", buttons: <div><button className='btn'>View</button> <button className='btn'>Delete</button></div>  },
        { id: '2', position: "SWE Intern", company: "Compass" },
        { id: '3', position: "SWE Intern", company: "Compass" },
        { id: '4', position: "SWE Intern", company: "Compass" },
        { id: '5', position: "SWE Intern", company: "Compass" },
        { id: '6', position: "SWE Intern", company: "Compass" },
        { id: '7', position: "SWE Intern", company: "Compass" },
        { id: '8', position: "SWE Intern", company: "Compass" },
        { id: '9', position: "SWE Intern", company: "Compass" },
        { id: '10', position: "SWE Intern", company: "Compass" },
        { id: '11', position: "SWE Intern", company: "Compass" },
        { id: '12', position: "SWE Intern", company: "Compass" },
        { id: '13', position: "SWE Intern", company: "Compass" },

      ];

      return (
        <div>
          <button className='btn' variant='primary'>+ Add Application</button>
          <button className='btn' variant='primary' onClick={() => setIsOpen(false)}>+ App Link Add</button>
          <button className='btn' variant='primary' onClick={() => setIsOpen(true)}>View Modal Page</button>
          <BootstrapTable
            data={ data }
            keyField='id'
            columns={ columns }
            cellEdit={ cellEditFactory({ mode: 'click'}) }
            pagination={paginationFactory()}
          />
          <Modal isOpen={modalIsOpen}>
            <form>

            </form>
          </Modal>
        </div>
      );
        
};

export default ApplicationTable;