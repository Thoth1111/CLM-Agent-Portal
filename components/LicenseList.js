import React from 'react';
import { ListContainer, SectionView, MidSectionView, SectionText, SectionDate, Colors } from './styles';
import { formatDate } from '../helpers/dateFormatter';

const { jet, red, green } = Colors;

const LicenseList = ({ _id, businessName, businessNumber, expiryDate, navigation  }) => {

    const handleLicenseSelection = (_id) => {
        navigation.navigate('SelectLicense', { _id: _id });
    }

    return (
        <ListContainer onPress={() => handleLicenseSelection(_id)}>
                <SectionView>
                    <SectionDate color={red}>{formatDate(expiryDate)}</SectionDate>
                </SectionView>
                <MidSectionView>
                    <SectionText color={green}>{businessName.toUpperCase()}</SectionText>
                </MidSectionView>
                <SectionView>
                    <SectionText color={jet}>{businessNumber}</SectionText>
                </SectionView>
        </ListContainer>
    )
}

export default LicenseList;