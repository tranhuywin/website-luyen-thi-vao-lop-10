import React from 'react';
import CreateQuestion from './Containers/Post-the-exam/Create-Questions';
import PreviewTheExam from './Containers/Post-the-exam/Preview-the-exam';
import FillInExamInformation from './Containers/Post-the-exam/Fill-in-exam-information';
import PostToTheWebsite from './Containers/Post-the-exam/Post-to-the-website';
import Login from './Containers/Login';
import SideNav from './Containers/SideNav';
import "./App.css";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

function App() {
	return (
		<>
			<Router>
				<div className="container">
					<div className="row mt-3">
						<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
							<SideNav></SideNav>
						</div>

						<div className="col-xs-11 col-sm-11 col-md-11 col-lg-11">
							<Switch>
								<Route path='/dang-nhap' exact component={Login}></Route>
								<Route path='/tao-cau-hoi/:questionNumber' component={CreateQuestion}></Route>
								<Route path='/xem-truoc-de' component={PreviewTheExam}></Route>
								<Route path='/dien-thong-tin-de' exact component={FillInExamInformation}></Route>
								<Route path='/duyet-de' exact component={PostToTheWebsite}></Route>
							</Switch>
						</div>
					</div>
				</div>
			</Router>
		</>
	);
}

export default App;
