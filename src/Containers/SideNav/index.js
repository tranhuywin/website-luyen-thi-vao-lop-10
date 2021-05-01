import { useState } from 'react';
import Style from './style.module.css';
import {Link} from 'react-router-dom';
export default function SideNav() {
    const [isOpenSideNav, setIsOpenSidenav] = useState(false);
    const styleOpenbutton = {
        'fontSize': "30px",
        'cursor': 'pointer'
    }
    function openNav() {
        if(isOpenSideNav === false ){
            setIsOpenSidenav(true);
        }
      }

    function closeNav() {
        if(isOpenSideNav === true ){
            setIsOpenSidenav(false);
        }
    }
    return (
        <>
            <div className={Style.sidenav + ` ` + (isOpenSideNav === true ? Style.opennav :  Style.closenav) }>
                <button className="closebtn" onClick={closeNav}>&times;</button>
                <Link to="/"><i className="bi bi-house-door"></i> Trang chủ</Link>
                <Link to="/"><i className="bi bi-card-list"></i> Bảng điểm</Link>
                <Link to="/"><i className="bi bi-eyeglasses"></i> Luyện thi</Link>
                <Link to="/"><i className="bi bi-book"></i> Ôn thi</Link>
                <Link to="/dien-thong-tin-de"><i className="bi bi-file-earmark-plus"></i> Đăng đề</Link>
                <Link to="/duyet-de"><i className="bi bi-cloud-upload"></i> Duyệt đề</Link>
                <Link to="/"><i className="bi bi-box-arrow-right"></i> Đăng xuất</Link>
            </div>
            <button style={styleOpenbutton} className='btn' onClick={openNav}> &#9776;</button>
        </>
    )
}
