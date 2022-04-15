import React from 'react';
import { Formik } from 'formik';
import { Button, TextField } from '@mui/material';
import { addQuestionFormValidation } from '../formValidations';
import { useHistory } from 'react-router-dom';

export const AddQuestionForm = props => {
    const history = useHistory();

    return (
        <Formik
            initialValues={{optionOneText: '', optionTwoText: ''}}
            validationSchema={addQuestionFormValidation}
            enableReinitialize
            onSubmit={(values) => {
                const {optionOneText, optionTwoText} = values;
                const question = {
                    author: props.userId,
                    optionOneText,
                    optionTwoText
                };
                props.saveQuestion(question, () => history.push('/'))
            }}
        >
            {({
                  values, errors, touched, setFieldValue, handleSubmit,
              }) => (
                <form onSubmit={handleSubmit} noValidate>
                    <div style={{marginTop: '20px'}}>
                        <TextField
                            name={'optionOneText'}
                            id={'optionOneText'}
                            placeholder={"Enter option One"}
                            label="Option One"
                            fullWidth
                            helperText={touched.optionOneText && errors.optionOneText}
                            onChange={event => setFieldValue('optionOneText', event.target.value)}
                            value={values.optionOneText}
                            error={touched.optionOneText && !!errors.optionOneText}
                        />
                    </div>
                    <div style={{marginTop: '20px'}}>
                        <TextField
                            name={'optionTwoText'}
                            placeholder={"Enter option Two"}
                            id={'optionTwoText'}
                            fullWidth
                            helperText={touched.optionTwoText && errors.optionTwoText}
                            onChange={event => setFieldValue('optionTwoText', event.target.value)}
                            value={values.optionTwoText}
                            label="Option Two"
                            error={touched.optionTwoText && !!errors.optionTwoText}
                        />
                    </div>
                    <div style={{marginTop: '20px', textAlign: 'center'}}>
                        <Button variant={'contained'} type='submit' disabled={props.savingQuestion}>
                            Submit
                        </Button>
                    </div>
                </form>
            )}
        </Formik>
    );
}