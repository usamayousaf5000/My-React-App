import React from 'react'
// import PropTypes from 'prop-types'
const Navbar = ({title = 'Usama',contact = 'Contact'}) => {
    return (
        <>
            <div className="container">
                <div className="Title">
                    <h3>{title}</h3>
                </div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>{contact}</li>
                    </ul>
                </nav>
                <div className="button">
                    <button>Logout</button>
                </div>
            </div>
        </>
    )
}
export default Navbar
// Navbar.prototypes = {
//     title: PropTypes.string.isRequired,
//     contact: PropTypes.string.isRequired
// }
// Navbar.defaultProps = {
//     title: 'set title here',
//     contact: 'set contact here'
// }