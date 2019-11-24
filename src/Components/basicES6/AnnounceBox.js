import React, { Component } from 'react';

import icon from '../../Images/smoke.png';

var announceStyle = {
    rootStyle: {
        height: '100%',
        borderTopLeftRadius: '100px',
        borderTopRightRadius: '100px',
        background: 'white',
        boxShadow: '5px 5px 20px -10px rgba(0,0,0,0.75)',
    },
    h2Style: {
        height: '94px',
        //fontFamily: 'Mont-SemiBold',
        fontFamily: 'Proxima-SemiBold',
        fontSize: '4.5rem',
        letterSpacing: '-2px',
        color: 'white',
        margin: '0',
        paddingTop: '0.5rem',
        textShadow: '4px 4px 15px rgba(0, 0, 0, 0.5)'
    },
    hrStyle: {
        width: '90%',
        margin: '0',
        borderTop: '4px solid white',
    },
    h1Style: {
        fontFamily: 'Proxima-SemiBold',
        fontSize: '100px',
        letterSpacing: '-2px',
        color: 'black',
        margin: '0 300px',
    },
}

class AnnounceBox extends Component {

    render() {
        return (
            <div
                className="text-center py-5"
                style={announceStyle.rootStyle}>
                    <img
                        src={icon}
                        alt="Icon"
                        style={announceStyle.iconStyle}/>
                    <h1
                        className="text-center mt-5"
                        style={announceStyle.h1Style}>
                            Dilarang merokok di kawasan Masjid!
                    </h1>
            </div>
        );
    }

};

export default AnnounceBox;