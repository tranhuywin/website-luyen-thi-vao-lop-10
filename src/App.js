import React, { useState } from 'react';
import CreateQuestion from './Containers/Post-the-exam/Create-Questions';
import PreviewTheExam from './Containers/Post-the-exam/Preview-the-exam';
import FillInExamInformation from './Containers/Post-the-exam/Fill-in-exam-information';
import PostToTheWebsite from './Containers/Post-the-exam/Post-to-the-website';
import FormMarkExam from './Containers/TakeExam/FormMarkExam';
import TakeExam from './Containers/TakeExam';
import DoTest from './Containers/TakeExam/DoTest';
import Profile from './Containers/Profile';
import Login from './Containers/Login';
import SideNav from './Containers/SideNav';
import Header from './Components/Header';
import HomePage from './Containers/HomePage';
import StudentRanking from './Containers/StudentRanking';

import "./App.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

function App() {
	const [isOpenProfile, setIsOpenProfile] = useState(false);
	const [isSideNav, setIsSideNav] = useState(false);
	function handleClickOpenProfile() {
		setIsOpenProfile(!isOpenProfile);
	}
	function handleClickBody() {
		isOpenProfile && setIsOpenProfile(false);
		isSideNav && setIsSideNav(false);
	}
	return (
		<Router>
			<Switch>
				<Route path='/' exact component={HomePage}></Route>
				<div>
					{<Header onClickOpenProfile={handleClickOpenProfile}></Header>}
					<div className='container-fluid' onClick={handleClickBody}>
						<div className='container' >
							<div className="row mt-3">
								<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
									<SideNav isOpen={isSideNav}></SideNav>
									{!isSideNav && <button style={{ fontSize: '30px' }} className='btn' onClick={() => { setIsSideNav(true) }}> &#9776;</button>}
								</div>
								<div className={"col-xs-11 col-sm-11 col-md-11 col-lg-11 p-4 cardBody"}>
									<Route path='/dang-nhap' exact component={Login}></Route>
									<Route path='/tao-cau-hoi/:questionNumber' component={CreateQuestion}></Route>
									<Route path='/xem-truoc-de' component={PreviewTheExam}></Route>
									<Route path='/dien-thong-tin-de' exact component={FillInExamInformation}></Route>
									<Route path='/duyet-de' exact component={PostToTheWebsite}></Route>
									<Route path='/ho-so' exact component={Profile}></Route>
									<Route path='/bang-diem' exact component={StudentRanking}></Route>
									<Route path='/luyen-thi' exact component={TakeExam}></Route>
									<Route path='/luyen-thi/lam-bai-thi/:idExam' exact component={DoTest}></Route>
									<Route path='/luyen-thi/lam-bai-thi/:idExam/cham-diem' exact component={FormMarkExam}></Route>
								</div>
							</div>
						</div>
					</div>
					<Profile isOpen={isOpenProfile}></Profile>
				</div>
			</Switch>
		</Router>
	);
}

export default App;
