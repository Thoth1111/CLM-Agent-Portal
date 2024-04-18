import React from 'react';
import { DatesTable, DatesRow, DatesCell, DatesText, Colors } from './styles';
import { formatDate } from '../helpers/dateFormatter';

const { jet, white } = Colors;  

const ValidityTable = ({ effectiveDate, expiryDate}) => {
    const init_date = formatDate(effectiveDate)
    const end_date =  formatDate(expiryDate)

    return (
        <DatesTable>
            <DatesRow>
                <DatesCell>
                    <DatesText>Effective Date</DatesText>
                </DatesCell>
                <DatesCell
                    color={white}
                >
                    <DatesText color={jet}>{init_date}</DatesText>
                </DatesCell>
            </DatesRow>
            <DatesRow>
                <DatesCell>
                    <DatesText>Expiry Date</DatesText>
                </DatesCell>
                <DatesCell
                    color={white}
                >
                    <DatesText>{end_date}</DatesText>
                </DatesCell>
            </DatesRow>
        </DatesTable>
    )
}

export default ValidityTable;