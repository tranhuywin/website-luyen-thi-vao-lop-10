import { useDispatch } from "react-redux";
import { addExam } from "../../actions/exam";
import { useHistory } from "react-router";
import LineLoading from '../../Components/LoadPage/LineLoading';

const ShowList = ({ list, onclickCheck }) => {

    const dispatch = useDispatch();
    let history = useHistory();
    const Styles = {
        checkbox: {
            width: '17px',
            height: '17px',
        },
        detailBtn: {
            float: 'right',
            justifyContent: 'none',
            padding: '3px',
        },
        header: {
            'background-image': 'linear-gradient(to right, #f45d48, #f66151, #f96659, #fa6a61, #fc6f69)'
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
        const action = addExam(newExam);
        console.log(newExam);
        dispatch(action);
        history.push('/xem-truoc-de');
    }
    return (
        <div>
        
        {list.length === 0 && <LineLoading></LineLoading>}
            <table className='table table-striped'>
                <thead>
                    <tr  style={Styles.header}>
                        <th scope="col"></th>
                        <th scope="col" >Tiêu đề của đề thi đang chờ duyệt</th>                        
                        <th scope="col"></th>
                    </tr>
                    
                </thead>
               
                <tbody >
                    {list.map((value) => {
                        return (
                            <tr className="align-items-center " key={value.id}>
                                <td>
                                    <input
                                        type="checkbox"
                                        style={Styles.checkbox}
                                        name="exampleRadios"
                                        id={value.id}
                                        checked={value.checked}
                                        onChange={onclickCheck}
                                    />
                                </td>
                                <td>
                                    <label
                                        htmlFor={value.id}>
                                        {value.data.titleExam}
                                    </label>
                                </td>
                                <td>
                                    <button className='btn-one'
                                        style={Styles.detailBtn}
                                        id={value.id}
                                        onClick={hanldeShowDetail}>
                                        <i className="bi bi-binoculars"></i> Chi tiết
                                </button>
                                </td>
                            </tr>
                            )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ShowList

