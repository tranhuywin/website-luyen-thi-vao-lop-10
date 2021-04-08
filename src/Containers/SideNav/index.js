import { useState } from 'react';
import Style from './style.module.css'

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
                <button className="btn closebtn" onClick={closeNav}>&times;</button>
                <a href="/">Trang chủ</a>
                <a href="/">Bảng điểm</a>
                <a href="/">Luyện thi</a>
                <a href="/">Ôn thi</a>
                <a href="/">Đăng đề</a>
                <a href="/">Duyệt đề</a>
                <a href="/">Đăng xuất</a>
            </div>
            <button style={styleOpenbutton} className='btn' onClick={openNav}> &#9776;</button>
        </>
    )
}
