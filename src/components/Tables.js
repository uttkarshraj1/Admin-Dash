import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = () => {
	const data = {
		columns: [
			{
				label: 'Id',
				field: 'Id',
				sort: 'asc',
        width: 70,
        height: 23,
      },{
				label: 'Email',
				field: 'Email',
				sort: 'asc',
        width: 70,
        height: 23,
      },{
				label: 'Location',
				field: 'Location',
				sort: 'asc',
        width: 70,
        height: 23,
      },{
				label: 'LoggedIn',
				field: 'LoggedIn',
				sort: 'asc',
        width: 70,
        height: 23,
      },{
				label: 'LoggedOut',
				field: 'LoggedOut',
				sort: 'asc',
        width: 70,
        height: 23,
      },{
				label: 'Message',
				field: 'Message',
				sort: 'asc',
        width: 70,
        height: 23,
      },
      {
				label: 'PageCount',
				field: 'PageCount',
				sort: 'asc',
				width: 70
      },
      {
				label: 'Platform',
				field: 'Platform',
				sort: 'asc',
				width: 70
      },{
				label: 'ipAddress',
				field: 'ipAddress',
				sort: 'asc',
				width: 70
      },
      

      
		],

		rows: [
			{
				Id: '1',
				Email: 'uttkarshraj1@gmail.com',
				Location: 'Bangalore',
				LoggedIn: 'Mon Dec 16 2019 15:55:29 GMT+0530 (India Standard Time)',
				LoggedOut: 'Mon Dec 16 2019 16:02:18 GMT+0530 (India Standard Time)',
        Message: 'Login successful',
        PageCount: '23',
        Platform:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ',
        ipAddress:'1.22.147.115'
      },
      {
				Id: '2',
				Email: 'uttkarshraj1@gmail.com',
				Location: 'Bangalore',
				LoggedIn: 'Mon Dec 16 2019 15:55:29 GMT+0530 (India Standard Time)',
				LoggedOut: 'Mon Dec 16 2019 16:02:18 GMT+0530 (India Standard Time)',
        Message: 'Login successful',
        PageCount: '23',
        Platform:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ',
        ipAddress:'1.22.147.115'
      },
      {
				Id: '3',
				Email: 'uttkarshraj1@gmail.com',
				Location: 'Bangalore',
				LoggedIn: 'Mon Dec 16 2019 15:55:29 GMT+0530 (India Standard Time)',
				LoggedOut: 'Mon Dec 16 2019 16:02:18 GMT+0530 (India Standard Time)',
        Message: 'Login successful',
        PageCount: '23',
        Platform:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ',
        ipAddress:'1.22.147.115'
      },
      {
				Id: '4',
				Email: 'ramrshraj1@gmail.com',
				Location: 'Bangalore',
				LoggedIn: 'Mon Dec 16 2019 15:55:29 GMT+0530 (India Standard Time)',
				LoggedOut: 'Mon Dec 16 2019 16:02:18 GMT+0530 (India Standard Time)',
        Message: 'Login successful',
        PageCount: '25',
        Platform:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ',
        ipAddress:'1.22.147.115'
      },
      {
				Id: '5',
				Email: 'uttkarshraj1@gmail.com',
				Location: 'Bangalore',
				LoggedIn: 'Mon Dec 16 2019 15:55:29 GMT+0530 (India Standard Time)',
				LoggedOut: 'Mon Dec 16 2019 16:02:18 GMT+0530 (India Standard Time)',
        Message: 'Login successful',
        PageCount: '23',
        Platform:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ',
        ipAddress:'1.22.147.115'
      },
      {
				Id: '6',
				Email: 'uttkarshraj1@gmail.com',
				Location: 'Bangalore',
				LoggedIn: 'Mon Dec 16 2019 15:55:29 GMT+0530 (India Standard Time)',
				LoggedOut: 'Mon Dec 16 2019 16:02:18 GMT+0530 (India Standard Time)',
        Message: 'Login successful',
        PageCount: '23',
        Platform:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ',
        ipAddress:'1.22.147.115'
      },
      {
				Id: '7',
				Email: 'uttkarshraj1@gmail.com',
				Location: 'Bangalore',
				LoggedIn: 'Mon Dec 16 2019 15:55:29 GMT+0530 (India Standard Time)',
				LoggedOut: 'Mon Dec 16 2019 16:02:18 GMT+0530 (India Standard Time)',
        Message: 'Login successful',
        PageCount: '23',
        Platform:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ',
        ipAddress:'1.22.147.115'
      },
      {
				Id: '8',
				Email: 'uttkarshraj1@gmail.com',
				Location: 'Bangalore',
				LoggedIn: 'Mon Dec 16 2019 15:55:29 GMT+0530 (India Standard Time)',
				LoggedOut: 'Mon Dec 16 2019 16:02:18 GMT+0530 (India Standard Time)',
        Message: 'Login successful',
        PageCount: '23',
        Platform:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ',
        ipAddress:'1.22.147.115'
      },
      {
				Id: '9',
				Email: 'uttkarshraj1@gmail.com',
				Location: 'Bangalore',
				LoggedIn: 'Mon Dec 16 2019 15:55:29 GMT+0530 (India Standard Time)',
				LoggedOut: 'Mon Dec 16 2019 16:02:18 GMT+0530 (India Standard Time)',
        Message: 'Login successful',
        PageCount: '23',
        Platform:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ',
        ipAddress:'1.22.147.115'
      },
      {
				Id: '10',
				Email: 'uttkarshraj1@gmail.com',
				Location: 'Bangalore',
				LoggedIn: 'Mon Dec 16 2019 15:55:29 GMT+0530 (India Standard Time)',
				LoggedOut: 'Mon Dec 16 2019 16:02:18 GMT+0530 (India Standard Time)',
        Message: 'Login successful',
        PageCount: '23',
        Platform:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ',
        ipAddress:'1.22.147.115'
			},
    
      {
				Id: '11',
				Email: 'uttkarshraj1@gmail.com',
				Location: 'Bangalore',
				LoggedIn: 'Mon Dec 16 2019 15:55:29 GMT+0530 (India Standard Time)',
				LoggedOut: 'Mon Dec 16 2019 16:02:18 GMT+0530 (India Standard Time)',
        Message: 'Login successful',
        PageCount: '23',
        Platform:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ',
        ipAddress:'1.22.147.115'
			},
		
		
      
			
      
      
      
		]
	};

	return <MDBDataTable striped bordered small data={data} />;
};

export default DatatablePage;
