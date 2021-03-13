import logo from '../assets/logo.svg';

function Navigation() {
  return (
    <div className="navigation d-flex justify-content-between align-items-center">
      <img className="navigation__logo" src={logo}/>
      <ul class="nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Trending recipes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Drinks</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
      </ul>
      <i className="fas fa-heart d-block"></i>
    </div>
  );
}

export default Navigation;
