import React from 'react'
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
                <ListsView>
                    <SubHeading color={green} >Saved Licenses</SubHeading>
                    {onCaution.length > 0 && onCaution.map((license, i) => (
                        <LicenseList
                            key={i}
                            businessName={license.business_name}
                            businessNumber={license.business_id}
                            _id={license._id}
                            expiryDate={license.expiryDate}
                            navigation={navigation}
                        />
                    ))}
                </ListsView>
            </InnerContainer>
        </Container >
    )
}

export default DueLicenses