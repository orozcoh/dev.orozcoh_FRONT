
function Navbar() {
    return  <nav id="header" className="navbar navbar-expand-sm navbar-dark bg-black sticky-top">
    <div id="api2" className="container-fluid ms-4 me-4">
        <a className="navbar-brand text-high" href="https://dev.orozcoh.com"><h3>dev.orozcoh</h3></a>

            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a className="nav-link text-high" href="/dataLogger"><b>dataLogger</b></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/myUrls"><b>myUrls</b></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/tests"><b>Tests</b></a>
                </li>
            </ul>

    </div>

</nav>
    
    // <nav className="nav">
    //     <a href="/" className="site-title">dev.orozcoh</a>
    //     <ul>
    //         <li>
    //             <a href="/dataLogger">dataLogger</a>
    //         </li>
    //         <li>
    //             <a href="/myUrls">myUrls</a>
    //         <li/>
    //             <a href="/tests">tests</a>
    //         </li>
    //     </ul>
    // </nav> 


}
  
export default Navbar;