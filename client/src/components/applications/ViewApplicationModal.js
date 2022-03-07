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
            <h1 className="text-2xl">View Application</h1>
            <div className="flex flex-row justify-evenly mt-6 gap-10">
                <ol>ID: {props.modalData.id}</ol>
                <ol>Position: {props.modalData.position}</ol>
                <ol>Company: {props.modalData.company}</ol>
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
