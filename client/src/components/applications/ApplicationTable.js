import { useState } from 'react';
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
const ApplicationTable = () => {
    const columns = [
        { text: 'Position', dataField: 'position' },
        { text: 'Company', dataField: 'company'}
    ];
    const data = [
        { position: "SWEIII", company: "Airbnb" },
        { position: "SWE Intern", company: "Compass" },

      ];

      return (
        <div style={{ maxWidth: '100%' }}>
          <BootstrapTable
          columns={columns}
          data={data}
          keyField='id' />
        </div>
      );
};

export default ApplicationTable;