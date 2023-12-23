import styled from 'styled-components'
import { Github } from './icons/github'
import { LinkedIn } from './icons/linkedin'
import { Medium } from './icons/medium'

const FooterContainer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 24px;
    background-color: ${({theme}) => theme.colors.background};

    a {
        color: ${({theme}) => theme.colors.text};
    }
`

export const Footer = () => {
  return (
    <FooterContainer>
        <a href='https://github.com/thomasender/fundme-client' target='_blank'>
            <Github />
        </a>
        <a href='https://www.linkedin.com/in/thomasender/' target='_blank'>
            <LinkedIn />
        </a>
        <a href='https://medium.com/@thomasender' target='_blank'>
            <Medium />
        </a>
    </FooterContainer>
  )
}
