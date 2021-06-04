import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Item from "../../Components/List/Item";
import FilterExam from '../../Components/Post-the-exam/FilterExam';
import { GetAllDataInCollection } from '../../firebase';
import LineLoading from '../../Components/LoadPage/LineLoading';

export default function SelectExam() {
    const [listExams, setListExams] = useState([]);
    let history = useHistory();
    
    function handleClickItem(idExam) {
        history.push(`/luyen-thi/lam-bai-thi/${idExam}`);
    }

    useEffect(() => {
        let exams = [];
        async function fetchdata() {
            const snapshot = await GetAllDataInCollection('/exams');
            snapshot.forEach((doc) => {
                exams = [...exams, { id: doc.id, data: doc.data() },];
            });
            setListExams(exams);
        }
        fetchdata();
    }, [])

    return (
        <div>
            <FilterExam></FilterExam>
            {listExams.length === 0 && <LineLoading></LineLoading>}
            <div>
                {listExams.map(function (Exam) {
                    return <Item key={Exam.id} name={Exam.data.titleExam}
                        handleClickBtn={() => handleClickItem(Exam.id)}
                        linkItem={`/luyen-thi/lam-bai-thi/${Exam.id}`}
                        textBtn='Bắt đầu thi'
                    ></Item>;
                })}
            </div>
            <nav aria-label="Page navigation example" className='mt-4'>
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <span className="page-link">1</span>
                    </li>
                    <li className="page-item">
                        <span className="page-link">2</span>
                    </li>
                    {listExams.length > 5 && (
                        <li className="page-item">
                            <span className="page-link">3</span>
                        </li>
                    )}

                </ul>
            </nav>
        </div>
    );
}
