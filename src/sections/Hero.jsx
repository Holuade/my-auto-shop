import PropTypes from 'prop-types';
import './Hero.css';


function Hero ({
    cName = "hero",
    heroImg = "https://media.istockphoto.com/id/1415156213/photo/car-suspension-specialists-are-carefully-examining-the-broken-car.jpg?s=1024x1024&w=is&k=20&c=0Da1p01n-Koi2N7_OEWq7vFgHfg-mez6H2keGnwWh_s=",
    title = "Welcome to BrainBoss Automobile",
    text = "Your one-stop shop for all things automotive!",
    btnText = "Shop Now",
    url = "/",
    btnClass = "show"
}) {
    return (
       <div 
            className={cName}
            style={{ backgroundImage: `url(${heroImg})` }}
        >
            <div className="hero-text">
                <h1>{title}</h1>
                <p>{text}</p>
                {btnText && (
                    <a href={url} className={btnClass}>
                        {btnText}
                    </a>
                )}
            </div>
        </div>
    )
}

Hero.propTypes = {
  cName: PropTypes.string,
  heroImg: PropTypes.string.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
  btnText: PropTypes.string,
  url: PropTypes.string,
  btnClass: PropTypes.string,
};

export default Hero