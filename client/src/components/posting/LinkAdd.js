import React from "react";

function LinkAdd() {
    function submitHandler() {
        console.log("perform web scraping!")
    }

    return (
        <div className='tile'>
            <h2>Link Add</h2>
            <div className="container">
                <input className="form-control" placeholder="Paste a Job Page Link" />
                <div className='actions'>
                    <button className='btn' onClick={submitHandler}>Add Post</button>
                </div>
            </div>
        </div>
    )
}

export default LinkAdd;
