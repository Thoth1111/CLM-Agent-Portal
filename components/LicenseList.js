import React from 'react';
import { ListContainer, SectionView, MidSectionView, SectionText, SectionDate, Colors } from './styles';
import { formatDate } from '../helpers/dateFormatter';

const { jet, red, green } = Colors;

const LicenseList = ({ _id, businessName, expiryDate, navigation  }) => {

    const handleLicenseSelection = (_id) => {
        navigation.navigate('SelectedLicense', { _id: _id });
    }

    return (
        <ListContainer onPress={() => handleLicenseSelection(_id)}>
                <SectionView>
                    <SectionDate color={red}>{formatDate(expiryDate)}</SectionDate>
                </SectionView>
                <MidSectionView>
                    <SectionText color={green}>{businessName.toUpperCase()}</SectionText>
                </MidSectionView>
        </ListContainer>
    )
}

export default LicenseList;