import { ContainerCloseButton, H1, NotificationContainer } from './styles'
import { Polygon } from './icons/polygon'
import ThankYouPic from './assets/thankyou.png'


export const ThankYouNotification = ({closeMe}: {closeMe: () => void}) => {
  return (
    <NotificationContainer>
        <ContainerCloseButton onClick={closeMe}>Close</ContainerCloseButton>
        <Polygon />
        <H1>Thank you for your support!</H1>
        <img className="thank-you-pic" src={ThankYouPic} alt="Thank you" />
    </NotificationContainer>
  )
}
