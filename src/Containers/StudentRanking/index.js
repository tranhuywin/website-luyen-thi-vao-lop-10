import { Link } from 'react-router-dom'
import Styles from './StudentRanking.module.css'
export default function StudentRanking() {
    return (
        <div className={Styles.table}>
            <table>
                <thead>
                    <tr>
                        <th>Môn thi</th>
                        <th>Tên trường</th>
                        <th>Điểm</th>
                        <th>Ngày thi</th>
                        <th>Bài thi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <span>Toán</span>
                        </td>
                        <td>THPT chuyên Nguyễn Huệ</td>
                        <td>8/10</td>
                        <td>
                            <div className={Styles.tag}>1 ngày trước</div>
                        </td>
                        <td>
                            <div className={Styles.link}>
                                <Link to='/'><i className="bi bi-share"></i></Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>Văn</span>
                        </td>
                        <td>THPT chuyên Phan Đình Phùng</td>
                        <td>9/10</td>
                        <td>
                            <div className={Styles.tag}>1 ngày trước</div>
                        </td>
                        <td>
                            <div className={Styles.link}>
                                <Link to='/'><i className="bi bi-share"></i></Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>Toán</span>
                        </td>
                        <td>THPT Chu Văn An</td>
                        <td>10/10</td>
                        <td>
                            <div className={Styles.tag}>2 ngày trước</div>
                        </td>
                        <td>
                            <div className={Styles.link}>
                                <Link to='/'><i className="bi bi-share"></i></Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>Anh văn</span>
                        </td>
                        <td>THPT chuyên Phan Đình Phùng</td>
                        <td>9.5/10</td>
                        <td>
                            <div className={Styles.tag}>2 ngày trước</div>
                        </td>
                        <td>
                            <div className={Styles.link}>
                                <Link to='/'><i className="bi bi-share"></i></Link>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
