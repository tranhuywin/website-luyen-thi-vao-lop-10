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
export const addExam = (exam) =>{
    return {
        type : 'ADD_EXAM',
        payload : exam,
    }
} 