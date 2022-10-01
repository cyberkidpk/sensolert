import React, { useState } from 'react';
import { Box, Button, Text, FormField, Form, Spinner } from 'grommet';
import { authMessageAsync, authMessageStatus } from './authSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Navigate } from 'react-router-dom';

// interface UserInfo {
//     email: string;
//     password: string;
// }
// interface ILoginEmailValid {
//     email: string;
// }
// const validate = (values: ILoginEmailValid) => {
//     const errors: ILoginEmailValid = { email: '' };

//     if (!values.email) {
//         errors.email = 'Required';
//     } else if (
//         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
//     ) {
//         errors.email = 'Invalid email address';
//     }

//     //...

//     return errors;
// };
const LoginComponent = () => {
    const [valid, setValid] = useState(false);
    const authStatusParam = useAppSelector(authMessageStatus);
    const dispatch = useAppDispatch();
    console.log('Status paraam', authStatusParam);
    return (
        <Box width="medium">
            <Form
                validate="change"
                onReset={(event) => console.log(event)}
                onSubmit={({ value }) => {
                    dispatch(authMessageAsync({ ...value }));
                    console.log(authStatusParam);
                    console.log(value);
                }}
                onValidate={(validationResults) => {
                    console.log('validationResults = ', validationResults);
                    setValid(validationResults.valid);
                }}
            >
                <FormField
                    className="bottom-border"
                    label="Username"
                    name="username"
                    value="per@per.com"
                    required
                    placeholder="Username as Email"
                    validate={[
                        { regexp: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i },
                        (username) => {
                            if (username && username.length === 1)
                                return 'must be >1 character';
                            return undefined;
                        },
                    ]}
                />
                <FormField
                    className="bottom-border"
                    label="Password"
                    name="password"
                    value="ppppp"
                    required
                    type="password"
                    validate={[
                        { regexp: /^[a-z]/i },
                        (password) => {
                            if (password && password.length === 1)
                                return 'must be >1 character';
                            return undefined;
                        },
                    ]}
                />

                <Box style={{ display: 'flex', flexDirection: 'row' }}>
                    <Button
                        primary
                        type="submit"
                        disabled={!valid}
                        style={{ marginTop: '24px', width: '100%' }}
                        className="callToActGradi"
                        size="large"
                        label="Login to Sensoelrt"
                    />
                    {authStatusParam === 'fulfilled' ? (
                        <Navigate to="/dashboard" />
                    ) : authStatusParam === 'loading' ? (
                        <Spinner
                            border={[
                                {
                                    side: 'all',
                                    color: '#22ABDC',
                                    size: 'large',
                                    style: 'dotted',
                                },
                            ]}
                        />
                    ) : (
                        <Text />
                    )}
                </Box>

                <Box direction="row" style={{ padding: '10px' }}>
                    <Box className="w200 text-right pad-right-24"></Box>
                    <Box justify="center" direction="row" pad="small">
                        <Text>OR |</Text>
                        <Button plain color="primary" label="Register Now" />
                    </Box>
                </Box>
            </Form>
        </Box>
    );
};

export default LoginComponent;
