import React, { Component } from 'react';
import Tables from './Tables';
import Graph from './Graph';
import Sessiontime from './Sessiontime';
// import Calendars from './/Calendars'

export default class Dashboard extends Component {
	render() {
		return (
            
            
			<div className='main'>

               
                <div className='row'>
                    <div className='col-6'>  <Tables /></div>
                    <div className='col-5'> <Graph />
                        <div className='row'>
                            <div className='col-12'>
                        <Sessiontime />
                            </div>
                        </div>
                    </div>
                    
                </div>










				{/* <div className='row'> */}

    {/* <div className='col-1'></div> */}
    {/* <div className='col-1'></div> */}
    {/* <div className='col-6'>
	<Tables />
    </div>
    <div className='col-5'>
    <Graph />
    </div>
    <div className='col-1'></div>
    
    				
				</div> */}


				
			</div>
		);
	}
}
