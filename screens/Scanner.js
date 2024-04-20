import React, { useState, useEffect, useContext } from "react";
import { ActivityIndicator } from "react-native";
import { Camera } from "expo-camera";
import { useCameraPermissions } from "expo-camera/next";
import { ButtonText, CardView, Container, InnerContainer, Line, ScanView, Colors } from "../components/styles";
import { AgentContext } from "../components/AgentContext";
import { validateQrScan } from "../API/licenseRequests";

const { green } = Colors;

const Scanner = ({ navigation }) => {
    const { agentData, setAgentData } = useContext(AgentContext);
    const [permission, requestPermission] = useCameraPermissions();


    const [loading, setLoading] = useState(false);
    const [scanned, setScanned] = useState(false);

    const handleQRCodeScanned = ({ type, data }) => {
        setScanned(true);
        const qrID = JSON.parse(data).qrID;
        setLoading(true);
        validateQrScan(agentData, qrID, setLoading, navigation, setAgentData);
    }

    useEffect(() => {
        requestPermission();
    }, []);

    return (
        <Container>
            <InnerContainer>
                {permission === null || !permission.granted ? (
                    <CardView onPress={requestPermission}>
                        <ButtonText>Request Camera Permission</ButtonText>
                    </CardView>
                ) : (
                    <Camera
                        onBarCodeScanned={scanned ? undefined : handleQRCodeScanned}
                        barcodeScannerSettings={{
                            barCodeTypes: ["qr"],
                        }}
                    >
                        {scanned && (
                            <CardView onPress={() => setScanned(false)}>
                                <ButtonText>Scan Again</ButtonText>
                            </CardView>
                        )}
                        {loading && (
                            <ActivityIndicator size="large" color={green} />
                        )}
                    </Camera>
                )}
            </InnerContainer>
        </Container>
    );
};

export default Scanner;
