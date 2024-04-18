import React, { useEffect, useCallback, useContext, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { AgentContext } from '../components/AgentContext';
import { useDispatch, useSelector } from 'react-redux';
import { Container, InnerContainer, Colors, Line, CardContainer, CardView, CardTitle, ListsView } from '../components/styles';
import { getLicenses } from '../API/licenseRequests';
import { expiredLicenses } from '../redux/selectors';
import LicenseList from '../components/LicenseList';
import { StatusBar } from 'expo-status-bar';
const { jet, platinum, green } = Colors;

const Home = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const { agentData, setAgentData } = useContext(AgentContext);
    const dispatch = useDispatch();
    const expired = useSelector(expiredLicenses);

    const fetchLicenses = useCallback(() => {
        setLoading(true);
        getLicenses(agentData, setLoading, dispatch, setAgentData);
    }, [agentData, dispatch]);

    const handleRefresh = () => {
        fetchLicenses();
    }

    useEffect(() => {
        fetchLicenses();
    }, []);

    return (
        <Container>
            <StatusBar style='dark' />
            <InnerContainer>
                <CardContainer>
                    <Line />
                    <CardView onPress={() => navigation.navigate('DueLicenses')}>
                        <CardTitle>Cautions</CardTitle>
                    </CardView>
                    <CardView onPress={() => navigation.navigate('Scanner')}>
                        <CardTitle>Scan License</CardTitle>
                    </CardView>
                    <CardView onPress={() => navigation.navigate('Account')}>
                        <CardTitle>Account</CardTitle>
                    </CardView>
                    <CardView onPress={handleRefresh}>
                        <CardTitle>Refresh</CardTitle>
                    </CardView>
                    <Line />
                </CardContainer>
                <ListsView>
                    <subHeading color={green} >Expired Licenses</subHeading>
                    {loading ? (
                        <ActivityIndicator size='large' color={platinum} />
                    ) : (
                        <>
                            {expired.length > 0 && expired.map((license, i) => (
                                <LicenseList
                                    key={i}
                                    businessName={license.business_name}
                                    businessNumber={license.business_id}
                                    _id={license._id}
                                    expiryDate={license.expiryDate}
                                    navigation={navigation}
                                />
                            ))}
                        </>
                    )}
                </ListsView>
            </InnerContainer>
        </Container>
    )
}

export default Home;