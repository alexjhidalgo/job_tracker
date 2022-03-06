import Modal from 'react-modal';
function LinkAddModal (props) {
    return (
        <div style={ {maxWidth: 150} }>
          <Modal isOpen={props.modalIsOpen} size="sm">
            <form className="flex flex-col gap-5">
              <h1 className="text-2xl">Link Add</h1>
              <input
                name="link"
                placeholder="Paste Link Here"
                type="text"
                className="grayInput w-full"
                //onChange={handleChange}
                />
                <div className="flex flex-row justify-evenly mt-6 gap-10">
                    <button type="button" className="rounded basis-1/2 px-10 py-2 bg-red-300 hover:bg-red-400" onClick={props.handleLinkModClose}>
                    Cancel
                    </button>
                    <button
                    type="button"
                    className="rounded basis-1/2 px-10 py-2 bg-green-200 hover:bg-green-300"
                    onClick={props.handleLinkModClose}
                    >
                    Submit
                    </button>
                </div>
              </form>
          </Modal>
        </div>
    )
    
}

export default LinkAddModal;