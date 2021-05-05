const ShowList = ({ list, onclickCheck }) => {
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
                            <button className='btn-one mx-1' style={Styles.detailBtn}>
                                <i className="bi bi-binoculars"></i> Chi tiết
                                </button>
                        </li>)
                })}

            </ul>
        </div>
    )
}

export default ShowList

