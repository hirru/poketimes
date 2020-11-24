import React from 'react'
import { Link, NavLink, withRouter} from 'react-router-dom';

const Navbar = () => {
    //  setTimeout(()=>{
    //      props.history.push('/about')
    //  },2000)
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo" style={{marginLeft:'-30rem'}}>Poketimes</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    
                </ul>
            </div>
        </nav>

    )
}

export default withRouter(Navbar)
