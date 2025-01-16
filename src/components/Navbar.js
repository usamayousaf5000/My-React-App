import React from 'react'
// import PropTypes from 'prop-types'
let name = ",I am Usama";
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
            <div className="container1">
                <h1>Hi {name}</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, nam iste at reiciendis cupiditate, nulla earum natus fugiat, tempora soluta corporis. Consectetur necessitatibus nobis velit, veritatis recusandae ullam nemo asperiores cum explicabo dignissimos repudiandae!</p>
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