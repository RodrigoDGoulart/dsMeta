import '../styles.css'
import logo from '../../assets/img/logo.svg'

function Header() {    
    return (
        <header>
            <div className='logo-container'>
                <img src={logo} alt="" />
                <h3>DS Meta</h3>
                <p>
                    Desenvolvido por
                    <a href="">Rodrigo Goulart</a>
                </p>
            </div>
        </header>
    )
}

export default Header