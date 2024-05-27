import logo from '../logo.png'
function Header (){
    return (
<nav className="navbar">
      <img src={logo} alt="Skyrun Tech Logo" className="logo"/>
      {/* <div className="title">SKYRUN ELECTRIC POWER TECHNOLOGY NIG LTD</div> */}
        <div className="nav-links">
          <a href="https://skyrunelectric-ng.onrender.com/store.html">Product</a>
          <a href="https://skyrunelectric-ng.onrender.com/About.html">About</a>
          <a href="https://skyrunelectric-ng.onrender.com/Contact.html">Contact</a>
        </div>
</nav>

    )
}

export default Header