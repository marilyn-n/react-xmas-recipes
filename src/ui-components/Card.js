
function Card() {
  return (
      <div className="card">
        <a className="card__heart active">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/></svg>
        </a>
          <img src="https://slcwesthsmtb.com/wp-content/uploads/2019/09/placeholder.png" className="card__thumbnail" alt="recipe image"/>
          <div className="card__content">
              <h5 className="card__content--title">Card title</h5>
              <div className="card__content--rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="card__content--paragraph">
                Some quick example text to build on the card's content.
              </p>
          </div>
      </div>
  );
}

export default Card;
