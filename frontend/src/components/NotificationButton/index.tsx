import icon from '../../assets/img/notify-icon.svg'
import '../styles.css'


function notificationButton() {
    return (
        <div className='notify-btn'>
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default notificationButton
