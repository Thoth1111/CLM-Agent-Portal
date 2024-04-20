import React, { useState, useEffect, useContext } from "react";
import { ActivityIndicator } from "react-native";
import { Camera } from "expo-camera";
import { useCameraPermissions } from "expo-camera/next";
import { ButtonText, CardView, Container, InnerContainer, Line, ActionText,  Colors, SubHeading } from "../components/styles";
import { AgentContext } from "../components/AgentContext";
import { validateQrScan } from "../API/licenseRequests";

const { green } = Colors;

const Scanner = ({ navigation }) => {
    const { agentData, setAgentData } = useContext(AgentContext);
    const [permission, requestPermission] = useCameraPermissions();


    const [loading, setLoading] = useState(false);
    const [scanned, setScanned] = useState(false);

    const handleQRCodeScanned = ({ data }) => {
        setScanned(true);
        const qrID = JSON.parse(data).qrID;
        setLoading(true);
        validateQrScan(agentData, qrID, setLoading, navigation, setAgentData);
    }

    useEffect(() => {
        requestPermission();
        setScanned(false);
    }, []);

    return (
        <Container>
            <InnerContainer>
                <SubHeading>Scan QR Code</SubHeading>
                <Line />
                {permission === null || !permission.granted ? (
                    <CardView onPress={requestPermission}>
                        <ButtonText>Request Camera Permission</ButtonText>
                    </CardView>
                ) : (
                    <>
                    <Camera
                        onBarCodeScanned={scanned ? undefined : handleQRCodeScanned}
                        barcodeScannerSettings={{
                            barCodeTypes: ["qr"],
                        }}
                        style={{ height: 300, width: 300, marginVertical: '10%', borderRadius: '5px'}}
                    />
                    {scanned && (
                        <CardView onPress={() => setScanned(false)}>
                            <ButtonText>Scan Again</ButtonText>
                        </CardView>
                    )}
                    {loading && (
                        <ActivityIndicator size="large" color={green} />
                    )}
                    <Line />
                    <ActionText>Scan a license qr code to authenticate</ActionText>
                    </>
                )}
            </InnerContainer>
        </Container>
    );
};

export default Scanner;
