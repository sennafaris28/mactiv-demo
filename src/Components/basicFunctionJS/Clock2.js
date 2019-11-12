import React from 'react';


function Clock2() {
    return (
        <div>
            <h2>{new Date().toLocaleTimeString()}.</h2>
        </div>
    );

};

export default Clock2;