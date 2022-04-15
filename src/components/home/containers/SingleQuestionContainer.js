import { useDispatch, useSelector } from 'react-redux';
import { getAllQuestions, getAllUsers } from '../../shared/logic/actions';
import { SingleQuestion } from '../components/SingleQuestion';
import { saveQuestionAnswer } from '../logic/actions';

export const SingleQuestionContainer = props => {
    const { savingQuestionAnswer, allUsers, allQuestions, loadingAllUsers, loadingAllQuestions } = useSelector(state => {
        return {
            savingQuestionAnswer: state.home.get('savingQuestionAnswer'),
            allQuestions: state.shared.get('allQuestions'),
            allUsers: state.shared.get('allUsers'),
            loadingAllUsers: state.shared.get('loadingAllUsers'),
            loadingAllQuestions: state.shared.get('loadingAllQuestions')
    }});

    const dispatch = useDispatch();

    return <SingleQuestion
        {...props}
        getAllUsers={() => dispatch(getAllUsers())}
        getAllQuestions={() => dispatch(getAllQuestions())}
        allUsers={allUsers}
        allQuestions={allQuestions}
        loadingAllUsers={loadingAllUsers}
        loadingAllQuestions={loadingAllQuestions}
        saveQuestionAnswer={(userId, questionId, answer) => dispatch(saveQuestionAnswer(userId, questionId, answer))}
        savingQuestionAnswer={savingQuestionAnswer}
    />
}