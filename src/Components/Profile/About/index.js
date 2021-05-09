const About = () => {
    return (
        <div className="tab-content profile-tab" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="row">
                    <div className="col-md-5">
                        <label>Tên</label>
                    </div>
                    <div className="col-md-6">
                        <p>Trần Huy Win</p>
                    </div>
                    <div className="col-md-1">
                        <button><i className="bi bi-pencil"></i></button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <label>Tài khoản</label>
                    </div>
                    <div className="col-md-6">
                        <p>tranhuywin11b1@gmail.com</p>
                    </div>
                    <div className="col-md-1">
                        <button><i className="bi bi-pencil"></i></button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <label>Mật Khẩu</label>
                    </div>
                    <div className="col-md-6">
                        <p>tranhuywin11b1@gmail.com</p>
                    </div>
                    <div className="col-md-1">
                        <button><i className="bi bi-pencil"></i></button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <label>Số đề đã đăng</label>
                    </div>
                    <div className="col-md-6">
                        <p>10</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default About
