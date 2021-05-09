import Styles from './profile.module.css';
import { useState, useEffect } from 'react';

export default function Profile({ isOpen }) {
    const [isOpenSideNav, setIsOpenSidenav] = useState(isOpen);
    const user = JSON.parse(localStorage.getItem('_User'));
    useEffect(() => {
        setIsOpenSidenav(isOpen);
    }, [isOpen])
    
    return (
        <>
            <div className={Styles.sidenav + ` ` + (isOpenSideNav ? Styles.opennav : Styles.closenav)}>

                <div className={Styles.title}> Thông tin</div>
                <div className={Styles.DetailInformation}>
                    <div>
                        <i className="bi bi-person"></i><span> {user?.name}</span><i className={"bi bi-pencil " + Styles.iconEdit}></i>
                    </div>
                    <div>
                        <i className="bi bi-envelope"></i><span>{user?.email}</span><i className={"bi bi-pencil " + Styles.iconEdit}></i>
                    </div>
                    <div>
                        <i className="bi bi-envelope"></i><span>Mật khẩu: *****</span><i className={"bi bi-pencil " + Styles.iconEdit}></i>
                    </div>
                    <div>
                    <i className="bi bi-clock-history"></i><span>Lịch sử làm bài</span>
                </div>
                </div>

            </div>
        </>
    )
}
