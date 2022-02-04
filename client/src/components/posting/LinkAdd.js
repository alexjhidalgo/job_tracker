import React from "react";

function LinkAdd() {
    function submitHandler() {
        console.log("perform web scraping!")
    }

    return (
        <div className='tile'>
            <h2>Link Add</h2>
            <form>
                <input name='link-add' />
            <div className='actions'>
                <button className='btn' onClick={submitHandler}>Add Post</button>
            </div>
            </form>
        </div>
    )
}

export default LinkAdd;
