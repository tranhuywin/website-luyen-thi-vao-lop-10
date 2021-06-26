import { useState } from 'react';
import { useHistory } from 'react-router';
import firebase, {AddDataToCollection} from '../../firebase';
import Styles from './Login.module.css';

function Login() {
    const [typePassword, setTypePassword] = useState('password');

    const history = useHistory();

    const user = localStorage.getItem('_User');
    user && history.push('/');

    function handleLogin(e) {
        e.preventDefault();
        alert("Xin lỗi, chức năng này chưa hoàn thành! Vui lòng đăng nhập bằng tài khoản google");
    }

    function handleLoginWithGoogle() {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                var userRes = result.user;
                const user = {
                    ID: userRes.uid,
                    name: userRes.displayName,
                    email: userRes.email,
                    photoUrl: userRes.photoURL
                }
                localStorage.setItem('_User', JSON.stringify(user));
                localStorage.setItem('_TokenUser', token);
                AddDataToCollection(user, `user/${user.ID}`);
                history.go('/');
            }).catch((error) => {
                console.log(error);
            });
    }

    function handleTooglePassword() {
        if (typePassword === 'text')
            setTypePassword('password')
        else
            setTypePassword('text')
    }
    return (
        <div className={Styles.login}>
            <h1 className="text-center mb-4 mt-3">Website luyện thi vào lớp 10</h1>
            <h6 className="text-center mb-5">Đăng nhập để tiếp tục: </h6>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4 m-auto">
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp"
                            placeholder="Email" />
                    </div>
                    <div className="form-group input-group">
                        <input type={typePassword} name="password" className="form-control" id="password"
                            placeholder="Mật khẩu" data-toogle="password" />
                        <div className="input-group-append">
                            <button type="button" className="input-group-text" onClick={handleTooglePassword}>
                                <i className={typePassword !== "password" ? "bi bi-eye" : "bi bi-eye-slash"}></i></button>
                        </div>

                    </div>
                    <div className="justify-content-center">
                        <button type="submit" className={"btn form-control " + Styles.buttonlogin}>
                            Đăng nhập
                        </button>
                    </div>
                </form>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4 m-auto">
                <h6 className="label text-center mt-2">hoặc</h6>
                <button
                    type="button"
                    className="btn btn-default border form-control my-2"
                    onClick={handleLoginWithGoogle}
                >
                    <i className="bi bi-google mr-1"></i>
                Đăng nhập với Google
                </button>
            </div>
        </div>
    );
}

export default Login;
