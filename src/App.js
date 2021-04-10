import React from 'react';
import CreateQuestion from './Containers/Post-the-exam/Create-Questions';
import SideNav from './Containers/SideNav';
import "./App.css";

function App() {
	return (
		<>
			<div className="container">
				<div className="row mt-3">
					<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
						<SideNav></SideNav>
					</div>

					<div className="col-xs-11 col-sm-11 col-md-11 col-lg-11">
						<CreateQuestion></CreateQuestion>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
