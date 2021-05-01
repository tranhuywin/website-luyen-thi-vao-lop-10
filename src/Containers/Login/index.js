import React, { useState } from 'react';
import { useHistory } from 'react-router';
import firebase from '../../firebase'
function Login() {
    const [typePassword, setTypePassword] = useState('password');

    const history = useHistory();
    function handleLogin(e) {
        //console.log(e.target.password.value);
        e.preventDefault();
        //add, update data
        // const docRef = firebase.collection('exams').doc();
        // docRef.set(obj).then(() => {
        //         console.log("Document successfully updated!");
        //     })
        //     .catch((error) => {
        //         console.error("Error updating document: ", error);
        //     });

        //update
        // docRef.update(obj).then(() => {
        //     console.log("Document successfully updated!");
        // })
        // .catch((error) => {
        //     // The document probably doesn't exist.
        //     console.error("Error updating document: ", error);
        // });

        //Delete
        // firebase.collection("exams").doc("question 1").delete().then(() => {
        //     console.log("Document successfully deleted!");
        // }).catch((error) => {
        //     console.error("Error removing document: ", error);
        // });
        //Read data
        firebase.collection("users").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const user = {
                    username: e.target.email.value,
                    password: e.target.password.value
                }
                if (doc.data().username === user.username) {
                    if (doc.data().password === user.password) {
                        history.push('/');
                    }
                    else {
                        console.log('wrong password');
                    }

                }
                else {
                    console.log('user isnt avaliable');
                }

            });
        });
    }
    function handleTooglePassword() {
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
                        <button type="submit" className="btn btn-dark form-control">
                            Đăng nhập
                        </button>
                    </div>
                </form>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4 m-auto">
                <h6 className="label text-center mt-2">hoặc</h6>
                <button
                    type="button"
                    className="btn btn-default border form-control mt-2"
                    onClick={handleLogin}
                >
                    <i className="bi bi-google mr-1"></i>
                Đăng nhập với Google
                </button>
            </div>
        </div>
    );
}

export default Login;
