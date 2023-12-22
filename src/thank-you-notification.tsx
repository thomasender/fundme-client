import styled from 'styled-components'
import { H1 } from './styles'
import { Polygon } from './icons/polygon'
import ThankYouPic from './assets/thankyou.png'

const ThankYouNotificationContainer = styled.div`
    position: fixed;
    top: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 2rem;
    border-radius: 0.5rem;
    border: 2px solid ${({ theme }) => theme.colors.purple};
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: 0 0 1rem 0.5rem ${({ theme }) => theme.colors.purple};

    .thank-you-pic {
        width: 100px;
        margin-bottom: -32px;
        margin-top: -20px;
    }
`

const CloseButton = styled.button`
    position: absolute;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -12px;
    right: 0px;
    padding: 0.5rem;
    background-color: ${({ theme }) => theme.colors.background};
    border: none;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    box-shadow: 0 0 1rem 0.5rem ${({ theme }) => theme.colors.purple};

    @media (min-width: 510px) {
        right: -16px;
    }
`

export const ThankYouNotification = ({closeMe}: {closeMe: () => void}) => {
  return (
    <ThankYouNotificationContainer>
        <CloseButton onClick={closeMe}>Close</CloseButton>
        <Polygon />
        <H1>Thank you for your support!</H1>
        <img className="thank-you-pic" src={ThankYouPic} alt="Thank you" />
    </ThankYouNotificationContainer>
  )
}
