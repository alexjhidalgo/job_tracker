import Modal from 'react-modal';
function ApplicationRemoveModal (props) {
    const customStyle = {
        content: {
            width: '600px',
            height: '300px',
            position: 'absolute',
            top: '10%',
            left: '35%',
        },
    };
    return (
        <Modal isOpen={props.modalIsOpen} style={customStyle}>
            <div className="flex flex-col gap-5">
                <h1 className="text-2xl">Delete Application</h1>
                <h5>Are you sure you want to <b>delete</b> this application?</h5>
                <div className="flex flex-row justify-evenly mt-6 gap-10">
                    <button type="button" className="rounded basis-1/2 px-10 py-2 bg-red-300 hover:bg-red-400" onClick={props.handleAppRmModClose}>
                    No
                    </button>
                    <button
                    type="button"
                    className="rounded basis-1/2 px-10 py-2 bg-green-200 hover:bg-green-300"
                    onClick={props.handleAppRmModClose}
                    >
                    Yes
                    </button>
                </div>
            </div>
        </Modal>
    )
    
}

export default ApplicationRemoveModal;