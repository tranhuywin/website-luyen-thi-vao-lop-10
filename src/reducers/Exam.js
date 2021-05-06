const initialState = {
    titleExam: null,
    place: null,
    timesOfExam: 90,
    timesProposed: 1,
    subjects: null,
    format: null,
    schoolYear: null,
    listQuestions:[],
    /*
    listQuestions: [{
        number: 1,
        point: 1.5,
        question: '11111Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa ?',
        urlImg: 'C:\Users\TranHuyWin\Downloads\background.png',
        urlVideo: null,
        isMulipleChoiceAnswer: true,
        multileChoieAnswers: [{ ID: 'A', content: 'Lorem ipsum dolor sit amet' }, { ID: 'B', content: 'Lorem ipsum dolor sit amet' }, { ID: 'C', content: 'Lorem ipsum dolor sit amet' },],
        answer: null,   //answers of student
        correctAnswer: {
            multileChoieAnswers: 'A', //1 === A
            explain: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.',
            urlParem: null
        }
    },
    {
        number: 2,
        point: 2.5,
        question: '222222Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa ?',
        urlImg: null,
        urlVideo: null,
        isMulipleChoiceAnswer: false,
        multileChoieAnswers: null,
        answer: null,   //answers of student
        correctAnswer: {
            multileChoieAnswers: null, //null ===
            explain: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.',
            urlParem: null
        }
    },
    {
        number: 3,
        point: 3.5,
        question: '33333Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa ?',
        urlImg: null,
        urlVideo: null,
        isMulipleChoiceAnswer: true,
        multileChoieAnswers: [{ ID: 'A', content: 'Lorem ipsum dolor sit amet' }, { ID: 'B', content: 'Lorem ipsum dolor sit amet' }, { ID: 'C', content: 'Lorem ipsum dolor sit amet' },],
        answer: null,   //answers of student
        correctAnswer: {
            multileChoieAnswers: 'A', //1 === A
            explain: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.',
            urlParem: null
        }
    },
    {
        number: 4,
        point: 1.5,
        question: '444444Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa ?',
        urlImg: null,
        urlVideo: null,
        isMulipleChoiceAnswer: true,
        multileChoieAnswers: [{ ID: 'A', content: 'Lorem ipsum dolor sit amet' }, { ID: 'B', content: 'Lorem ipsum dolor sit amet' }, { ID: 'C', content: 'Lorem ipsum dolor sit amet' },],
        answer: null,   //answers of student
        correctAnswer: {
            multileChoieAnswers: 'A', //1 === A
            explain: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.',
            urlParem: null
        }
    },
    ]
*/
}

const examReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_QUESTION': {
            const newList = [...state.listQuestions];
            newList.push(action.payload);
            return {
                ...state,
                listQuestions: newList,
            };
        }
        case 'ADD_DETAIL_EXAM': {
            const exam = {
                titleExam: action.payload?.titleExam,
                place: action.payload?.place,
                timesOfExam: action.payload?.timesOfExam,
                timesProposed: action.payload?.timesProposed,
                subjects: action.payload?.subjects,
                format: action.payload?.format,
                schoolYear: action.payload?.schoolYear,
                listQuestions: [],
            }
            return exam;
        }
        case 'ADD_EXAM': {
            return action.payload;
        }
        default:
            return state;
    }
};
export default examReducer;