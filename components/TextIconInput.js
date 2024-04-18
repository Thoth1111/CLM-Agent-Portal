import React from 'react';
import { View } from 'react-native';
import * as Icon from 'react-native-feather';
import { AuthInputLabel, AuthTextInput, LeftIcon, RightIcon, Colors } from './styles';

const { green, jet } = Colors;

const TextIconInput = ({ label, iconName, isPassword, hidePassword, setHidePassword, ...props }) => {
    const DynamicIcon = Icon[iconName];
    const EyeOn = Icon.Eye;
    const EyeOff = Icon.EyeOff;
    return (
        <View>
            <LeftIcon>
                <DynamicIcon size={25} color={green} />
            </LeftIcon>
            <AuthInputLabel>{label}</AuthInputLabel>
            <AuthTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    {hidePassword ? <EyeOff size={30} color={green} /> : <EyeOn size={30} color={green} />}
                </RightIcon>
            )}
        </View>
    )
}

export default TextIconInput;