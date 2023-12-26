import styled from 'styled-components'
import { Github } from './icons/github'
import { LinkedIn } from './icons/linkedin'
import { Medium } from './icons/medium'
import { ETHERSCAN_POLYGON_ADDRESS_BASE_URL, FUND_ME_ADDRESS } from './constants'
import { Polygon } from './icons/polygon'

export const FOOTER_HEIGHT = 120;

const FooterContainer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    height: ${FOOTER_HEIGHT}px;
    background-color: ${({theme}) => theme.colors.background};
`

const SocialIconsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 24px;
   

    a {
        color: ${({theme}) => theme.colors.text};
    }
`

const ContractLink = styled.a`
    display: flex;
    align-items: center;
    gap: 12px;
`

export const Footer = () => {
  return (
    <FooterContainer>
        <SocialIconsContainer>
            <a href='https://github.com/thomasender/fundme-client' target='_blank'>
                <Github />
            </a>
            <a href='https://www.linkedin.com/in/thomasender/' target='_blank'>
                <LinkedIn />
            </a>
            <a href='https://medium.com/@thomasender' target='_blank'>
                <Medium />
            </a>
        </SocialIconsContainer>
        <ContractLink href={`${ETHERSCAN_POLYGON_ADDRESS_BASE_URL}${FUND_ME_ADDRESS}`} target="_blank">Fund Me Contract on Polyscan<Polygon /></ContractLink>
    </FooterContainer>
  )
}
