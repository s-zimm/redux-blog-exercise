import React from 'react';

const ScreenDumb = ({ dispatch, posts }) => {
    return (
        <div>
            <p>{posts.toString()}</p>
            <button onClick={() => dispatch({ type: 'CREATE_POST' })}>Click</button>
        </div>
    )
}

export default ScreenDumb;