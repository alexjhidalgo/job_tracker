import { useState } from 'react';
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from 'react-bootstrap-table2-editor';
import {Modal, Form, Button} from 'react-bootstrap'
// import { TableHeaderColumn } from 'react-bootstrap-table';
const ApplicationTable = () => {
    const columns = [
        {text: 'ID', dataField: 'id'},
        { text: 'Position', dataField: 'position' },
        { text: 'Company', dataField: 'company'}
    ];
    const data = [
        { id: '1', position: "SWEIII", company: "Airbnb" },
        { id: '2', position: "SWE Intern", company: "Compass" },

      ];
      return (
        <div>
          <button className='btn' variant='primary'>+ Add Application</button>
          <button className='btn' variant='primary'>+ App Link Add</button>
          <BootstrapTable
            data={ data }
            keyField='id'
            columns={ columns }
            cellEdit={ cellEditFactory({ mode: 'click'}) }
          />
        </div>
      );
        
};

export default ApplicationTable;