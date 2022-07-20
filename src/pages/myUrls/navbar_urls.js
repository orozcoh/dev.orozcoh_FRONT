function NavbarUrls() {
    return  <ul class="nav bg-black justify-content-center">
    <li class="nav-item">
      <a class="nav-link" href="/myUrls" >API2:3000</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/myUrls/push">Agregar url</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="/myUrls/browse">Browse</a>
    </li>
  </ul>
}
  
export default NavbarUrls;