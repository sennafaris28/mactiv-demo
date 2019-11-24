import React, {Component} from 'react';
import SecondLayout from './SecondLayout';
import SecondAnnounceLayout from './SecondAnnounceLayout';
import Axios from 'axios';

const style = {
    front: {
        position: 'absolute',
        left: '0px',
        top: '0px',
        zIndex: '100'
    }
}

class BaseLayout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            announce: true,
            prayer: [
                "00:00",
                "00:00",
                "00:00",
                "00:00",
                "00:00",
                "00:00"
            ]
        }

    }

    componentDidMount() {
        this.getPrayerTime();
        this.timerID2 = setInterval(() => {
            this.getPrayerTime();
        }, 3600000);
        this.timerID = setInterval(
            () => this.showInterrupt()
            , 120000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
        clearInterval(this.timerID2);
    }

    checkFormat(p) {
        if (p.length === 4) {
            p = '0' + p;
        }
        return p;
    }

    getPrayerTime() {
        const serialNumber = this.props.serialNumber;
        Axios.post('https://devMactiv.mybluemix.net/api/masjidBox/getPrayerTime',
            {
                serialNumber
            }).then(res => {
                console.log(res);
                if (res.status === 200) {
                    const pt = res.data;
                    this.setState({
                        prayer: [
                            this.checkFormat(pt.fajr),
                            this.checkFormat(pt.sunrise),
                            pt.zuhr,
                            pt.asr,
                            pt.maghrib,
                            pt.isya
                        ]
                    })
                }
            }).catch(err => {
                console.log("Serial Number Not Found");
            })
    }

    showInterrupt() {
        this.setState(prevState => ({
            announce: !prevState.announce
        }))

        setTimeout(() => {
            this.setState(prevState => ({
                announce: !prevState.announce
            }))
        }, 15000);
    }

    render() {
        let message;
        const serialNumber = this.props.serialNumber;
        if (this.state.announce) {
            message = <SecondAnnounceLayout prayer={this.state.prayer}/>
        }
        return (
            <div>
                {message}
                <SecondLayout prayer={this.state.prayer} />
            </div>
        )
    }
}

export default BaseLayout;