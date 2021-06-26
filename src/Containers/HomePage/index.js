import { Link } from 'react-router-dom';
import Styles from './HomePage.module.css';

export default function HomePage() {
    const user = localStorage.getItem('_User');
    return (
        <div>
            <div className={Styles.header}>
                <div className={Styles.navMenu}>
                    <div className={Styles.logo}>Luyện thi lớp 10</div>
                    <div className={Styles.menu}>
                        <ul>
                            <li><Link to="/" className="active">Trang chủ</Link></li>
                            <li><Link to="/">Về chúng tôi</Link></li>
                            <li><Link to="/luyen-thi">luyện thi</Link></li>
                            <li><Link to="/bang-diem">Bảng điểm</Link></li>
                           {!user ? <li><Link to="/dang-nhap">Đăng nhập</Link></li> : <li><Link to='/'>Đăng xuất</Link></li> }
                        </ul>
                    </div>
                </div>
                <div className={Styles.banner}>
                    <h1>Học thông minh, bứt phá điểm 10</h1>
                    <p>Ứng dụng dành cho học sinh thi vào lớp 10</p>
                    <Link to='/luyen-thi'>Luyện thi</Link>
                </div>
            </div>
            <div className={Styles.container}>
                <div className={Styles.text}>
                    <h1>Đề thi từ cả nước</h1>
                    <p>Hàng ngàn bài kiểm tra được xây dựng theo ma trận kiến thức và độ khó, bám sát chương trình</p>
                    <p>Đến với trang web bạn sẽ được tiếp cận kho TÀI LIỆU khổng lồ và ngày càng đa dạng, cung cấp kiến thức cơ bản và chuyên sâu hoàn toàn MIỄN PHÍ trên nhiều lĩnh vực: Học Tập, Văn bản Pháp luật, Giải bài tập sách giáo khoa, giải bài tập sách bài tập, bài tập trắc nghiệm trực tuyến,..</p>
                </div>
                <div className={Styles.main}>
                    <div className={Styles.single}>
                        <i className="fas fa-cloud-download-alt" />
                        <p>Praesent pellentesque facilisis elit. Class aptent taciti sociosqu ad torquent per conubia nostra.</p>
                        <Link to="/">More info</Link>
                    </div>
                    <div className={Styles.single}>
                        <i className="fas fa-cogs" />
                        <p>Etiam neque. Vivamus consequat lorem at nisl. Nullam wisi a sem semper eleifend. Donec mattis.</p>
                        <Link to="/">More info</Link>
                    </div>
                    <div className={Styles.single}>
                        <i className="fas fa-wrench" />
                        <p>Aenean lectus lorem, imperdiet at, ultrices eget, ornare et, wisi. Pellentesque adipiscing purus.</p>
                        <Link to="/">More info</Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
