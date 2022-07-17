import '../styles.css'
import icon from '../../assets/img/notify-icon.svg'


function notificationButton() {
    return (
        <div className='notify-btn'>
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default notificationButton
