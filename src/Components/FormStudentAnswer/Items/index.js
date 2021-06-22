const Item = ({ number, point, question, isCorrect, correctAnswer, isMulipleChoiceAnswer, onClick }) => {
    const Styles = {
        detailBtn:  {
            float: 'right',
            justifyContent: 'none',
            padding: '3px',
        }
    }
    return (
        <tr className="align-items-center ">
            <td>
                <label>{number} ({point} đ)</label>
            </td>
            <td>
                <label dangerouslySetInnerHTML={{__html: question}}></label>
            </td>
            <td>
                <label>
                    {isCorrect ? point : 0}
                </label>
            </td>
            <td>
                <button className='btn-one' onClick={() => onClick(correctAnswer)}
                    style={Styles.detailBtn}>
                    <i className="bi bi-binoculars"></i> Xem lời giải
                </button>
            </td>
        </tr>
    )
}

export default Item
