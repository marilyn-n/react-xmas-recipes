
function Card() {
  return (
      <div className="card recipe">
          <i class="far fa-heart recipe--like"></i>
          <img src="https://slcwesthsmtb.com/wp-content/uploads/2019/09/placeholder.png" className="card-img-top" alt="..."/>
          <div className="card-body recipe__body">
              <h5 className="recipe__title">Card title</h5>
              <div className="recipe__rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <p className="recipe--text">
                Some quick example text to build on the card's content.
              </p>
          </div>
      </div>
  );
}

export default Card;
