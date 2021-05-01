export const addNewQuestion = (exam) =>{
    return {
        type : 'ADD_QUESTION',
        payload : exam,
    }
} 
export const addDetailOfExam = (detail) =>{
    return {
        type : 'ADD_DETAIL_EXAM',
        payload : detail,
    }
} 