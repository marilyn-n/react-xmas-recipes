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
      <a href="#" className="">
        <svg fill="red" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/></svg>
      </a>
    </div>
  );
}

export default Navigation;
