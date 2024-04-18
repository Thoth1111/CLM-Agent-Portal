import React from 'react'
import { Banner, BannerLogo, BannerText, BannerTitle, BannerSubTitle } from './styles'

const LicenseBanner = () => {
    return (
        <Banner>
            <BannerLogo source={require('../assets/images/cityLogo.jpg')} />
            <BannerText>
                <BannerTitle>N**** CITY COUNTY</BannerTitle>
                <BannerSubTitle>SINGLE BUSINESS PERMIT</BannerSubTitle>
            </BannerText>
        </Banner>
    )
}

export default LicenseBanner