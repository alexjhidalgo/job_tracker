import Modal from 'react-modal';
import { prop } from 'cheerio/lib/api/attributes';
import { useEffect } from 'react';
function ViewApplicationModal (props) {
    const customStyle = {
        content: {
            width: '600px',
            height: '650px',
            position: 'absolute',
            top: '5%',
            left: '35%',
        },
    };
    // function extractSkills (props) {
    //     var skillsArr = [];
    //     for (let i = 0; i < props.modalData.skills.length; i++) {
    //         skillsArr[i].push(props.modalData.skills.name);
    //     }
    //     return skillsArr[0];
    // }
    useEffect(() => { 
        console.log(props.modalData)
    });
    return (
        <Modal isOpen={props.modalIsOpen} style={customStyle}>
            <div className="flex flex-col gap-5">
                <h1 className="text-2xl">View Application</h1>
                <h5>Date Added: <b>{props.modalData[0]}</b></h5>
                <h5>Status: <b>{props.modalData[1]}</b></h5>
                <h5>Position: <b>{props.modalData[2]}</b></h5>
                <h5>Company: <b>{props.modalData[3]}</b></h5>
                <h5>Salary: <b>{props.modalData[4]}</b></h5>
                <h5>Skills: <b>{props.modalData[5].map(skill => skill.name).join(', ')}</b></h5>
                <button
                type="button"
                className="rounded basis-1/2 px-10 py-2 bg-green-200 hover:bg-green-300"
                onClick={props.handleViewAppClose}
                >
                Close
                </button>
            </div>
        </Modal>

    )
}

export default ViewApplicationModal;
