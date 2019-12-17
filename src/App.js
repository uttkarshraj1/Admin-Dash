import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import ReactNotification from 'react-notifications-component'

import Navbar from './components/navbar.component';

// import ExercisesList from "./components/exercises-list.component";
// import tryit from './/components/tryit'

import Graph from './components/Graph';
import Tables from './components/Tables';
import Forms from './components/Forms';
import Calendars from './components/Calendars';
import Location from './components/Location';
import Sessiontime from './components/Sessiontime';
import Dashboard from './components/Dashboard';

import 'react-notifications-component/dist/theme.css';

function App() {
	return (
		<Router>
			<img className='edit' src='https://images.nobroker.in/static/img/logos/nb_logo_trans.png'></img>

			
				<Navbar />

    <div className='row'>
    <div className='col-4'></div>
    <div className='col-8'></div>
    </div>

				<Route path='/main' exact component={Dashboard} />
				<Route path='/1' exact component={Graph} />
				<Route path='/2' exact component={Tables} />
				<Route path='/3' exact component={Forms} />
				<Route path='/4' exact component={Location} />
				<Route path='/5' exact component={Sessiontime} />
				<Route path='/6' exact component={Calendars} />
		
		</Router>

    
	);
}

export default App;
