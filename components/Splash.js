import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Container, InnerContainer, AppLogo, PageTitle } from './styles';

const Splash = () => {
    return (
        <Container>
            <StatusBar style='dark' />
            <InnerContainer>
                <AppLogo source={require('../assets/images/cityLogo.jpg')} />
                <PageTitle>LICENSE AGENT PORTAL</PageTitle>
            </InnerContainer>
        </Container>
    )
}

export default Splash;