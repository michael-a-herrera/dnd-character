import {Link} from 'react-router-dom'

function MainNavigation() {
    return <header>
        <div>Navigation</div>
        <nav>
            <ul>
                <li>
                    <Link to='/class'>Next</Link>
                </li>
            </ul>
        </nav>


    </header>
}

export default MainNavigation;