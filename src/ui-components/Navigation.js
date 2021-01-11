import logo from '../assets/logo.svg';

function Navigation() {
  return (
    <div className="navigation d-flex justify-content-between align-items-center">
      <img className="navigation__logo" src={logo}/>
      <i class="fas fa-heart d-block"></i>
    </div>
  );
}

export default Navigation;
