import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import ProgressBarData from './BarGraphForData';
import 'react-circular-progressbar/dist/styles.css';
import './ProgressBar.css';


class ProgressBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            onGoingOrders:ProgressBarData.onGoingOrders,
            confirmedOrders:ProgressBarData.confirmedOrders
        }
    }


    getPercentage = (onGoingOrders,confirmedOrders)=>{

        return ((confirmedOrders/onGoingOrders)*100);

    }

    componentDidMount=()=>{
        this.setState({onGoingOrders:ProgressBarData.onGoingOrders,confirmedOrders:ProgressBarData.confirmedOrders});
    }


    render = ()=>{
        const percentage = Math.ceil(this.getPercentage(this.state.onGoingOrders,this.state.confirmedOrders));
        return (
            <div>

                            <CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                            styles={{
                                // Customize the root svg element
                                root: {},
                                // Customize the path, i.e. the "completed progress"
                                path: {
                                // Path color
                                stroke: `rgba(62, 152, 199, ${percentage / 100})`,
                                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                strokeLinecap: 'butt',
                                // Customize transition animation
                                transition: 'stroke-dashoffset 0.5s ease 0s',
                                // Rotate the path
                                transform: 'rotate(0.25turn)',
                                transformOrigin: 'center center',
                                },
                                // Customize the circle behind the path, i.e. the "total progress"
                                trail: {
                                // Trail color
                                stroke: '#d6d6d6',
                                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                strokeLinecap: 'butt',
                                // Rotate the trail
                                transform: 'rotate(0.25turn)',
                                transformOrigin: 'center center',
                                },
                                // Customize the text
                                text: {
                                // Text color
                                fill: '#f88',
                                // Text size
                                fontSize: '16px',
                                },
                                // Customize background - only used when the `background` prop is true
                                background: {
                                fill: '#3e98c7',
                                },
                            }}
                        />
                        <div className = "designText">
                            {this.state.confirmedOrders} orders has been confirmed out of {this.state.onGoingOrders} orders.
                        </div>

                
            </div>
        )
    }




}

export default ProgressBar;