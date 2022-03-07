import Modal from 'react-modal';
import { prop } from 'cheerio/lib/api/attributes';
function ViewApplicationModal (props) {
    const customStyle = {
        content: {
            width: '600px',
            height: '500px',
            position: 'absolute',
            top: '10%',
            left: '35%',
        },
    };
    return (
        <Modal isOpen={props.modalIsOpen} style={customStyle}>
            <div className="flex flex-col gap-5">
                <h1 className="text-2xl">View Application</h1>
                <h5>ID: {props.modalData.id}</h5>
                <h5>Position: {props.modalData.position}</h5>
                <h5>Company: {props.modalData.company}</h5>
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
