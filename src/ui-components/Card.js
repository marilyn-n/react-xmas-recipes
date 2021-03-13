
function Card() {
  return (
      <div className="card">
          <i class="far fa-heart card--like"></i>
          <img src="https://slcwesthsmtb.com/wp-content/uploads/2019/09/placeholder.png" className="card__thumbnail" alt="recipe image"/>
          <div className="card__content">
              <h5 className="card__content--title">Card title</h5>
              <div className="card__content--rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <p className="card__content--paragraph">
                Some quick example text to build on the card's content.
              </p>
          </div>
      </div>
  );
}

export default Card;
