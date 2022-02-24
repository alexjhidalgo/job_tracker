import React from "react";
import Tile from "./Tile";

function Tiles ({ data, setData}) {
    // const spitDocs = (repeat) => {
    //     let docList = [];
    //     for (let i = 0; i < repeat; ++i) {
    //       docList.push({
    //         resumes: "Resume " + i,
    //         coverLetters: "Cover Letter " + i,
    //       });
    //     }
    //     return docList;
    //   };
    const doc = {name: "resume_file"}
    
    return (
        <div>
            <p>This component needs to access the files we have in the database and display them. This would in effect be the same as ContactsTable.js but for resumes.</p>
            <Tile file={doc}/>
        </div>
       
    )
}

export default Tiles;