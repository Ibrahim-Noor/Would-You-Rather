export const getAllVotersForAQuestion = question => {
    return [...question.optionOne.votes, ...question.optionTwo.votes]
}
