import { useState } from 'react';
import { useHistory } from 'react-router';
import Style from './style.module.css';
import { Link } from 'react-router-dom';
export default function SideNav({ isOpen }) {

    const userInit = localStorage.getItem('_User');
    const [user, setUser] = useState(userInit);
    const history = useHistory();
   
    function hanldeLogOut() {
        localStorage.removeItem('_User');
        history.go('/');
        setUser(null);
    }
    return (
        <>
            <div className={Style.sidenav + ` ` + (isOpen ? Style.opennav : Style.closenav)}>
                <Link to="/"><i className="bi bi-house-door mx-2 " ></i> Trang chủ</Link>
                <Link to="/bang-diem"><i className="bi bi-card-list mx-2" ></i> Bảng điểm</Link>
                <Link to="/luyen-thi"><i className="bi bi-eyeglasses mx-2" ></i> Luyện thi</Link>
                {user && <Link to="/dien-thong-tin-de"><i className="bi bi-file-earmark-plus mx-2" ></i> Đăng đề</Link>}
                {user && <Link to="/duyet-de"><i className="bi bi-cloud-upload mx-2"></i> Duyệt đề</Link>}
                {user && <Link onClick={hanldeLogOut}><i className="bi bi-box-arrow-left mx-2"></i> Đăng xuất</Link>}
                {!user && <Link to="/dang-nhap"><i className="bi bi-box-arrow-right mx-2"></i> Đăng nhập</Link>}
            </div>

        </>
    )
}
