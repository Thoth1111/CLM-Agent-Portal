import axios from 'axios';
import { logoutAgent } from './agentRequests';
import { saveLicenses } from '../redux/licenseSlice';

const getLicenses = async (agentData, setLoading, dispatch, setAgentData) => {
    await axios.get(`https://clm-server.onrender.com/agent/licenses/${agentData.jurisdiction}`,
        {
            headers: {
                Authorization: agentData.refreshToken
            }
        })
        .then((res) => {
            dispatch(saveLicenses(res.data.licenses))
        })
        .catch((err) => {
            if (err.response.status === 401 || err.response.status === 403) {
                logoutAgent(agentData.agent_id, setLoading, dispatch, setAgentData);
            }
            console.log(err);
        })
        .finally(() => {
            setLoading(false);
        })
}

const validateQrScan = async (agentData, qrID, setLoading, navigation, setAgentData) => {
    await axios.post('https://clm-server.onrender.com/agent/scan/',{qrID: qrID},
        {
            headers: {
                Authorization: agentData.refreshToken
            }
        })
        .then((res) => {
            const scannedResult = res.data.license;
            navigation.navigate('ScannedLicense', { license: scannedResult });            
        })
        .catch((err) => {
            if (err.response.status === 401 || err.response.status === 403) {
                logoutAgent(agentData.agent_id, setLoading, dispatch, setAgentData);
            }
            console.log(err);
        })
        .finally(() => {
            setLoading(false);
        });
}

export { getLicenses, validateQrScan };