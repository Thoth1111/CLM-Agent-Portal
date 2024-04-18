import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, Colors, InnerScrollView, SidedTable, SideTableRow, SideTableText, SideTableCell, LicenseStateContainer, StatusText } from '../components/styles';
import ValidityTable from '../components/ValidityTable';
import LicenseBanner from '../components/LicenseBanner';
import DetailsTable from '../components/DetailsTable';

const { lime, white, red } = Colors;

const SelectedLicense = ({ route }) => {
    const { _id } = route.params;
    const [isExpired, setIsExpired] = useState(false);
    const licenses = useSelector(state => state.licenses);
    const license = licenses.find(license => license._id === _id);

    const checkValidity = (expiry_date) => {
        const expiryDate = new Date(expiry_date);
        const today = new Date();
        const timeDiff = expiryDate - today;
        const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        if (daysDiff <= 0) {
            setIsExpired(true);
        } else {
            setIsExpired(false);
        }
    }

    useEffect(() => {
        checkValidity(license.expiry_date);
    }, [])

    return (
        <Container >
            <InnerScrollView
                showsVerticalScrollIndicator={false}
            >
                <LicenseBanner />
                <LicenseStateContainer>
                    <StatusText color={ isExpired ? `${red}` : `${lime}`}>
                        { isExpired ? 'EXP' : 'VAL' }
                    </StatusText> 
                    <ValidityTable
                        effectiveDate={license.effective_date}
                        expiryDate={license.expiry_date}
                    />
                </LicenseStateContainer>
                <DetailsTable
                    textBox1={`Applicant/Business/Commercial Name \n${license.business_name.toUpperCase()}`}
                    textBox2={`Business ID    ${license.business_id}`}
                    textBox3={`Activity Code    ${license.activity_code}`}
                />
                <DetailsTable
                    textBox1={'Activity/Business/Profession or Occupation of...'}
                    textBox2={'Occupation/Profession/Activity'}
                    textBox3={`Annual fee: ${license.fee.toLocaleString()}`}
                />
                <SidedTable>
                    <SideTableRow>
                        <SideTableCell>
                            <SideTableText>
                                Plot Number: {license.location.plot_number}
                            </SideTableText>
                        </SideTableCell> 
                        <SideTableCell color={white}>
                            <SideTableText>
                                Road/Street:   {license.location.road_street}
                            </SideTableText>
                        </SideTableCell>                          
                    </SideTableRow>
                    <SideTableRow>
                        <SideTableCell>
                            <SideTableText>
                                Building:   {license.location.building}
                            </SideTableText>
                        </SideTableCell>
                        <SideTableCell>
                            <SideTableText>
                                Floor:   {license.location.floor}
                            </SideTableText>
                        </SideTableCell>
                    </SideTableRow>
                    <SideTableRow>
                        <SideTableCell>
                            <SideTableText>
                                Door/Stall No:   {license.location.stall_number}
                            </SideTableText>
                        </SideTableCell>
                    </SideTableRow>
                </SidedTable>
                </InnerScrollView>
        </Container>               
    )
}
export default SelectedLicense;