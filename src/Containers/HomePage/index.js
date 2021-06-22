import { Link } from 'react-router-dom';
import Styles from './HomePage.module.css';

export default function HomePage() {
    return (
        <div>
            <div className={Styles.header}>
                <div className={Styles.navMenu}>
                    <div className={Styles.logo}>Luyện thi lớp 10</div>
                    <div className={Styles.menu}>
                        <ul>
                            <li><a href="/" className="active">Trang chủ</a></li>
                            <li><a href="/">Về chúng tôi</a></li>
                            <li><a href="/">Đề thi</a></li>
                            <li><a href="/">Liên hệ với chúng tôi</a></li>
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
                </div>
                <div className={Styles.main}>
                    <div className={Styles.single}>
                        <i className="fas fa-cloud-download-alt" />
                        <p>Praesent pellentesque facilisis elit. Class aptent taciti sociosqu ad torquent per conubia nostra.</p>
                        <a href="index.html">More info</a>
                    </div>
                    <div className={Styles.single}>
                        <i className="fas fa-cogs" />
                        <p>Etiam neque. Vivamus consequat lorem at nisl. Nullam wisi a sem semper eleifend. Donec mattis.</p>
                        <a href="index.html">More info</a>
                    </div>
                    <div className={Styles.single}>
                        <i className="fas fa-wrench" />
                        <p>Aenean lectus lorem, imperdiet at, ultrices eget, ornare et, wisi. Pellentesque adipiscing purus.</p>
                        <a href="index.html">More info</a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
