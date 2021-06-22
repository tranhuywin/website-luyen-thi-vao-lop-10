import Styles from './Header.module.css';

const Header = ({onClickOpenProfile}) => {
    const user = JSON.parse(localStorage.getItem('_User'));
    const isAuth = user ? false : true;

    return (
        <header className={Styles.HeaderWrapper}>
            <nav className={Styles.HeaderNav}>
                <div className={Styles.HeaderNavBrand}>
                    Luyện thi vào lớp 10
                </div> 
                <div className={Styles.HeaderNavRight}>
                    {!isAuth && user && <div className={Styles.HeaderNavRightJoinButton} onClick={onClickOpenProfile}>
                     <img className={Styles.avatar}src={user.photoUrl}></img>   
                    {user.name} 
                     </div>}
                </div>
            </nav>
        </header >
    )
}

export default Header
