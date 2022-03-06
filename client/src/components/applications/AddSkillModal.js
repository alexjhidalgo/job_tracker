import Modal from 'react-modal';
function SkillAddModal (props) {
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
        <form className="flex flex-col gap-5">
            <h1 className="text-2xl">Add Skill</h1>
            <input
            name="skill"
            placeholder="Skill(i.e. C++)"
            type="text"
            className="grayInput w-full"
            //onChange={handleChange}
            />
            <div className="flex flex-row justify-evenly mt-6 gap-10">
                <button type="button" className="rounded basis-1/2 px-10 py-2 bg-red-300 hover:bg-red-400" onClick={props.handleModClose}>
                Cancel
                </button>
                <button
                type="button"
                className="rounded basis-1/2 px-10 py-2 bg-green-200 hover:bg-green-300"
                onClick={props.handleSkillModClose}
                >
                Submit
                </button>
            </div>
            </form>
        </Modal>
    )
    
}

export default SkillAddModal;