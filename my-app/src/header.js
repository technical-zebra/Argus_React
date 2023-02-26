import logo from './Images/logo.png'
import './style.css'

function ArgusHeader() {
    return (
        <header>
            <br></br>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='header-logo-block'>
                    <img className='logo' src={logo} alt="argus logo" />
                </div>

                <nav className='header-nav-block'>
                    <ul className='d-flex flex-row mp-1 nav-ul'>
                        <li>
                            <a><span>Home</span></a>
                        </li>
                        <li>
                            <a><span>Models</span></a>
                        </li>
                        <li>
                            <a><span>Modelling as a Service</span></a>
                        </li>
                        <li>
                            <a><span>Company</span></a>
                        </li>
                    </ul>
                </nav>

            </div>
            <br></br>
        </header>
    );
}

export default ArgusHeader;