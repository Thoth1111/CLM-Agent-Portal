import React from 'react';
import { SideTableRow, SideTableText, SidedTable, FittedContainer } from './styles';

const DetailsTable = ({ textBox1, textBox2, textBox3 }) => {
    return (
        <SidedTable>
            <FittedContainer>
                <SideTableRow>
                    <SideTableText>{textBox1}</SideTableText>
                </SideTableRow>
                <SideTableRow>
                    <SideTableText>{textBox2}</SideTableText>
                </SideTableRow>
                <SideTableRow>
                    <SideTableText>{textBox3}</SideTableText>
                </SideTableRow>
            </FittedContainer>
        </SidedTable>
    )
}

export default DetailsTable;