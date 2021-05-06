import { useDispatch } from "react-redux";
import { addExam } from "../../actions/exam";
import { useHistory } from "react-router";
const ShowList = ({ list, onclickCheck }) => {

    const dispatch = useDispatch();
    let history = useHistory();
    const Styles = {
        checkbox: {
            width: '17px',
            height: '17px',
            position: 'none'
        },
        detailBtn: {
            float: 'right',
            justifyContent: 'none',
            padding: '3px',
        },
        header: {
            backgroundColor: '#f45d48',
        },
        upBtn: {
            float: 'right',
            justifyContent: 'none',
            padding: '3px',
            backgroundColor: '#f45d48'
        }
    }
    function hanldeShowDetail(e) {
        let newExam;
        list.map((value) => {
            if (value.id === e.target.id)
                newExam = value.data;
        })
        //const newExam =;
        const action = addExam(newExam);
        console.log(newExam);
        dispatch(action);
        history.push('/xem-truoc-de');
    }
    return (
        <div>
            <div className="card-header" style={Styles.header}>
                <h5>Các đề thi đang chờ duyệt</h5>
            </div>
            <ul className="list-group">
                {list.map((value) => {
                    return (
                        <li className="list-group-item align-items-center " key={value.id}>
                            <input type="checkbox" style={Styles.checkbox} name="exampleRadios"
                                id={value.id}
                                checked={value.checked}
                                onChange={onclickCheck}
                            />
                            <label className="form-check-label ml-2" htmlFor={value.id}>{value.data.titleExam}</label>
                            <button className='btn-one mx-1' style={Styles.detailBtn} id={value.id} onClick={hanldeShowDetail}>
                                <i className="bi bi-binoculars"></i> Chi tiết
                                </button>
                        </li>)
                })}

            </ul>
        </div>
    )
}

export default ShowList

