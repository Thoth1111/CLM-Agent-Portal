import styled from 'styled-components';
import Constants from 'expo-constants';

const statusBarHeight = Constants.statusBarHeight;

export const Colors = {
    jet: "#353535ff",
    amber: "#FFA07A",
    white: "#ffffffff",
    platinum: "#d9d9d9ff",
    red: "#FF0000",
    green: "#013D1E",
    yellow: "#FFCA0A",
    lime: "#32CD32"
};

const { jet, white, platinum, red, green, yellow, lime } = Colors;

export const Container = styled.View`
    flex: 1;
    padding: 20px;
    padding-top: ${statusBarHeight}px;
    background-color: ${white};
`
export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    background-color: ${white};
`
export const InnerScrollView = styled.ScrollView`
    flex: 1;
    width: 100%;
    background-color: ${white};
`
export const FittedContainer = styled.View`
    width: 100%;
    height: fit-content;
    justify-content: center;
`
export const AppLogo = styled.Image`
    width: 250px;
    height: 250px;
    border-radius: 125px;
    margin-top: 15%;
`
export const PageTitle = styled.Text`
    font-size: 24px;
    text-align: center;
    font-weight: bold;
    margin-top: 50px;
    color: ${green};
    padding: 10px;
`
export const SubHeading = styled.Text`
    font-size: 18px;
    margin-vertical: 10px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${green};
`
export const FormArea = styled.View`
    width: 90%;
`
export const AuthInputLabel = styled.Text`
    font-size: 13px;
    color: ${green};
    text-align: left;
    margin-top: 10px;
`
export const AuthTextInput = styled.TextInput`
    background-color: ${white};
    padding-vertical: 15px;
    padding-horizontal: 55px;
    border: ${jet};
    border-radius: 5px;
    font-size: 16px;
    color: ${jet};
    height: 50px;
    margin-vertical: 6px;
    margin-bottom: 10px;
`
export const LeftIcon = styled.View`
    position: absolute;
    left: 15px;
    top: 48px;
    z-index: 1;
`
export const RightIcon = styled.TouchableOpacity`
    position: absolute;
    right: 15px;
    top: 48px;
    z-index: 1;
`
export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${yellow};
    border: 1px solid ${green};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 50px;
    shadow-color: #000;
    shadow-offset: {
        width: 0;
        height: 2;
    };
    shadow-opacity: 0.25;
    shadow-radius: 4px;
    elevation: 5;
`
export const ButtonText = styled.Text`
    color: ${green};
    font-size: 16px;
    font-weight: bold;
`
export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${green};
    margin-vertical: 10px;
`
export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`
export const ExtraText = styled.Text`
    justify-content: center;
    align-items: center;
    color: ${jet};
    font-size: 15px;
`
export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    msrgin-left: 5px;
`
export const TextLinkContent = styled.Text`
    color: ${green};
    font-size: 15px;
`
export const CardContainer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-vertical: 10px;
    align-items: center;
    height" fit-content;
`
export const CardView = styled.TouchableOpacity`
    background-color: ${yellow};
    border: ${green};
    align-items: center;
    justify-content: center;
    height: 50px;
    width: fit-content;
    margin: 5px;
    padding-horizontal: 10px;
    border-radius: 5px;
    shadow-color: #000;
    shadow-offset: {
        width: 0;
        height: 2;
    };
    shadow-opacity: 0.25;
    shadow-radius: 4px;
    elevation: 5;
`
export const CardTitle = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${green};
`
export const ListsView = styled.View`
    flex: 1;
    width: 110%;
    padding: 0px;
    justify-content: start;
    align-items: center;
    border-radius: 15px;
    overflow: hidden;
    background-color: ${platinum};
`
export const ListContainer = styled.TouchableOpacity`
    flex-direction: row;
    background-color: ${white};
    width: 98%;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    padding: 0px;
    margin: 2px;
`
export const SectionView = styled.View`
    width: 15%;
    height: 100%;
    justify-content: center;
    align-items: center;
`
export const MidSectionView = styled.View`
    width: 70%;
    height: fit-content;
    justify-content: center;
    align-items: flex-start;
`
export const SectionText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: ${jet};    
`
export const SectionDate = styled.Text`
    font-size: 14px;
    color: ${props => props.color ? props.color : jet};
`
export const SidedTable = styled.View`
    width: 100%;
    margin-bottom: 25px;
`
export const SideTableRow = styled.View`
    flex-direction: row;
    margin: 0.5px;
    border: 1px solid ${jet};
    padding: 2px;
`
export const SideTableCell = styled.View`
    font-weight: bold;
    width: '50%';
    border-right-width: 1px;
    border-right-color: ${props => props.color ? props.color : jet};
    padding-right: 5px;
    margin: 0;
    text-align: center;
`
export const SideTableText = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: ${green};
    padding: 5px;
`
export const StatusText = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: ${props => props.color ? props.color : platinum};
    padding: 10px;
`
export const LicenseStateContainer = styled.View`
    flex-direction: row;
    width: 100%;
    height: fit-content;
    justify-content: space-between;
    align-items: start;
`
export const DatesTable = styled.View`
    width: 60%;
    height: fit-content;
    margin-vertical: 10px;
    border-top-width: 1px;
    border-top-color: ${jet};
    border-right-width: 1px;
    border-right-color: ${jet};
    border-left-width: 1px;
    border-left-color: ${jet};
`
export const DatesRow = styled.View`
    flex-direction: row;
    margin: 0;
    border-bottom-width: 1px;
    border-bottom-color: ${jet};
`
export const DatesCell = styled.View`
    font-weight: bold;
    width: ${props => props.width ? props.width : '50%'};
    border-right-width: 1px;
    border-right-color: ${props => props.color ? props.color : jet};
    padding: 5px;
    text-align: center;
`
export const DatesText = styled.Text`
    font-size: 11px;
    font-weight: bold;
    color: ${props => props.color ? props.color : green};
`
export const Banner = styled.View`
    flex-direction: row;
    width: 100%;
    height: fit-content;
    gap: 10px;
    justify-content: center;
    align-items: start;
`
export const BannerLogo = styled.Image`
    width: 75px;
    height: 75px;
    margin: 2px;
    border-radius: 35px;
`
export const BannerText = styled.View`
    width: 60%;
    justify-content: center;
    align-items: center;
`
export const BannerTitle = styled.Text`
    font-size: 21px;
    font-weight: bold;
    color: ${green};
`
export const BannerSubTitle = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: ${green};
`
export const ScanView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`