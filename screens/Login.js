import React, { useContext, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik';
import { Container, InnerContainer, PageTitle, Colors, SubHeading, StyledButton, ButtonText, Line, ExtraView, TextLink, TextLinkContent, FormArea } from '../components/styles';
import KeyboardAverseWrapper from '../components/KeyboardAverseWrapper';
import { AgentContext } from '../components/AgentContext';
import TextIconInput from '../components/TextIconInput';

import { loginAgent } from '../API/agentRequests.js';
import { validPassword, validAgentId } from '../helpers/validations.js';

const { platinum, green } = Colors;

const Login = ({ navigation }) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [loading, setLoading] = useState(false);

    const { setAgentData } = useContext(AgentContext);

    const sessionPersist = (incomingAgentData) => {
        AsyncStorage.setItem('agentSessionData', JSON.stringify(incomingAgentData))
            .then(() => {
                setAgentData(incomingAgentData);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const handleLogin = (values) => {
        if (validAgentId(values.agentId) && validPassword(values.password)) {
            setLoading(true);
            loginAgent(values, setLoading, sessionPersist)
        }
        return;
    }

    return (
        <KeyboardAverseWrapper>
            <Container>
                <StatusBar style='dark' />
                <InnerContainer>
                    <PageTitle>AGENT PORTAL</PageTitle>
                    <SubHeading>Sign In</SubHeading>
                    <Formik
                        initialValues={{ agentId: '', password: '' }}
                        onSubmit={(values) => handleLogin(values)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <FormArea style={{ marginTop: '15%' }}>
                                <TextIconInput
                                    label='Agent ID'
                                    iconName='User'
                                    onChangeText={handleChange('agentId')}
                                    onBlur={handleBlur('agentId')}
                                    value={values.agentId}
                                />
                                <TextIconInput
                                    label='Password'
                                    iconName='Lock'
                                    isPassword={true}
                                    secureTextEntry={hidePassword}
                                    hidePassword={hidePassword}
                                    setHidePassword={setHidePassword}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                />
                                {loading ? (
                                    <StyledButton disabled={true}>
                                        <ActivityIndicator size='large' color={green} />
                                    </StyledButton>
                                ) : (
                                    <StyledButton onPress={handleSubmit}>
                                        <ButtonText>LOGIN</ButtonText>
                                    </StyledButton>
                                )}
                            </FormArea>
                        )}
                    </Formik>
                    <Line style={{ marginTop: '42%' }} />
                    <ExtraView style={{ marginTop: '5%', justifyContent: 'start' }}>
                        <TextLink>
                            <TextLinkContent>Forgot Password?</TextLinkContent>
                        </TextLink>
                    </ExtraView>
                </InnerContainer>
            </Container>
        </KeyboardAverseWrapper>
    )
}

export default Login;
