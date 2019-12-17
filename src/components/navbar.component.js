import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
	render() {
		return (
			<nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
				<Link to='/main' className='navbar-brand'>
					DASHBOARD
				</Link>

				<div className='collpase navbar-collapse'>
					<ul className='navbar-nav mr-auto'>
						<li className='navbar-item'>
							<Link to='/1' className='nav-link'>
								Graph
							</Link>
						</li>
						<li className='navbar-item'>
							<Link to='/2' className='nav-link'>
								Tables
							</Link>
						</li>
						<li className='navbar-item'>
							<Link to='/3' className='nav-link'>
								Forms
							</Link>
						</li>

						<li className='navbar-item'>
							<Link to='/5' className='nav-link'>
								Session Time
							</Link>
						</li>
						<li className='navbar-item'>
							<Link to='/6' className='nav-link'>
								Calendar
							</Link>
						</li>
						<li className='navbar-item'>
							<Link to='/4' className='nav-link'>
								Location
							</Link>
						</li>




						
					</ul>
				</div>
			</nav>
		);
	}
}
