import ShowList from './../../../Components/Post-the-exam/ShowList';
import FilterExam from './../../../Components/Post-the-exam/FilterExam';

function PostToTheWebsite() {
    const Styles = {
        upBtn: {
            float: 'right',
            justifyContent: 'none',
            marginTop: '5%',
        },
        checkbox: {
            marginTop: '2px !important'
        }
    }
    return (
        <div>
            <FilterExam></FilterExam>
            <ShowList></ShowList>
            <div className='m-2'>
                <input type="checkbox" style={Styles.checkbox} name="exampleRadios" id='pickAll' />
                <label className="form-check-label ml-1" htmlFor='pickAll'><small>chọn tất cả</small></label>
            </div>

            <button className='btn-one' style={Styles.upBtn}><i className="bi bi-file-arrow-up"></i> Đăng đề</button>
            <button className='btn-two mx-2' disable style={Styles.upBtn}><i className="bi bi-trash"></i> Xóa đề</button>
        </div>
    )
}

export default PostToTheWebsite
