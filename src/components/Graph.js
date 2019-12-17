import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class Graph extends Component {
	constructor(props) {
		super(props);

		this.state = {
			options: {
				chart: {
					id: 'basic-bar'
				},
				xaxis: {
					categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
				}
			},
			series: [
				{
					name: 'series-1',
					data: [30, 40, 45, 50, 49, 60, 70, 91]
				}
			]
		};
	}

	render() {
		return (
			<div className='container'>
				<div className='app'>

					<div className='row'>
					<div className='col-3'></div>
					<div className='col-6'>
					<div className='mixed-chart'>
							<Chart options={this.state.options} series={this.state.series} type='area' width='540' height='480' />
						
					</div>
					</div>
					<div className='col-3'></div>


					</div>


					
					
				</div>
			</div>
		);
	}
}

export default Graph;
