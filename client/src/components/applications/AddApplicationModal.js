import Modal from 'react-modal';
import { prop } from 'cheerio/lib/api/attributes';
function ApplicationModal (props) {
    return (
        <div style={ {maxWidth: 150} }>
          <Modal isOpen={props.modalIsOpen} size="sm">
            <form className="flex flex-col gap-5">
              <h1 className="text-2xl">Add Application</h1>
              <input
                name="id"
                placeholder="ID"
                type="text"
                className="grayInput w-full"
                //onChange={handleChange}
                />
                <input
                    name="position"
                    placeholder="Position"
                    type="text"
                    className="grayInput w-full"
                    //onChange={handleChange}
                />
                <input
                    name="company"
                    placeholder="Company"
                    className="grayInput w-full"
                    type="text"
                    //onChange={handleChange}
                />
                <div className="flex flex-row justify-evenly mt-6 gap-10">
                    <button type="button" className="rounded basis-1/2 px-10 py-2 bg-red-300 hover:bg-red-400" onClick={props.handleAppModClose}>
                    Cancel
                    </button>
                    <button
                    type="button"
                    className="rounded basis-1/2 px-10 py-2 bg-green-200 hover:bg-green-300"
                    onClick={props.handleAppModClose}
                    >
                    Save
                    </button>
                </div>
              </form>
          </Modal>
        </div>
    )
}

export default ApplicationModal;