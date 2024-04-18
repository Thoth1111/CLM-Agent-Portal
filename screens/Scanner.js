import React, { useState, useEffect, useContext } from "react";
import { ActivityIndicator } from "react-native";
import { CameraView, Camera } from "expo-camera/next";
import { ButtonText, CardView, Container, InnerContainer, Line, ScanView, Colors } from "../components/styles";
import { AgentContext } from "../components/AgentContext";
import { validateQrScan } from "../API/licenseRequests";

const { green } = Colors;

const Scanner = ({ navigation }) => {
    const { agentData, setAgentData } = useContext(AgentContext);
    const [hasPermission, setHasPermission] = useState(null);
    const [loading, setLoading] = useState(false);
    const [scanned, setScanned] = useState(false);

    const handleQRCodeScanned = ({ type, data }) => {
        setScanned(true);
        const qrID = JSON.parse(data).qrID;
        setLoading(true);
        validateQrScan(agentData, qrID, setLoading, navigation, setAgentData);
    }

    useEffect(() => {
        const getCameraPermissions = async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        };
        getCameraPermissions();
    }, []);


    if (hasPermission === null) {
        return <Text>Requesting camera permission...</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <Container>
            <InnerContainer>
                <ScanView>
                    <CameraView
                        onBarCodeScanned={scanned ? undefined : handleQRCodeScanned}
                        barcodeScannerSettings={{
                            barCodeTypes: ["qr"],
                        }}
                    />
                    {scanned && (
                        <CardView onPress={() => setScanned(false)}>
                            <ButtonText>Scan Again</ButtonText>
                        </CardView>
                    )}
                    <Line />
                    {loading && (
                        <ActivityIndicator size="large" color={green} />
                    )}
                </ScanView>
            </InnerContainer>
        </Container>
    );
};

export default Scanner;
