import React, { useEffect, useCallback, useContext, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { AgentContext } from '../components/AgentContext';
import { useDispatch, useSelector } from 'react-redux';
import { Container, InnerContainer, SubHeading, Colors, Line, CardContainer, CardView, CardTitle, ListsView, RowedView, RefreshView } from '../components/styles';
import { getLicenses } from '../API/licenseRequests';
import { expiredLicenses } from '../redux/selectors';
import LicenseList from '../components/LicenseList';
import * as Icon from 'react-native-feather';
import { StatusBar } from 'expo-status-bar';
const { green } = Colors;

const Home = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const { agentData, setAgentData } = useContext(AgentContext);
    console.log(agentData);
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
            <StatusBar style="dark" />
            <InnerContainer>
                <CardContainer>
                    <Line />
                    <CardView onPress={() => navigation.navigate('DueLicenses')}>
                        <CardTitle>Cautions</CardTitle>
                    </CardView>
                    <CardView onPress={() => navigation.navigate('Scanner')}>
                        <CardTitle>Scanner</CardTitle>
                    </CardView>
                    <CardView onPress={() => navigation.navigate('Account')}>
                        <CardTitle>Account</CardTitle>
                    </CardView>
                    <Line />
                </CardContainer>
                <ListsView>
                    <RowedView>
                        <SubHeading color={green} onPress={handleRefresh}>Expired Licenses</SubHeading>
                        <RefreshView>
                            <Icon.RefreshCw size={30} color={green} />
                        </RefreshView>
                    </RowedView>
                    {loading ? (
                        <ActivityIndicator size="large" color={green} />
                    ) : (
                        <>
                            {expired.length > 0 && expired.map((license, i) => (
                                <LicenseList
                                    key={i}
                                    businessName={license.business_name}
                                    _id={license._id}
                                    expiryDate={license.expiry_date}
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