import React, { useState, useContext } from 'react'
import { useDispatch } from 'react-redux'
import { ActivityIndicator } from 'react-native'
import * as Icon from 'react-native-feather'
import { Container, InnerContainer, PageTitle, CardContainer, Line, CardView, ButtonText, Colors } from '../components/styles'
import { AgentContext } from '../components/AgentContext'
import { logoutAgent } from '../API/agentRequests'
const { green } = Colors

const Account = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const { agentData, setAgentData } = useContext(AgentContext);
  const { agent_id } = agentData

  const handleLogout = () => {
    setLoading(true);
    logoutAgent(agent_id, setLoading, dispatch, setAgentData);
  }

  return (
    <Container>
      <InnerContainer>
        <PageTitle color={green}>Account</PageTitle>
        {loading ? (
          <ActivityIndicator size="large" color={green} />
        ) : (
          <CardContainer>
            <Line />
            <CardView onPress={handleLogout} style={{ flexDirection: 'row' }}>
              <Icon.LogOut size={50} color={green} />
              <ButtonText>Log Out</ButtonText>
            </CardView>
            <Line />
          </CardContainer>
        )}
      </InnerContainer>
    </Container>
  )
}

export default Account