import * as Yup from "yup";

export const addQuestionFormValidation = Yup.object({
    optionOneText: Yup.string().nullable().required('Required'),
    optionTwoText: Yup.string().nullable().required('Required')
})