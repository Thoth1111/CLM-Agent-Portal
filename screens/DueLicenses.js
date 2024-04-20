import React from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import {
    Container, InnerContainer, SubHeading, ListsView, Colors
} from '../components/styles'
import LicenseList from '../components/LicenseList';
import { dueLicenses } from '../redux/selectors';

const { green } = Colors;

const DueLicenses = ({ navigation }) => {
    const onCaution = useSelector(dueLicenses);

    return (
        <Container >
            <InnerContainer>                    
                <SubHeading color={green} >Due within 30 days</SubHeading>
                <ListsView>
                    <View style={{ marginTop: '20px'}}>
                        {onCaution.length > 0 && onCaution.map((license, i) => (
                            <LicenseList
                                key={i}
                                businessName={license.business_name}
                                _id={license._id}
                                expiryDate={license.expiryDate}
                                navigation={navigation}
                            />
                        ))}
                    </View>
                </ListsView>
            </InnerContainer>
        </Container >
    )
}

export default DueLicenses