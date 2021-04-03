import React, { useState } from 'react';


function Login() {
    const [typePassword, setTypePassword] = useState('password');
    function AuthLogin() {
        //TODO
    }
    function TooglePassword() {
        if (typePassword === 'text')
            setTypePassword('password')
        else
            setTypePassword('text')
    }
    return (
        <div>
            <h1 className="text-center mb-4 mt-3">Website luyện thi vào lớp 10</h1>
            <h6 className="text-center mb-5">Đăng nhập để tiếp tục: </h6>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4 m-auto">
                <form>
                    <div className="form-group">
                        <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp"
                            placeholder="Email" />

                    </div>
                    <div className="form-group input-group">
                        <input type={typePassword} name="password" className="form-control" id="password"
                            placeholder="Mật khẩu" data-toogle="password" />
                        <div className="input-group-append">
                            <button type="button" className="input-group-text" onClick={TooglePassword}>
                                <i className={typePassword !== "password" ? "bi bi-eye" : "bi bi-eye-slash"}></i></button>
                        </div>

                    </div>
                    <div className="justify-content-center">
                        <button type="submit" className="btn btn-dark form-control">
                            Đăng nhập
                        </button>
                    </div>
                </form>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4 m-auto">
                <h6 className="label text-center mt-2">or</h6>
                <button
                    type="button"
                    className="btn btn-default border form-control mt-2"
                    onClick={AuthLogin}
                >
                    <i className="bi bi-google mr-1"></i>
                Đăng nhập với Google
                </button>
            </div>
        </div>
    );
}

export default Login;
