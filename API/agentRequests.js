import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { clearLicenses } from '../redux/licenseSlice';

const loginAgent = (values, setLoading, sessionPersist) => {
    axios.post('https://clm-server.onrender.com/agent/login', values)
        .then((res) => {
            sessionPersist({agent_id: res.data.agent_id, refreshToken: res.data.refreshToken, jurisdiction: res.data.jurisdiction});
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            setLoading(false);
        });
}

clearAgentData = async (dispatch, setAgentData) => {
    await AsyncStorage.removeItem('agentSessionData')
        .then(() => {
            dispatch(clearLicenses());
            setAgentData(null);
        })
        .catch((err) => {
            console.log(err);
        })
}

const logoutAgent = async (agent_id, setLoading, dispatch, setAgentData) => {
    axios.delete(`https://clm-server.onrender.com/agent/logout/${ agent_id }`)
        .then(() => {
            clearAgentData(dispatch, setAgentData);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            setLoading(false);
        });
}

export { loginAgent, logoutAgent };