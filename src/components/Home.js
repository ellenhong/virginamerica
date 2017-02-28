import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { increase, decrease } from '../actions/count';


export class HomeComponent extends Component {
  constructor(props) {
    super(props);

    this._tick = this._tick.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this._tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  _tick() {
    this.props.onTick(1);
  }

  render() {
    return (
      <div className="home">
        <div className="topbar">
          <div className="logo">
            virgin america
          </div>
          <ul className="main-nav">
            <li>Book</li>
            <li>Check in </li>
            <li>Manage</li>
          </ul>
          <ul className="main-nav sub-nav">
            <li>Deals</li>
            <li>Flying With Us</li>
            <li>Where We Fly</li>
            <li>Fees</li>
            <li>Flight Status</li>
            <li>Flight Alerts</li>
          </ul>
          <img className="menu-img" alt={'icon'} src="img/menu.png" />
        </div>

        <div className="travel-query">
          <div className="options">
            <form>
              <input type="radio" name="trip" /> Round Trip
              <input type="radio" name="trip" /> One Way
              <input type="radio" name="trip" /> Multi City
            </form>
          </div>
          <div className="where">
            Where would you like to go?
          </div>
          <select>
            <option value="Adult">1 Adult</option>
            <option value="Children">0 Children (age 2-11)</option>
            <option value="Lap infants">0 Lap Infants (age 0-2)</option>
            <option value="Pets">0 Pets</option>
          </select>
          <select>
            <option>Austin, TX</option>
            <option>Boston, MA</option>
            <option>Cancun, Mexico</option>
            <option>Chicago, IL</option>
            <option>Dallas, TX</option>
            <option>Denver, CO</option>
            <option>Ft. Lauderdale, FL</option>
            <option>Honolulu, HI</option>
            <option>Las Vegas, NV</option>
            <option>Los Angeles, CA</option>
            <option>Los Cabos, Mexico</option>
            <option>Maui/Kahului, HI</option>
            <option>New York City, NYC</option>
            <option>New York/EWR, NJ</option>
            <option>New York/JFK, NY</option>
            <option>New York/La Guardia, NY</option>
            <option>Orlando, FL</option>
            <option>Palm Springs, CA</option>
            <option>Portland, OR</option>
            <option>Puerto Vallarta, Mexico</option>
            <option>San Diego, CA</option>
            <option selected="selected">San Francisco, CA</option>
            <option>Seattle, WA</option>
            <option>Washington DC, WAS</option>
            <option>Washington/Dulles, DC</option>
            <option>Washington/National, DC</option>
          </select>
          <select>
            <option>Austin, TX</option>
            <option>Boston, MA</option>
            <option>Cancun, Mexico</option>
            <option>Chicago, IL</option>
            <option>Dallas, TX</option>
            <option>Denver, CO</option>
            <option>Ft. Lauderdale, FL</option>
            <option>Honolulu, HI</option>
            <option>Las Vegas, NV</option>
            <option>Los Angeles, CA</option>
            <option>Los Cabos, Mexico</option>
            <option>Maui/Kahului, HI</option>
            <option>New York City, NYC</option>
            <option>New York/EWR, NJ</option>
            <option>New York/JFK, NY</option>
            <option>New York/La Guardia, NY</option>
            <option>Orlando, FL</option>
            <option>Palm Springs, CA</option>
            <option>Portland, OR</option>
            <option>Puerto Vallarta, Mexico</option>
            <option>San Diego, CA</option>
            <option selected="selected">San Francisco, CA</option>
            <option>Seattle, WA</option>
            <option>Washington DC, WAS</option>
            <option>Washington/Dulles, DC</option>
            <option>Washington/National, DC</option>
          </select>
          <div className="button">
            Search flights
          </div>
        </div>

        <div className="onboarding">
          <div className="column column-3 align-center">
            <img className="icon" alt={'icon'} src="img/ob1.png" />
            <div className="header ob-header">
              Time to Fly
            </div>
            <div className="ob-description">
              Leave the nest for a hot spot with sweet low fares from $49 one way.
            </div>
            <div className="button ob-button">
              Grab a Seat
            </div>
          </div>
          <div className="column column-3 align-center">
            <img className="icon" alt={'icon'} src="img/ob2.png" />
            <div className="header ob-header">
              Friends with Benefits
            </div>
            <div className="ob-description">
              More flights, more rewards, and more to love with Alaska Airlines.
            </div>
            <div className="button ob-button">
              Learn More
            </div>
          </div>
          <div className="column column-3 align-center">
            <img className="icon" alt={'icon'} src="img/ob3.png" />
            <div className="header ob-header">
              Take Off Faster
            </div>
            <div className="ob-description">
              Earn 10K points and let the perks fly with a Virgin America Visa Signature Card.
            </div>
            <div className="button ob-button">
              Learn More
            </div>
          </div>
        </div>

        <div className="more-icons">
          <div className="column column-6 align-center">
            <div className="header icons-header">
              Test-drive every seat.
            </div>
            <img className="icon" alt={'icon'} src="img/icon1-new.png" />
            <div className="icons-description">
              Want to see what it&#39;s like to fly in style? Cruise
               through our mood-lit cabin with Google Street View.
               You can poke around first class or check out the view from your seat.
            </div>
            <div className="button icons-button">
              Take tour
            </div>
          </div>

          <div className="column column-6 align-center">
            <div className="header icons-header">
              First one on, first one off.
            </div>
            <img className="icon" alt={'icon'} src="img/icon2-new.png" />
            <div className="icons-description">
              In a hurry? Make a &quot;B&quot; line for the car with
               a preferred main cabin seat toward the front of the
                plane, or treat yourself to priority security and
                boarding for a small fee.
            </div>
            <div className="button icons-button">
              Learn More
            </div>
          </div>

          <div className="column column-6 align-center">
            <div className="header icons-header">
              Feel the upgrade.
            </div>
            <img className="icon" alt={'icon'} src="img/icon3-new.png" />
            <div className="icons-description">
              Travel in style with an upgrade to Main Cabin Select.
               Enjoy extra legroom, priority boarding and security,
               a checked bag, plus free movies, food and drinks.
               Live it up, way up.
            </div>
            <div className="button icons-button">
              Experience it
            </div>
          </div>

          <div className="column column-6 align-center">
            <div className="header icons-header">
              Get your app over here.
            </div>
            <img className="icon" alt={'icon'} src="img/icon4-new.png" />
            <div className="icons-description">
              We just made &quot;day of travel&quot; a breeze with the
               new Virgin America App. Now you can book a flight,
               check-in, download your boarding pass, check flight
               status and more&mdash;on the fly.
            </div>
            <div className="button icons-button">
              Download app
            </div>
          </div>

          <div className="column column-6 align-center">
            <div className="header icons-header">
              Make business a pleasure.
            </div>
            <img className="icon" alt={'icon'} src="img/icon5-new.png" />
            <div className="icons-description">
              Book flights for yourself, your company and your
               clients with our Corporate travel programs, including
               travel rewards through Elevate Inc. and sweet options
               to customize any trip.
            </div>
            <div className="button icons-button">
              Learn More
            </div>
          </div>

          <div className="column column-6 align-center">
            <div className="header icons-header">
              Pack your points.
            </div>
            <img className="icon" alt={'icon'} src="img/icon6-new.png" />
            <div className="icons-description">
              Live large at 35,000 feet. Join Elevate and start racking
               up points, perks and reward flights with no blackout dates.
            </div>
            <div className="button icons-button">
              Join Elevate
            </div>
          </div>

        </div>

        <div className="deals">

          <div className="column column-2">
            <div className="header deals-header">
              Get Deals, Offers, and More.
            </div>
            <div className="deals-descrip">
              Sign up now to receive special fares, promotional offers,
               and news. Virgin America&#39;s Privacy Policy
            </div>
            <div className="button deals-button">
              Sign up now
            </div>
          </div>

          <div className="column column-2">
            <div className="header deals-header">
              News and Updates
            </div>
            <div className="deals-descrip">
              <ul>
                <li>Alaska Airlines and Virgin America grow San Francisco hub
                 with flights to popular destinations</li>
                <li>Alaska Air Group Closes Acquisition Of Virgin America</li>
                <li>Virgin America Celebrates Nine Years Of Making Flying Fun</li>
                <li>Virgin America Expands Service To New York Area</li>
              </ul>
            </div>
            <div className="button deals-button">
              More News
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="column column-6">
            <ul>
              <li>Sitemap</li>
              <li>Contact Us/FAQs</li>
              <li>Contract of Carriage</li>
              <li>Int’l Contract of Carriage</li>
            </ul>
          </div>

          <div className="column column-6">
            <ul>
              <li>Blog</li>
              <li>About Us</li>
              <li>Press & Awards</li>
              <li>All News & Updates</li>
            </ul>
          </div>

          <div className="column column-6">
            <ul>
              <li>Guest Services Commitment</li>
              <li>Accessibility Services</li>
              <li>Accessibility Services Form</li>
              <li>Mobile App</li>
            </ul>
          </div>

          <div className="column column-6">
            <ul>
              <li>Corporate & Group Travel</li>
              <li>Travel Agency</li>
              <li>Travel Insurance</li>
              <li>Careers</li>
            </ul>
          </div>

          <div className="column column-6">
            <ul>
              <li>What Is Elevate?</li>
              <li>Virgin America Credit Card</li>
              <li>Advertise Onboard</li>
              <li>Email Unsubscribe</li>
            </ul>
          </div>

          <div className="column column-6">
            <ul>
              <li>Tarmac Delay Contingency Plan</li>
              <li>Investor Relations</li>
              <li>Corporate Responsibility</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="social-media">
            <i className="fa fa-facebook-official fa-lg" />
            <i className="fa fa-twitter-square fa-lg" />
            <i className="fa fa-youtube-play fa-lg" />
            <i className="fa fa-instagram fa-lg" />
            <i className="fa fa-google-plus-square fa-lg" />
            <i className="fa fa-snapchat-square fa-lg" />
            <i className="fa fa-linkedin-square fa-lg" />
          </div>
          <div className="bottom-bar" />
        </div>
      </div>
    );
  }
}


HomeComponent.propTypes = {
  number: PropTypes.number.isRequired,
  onTick: PropTypes.func.isRequired,
  // onIncreaseClick: PropTypes.func.isRequired,
  // onDecreaseClick: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  number: state.count.number,
});

const mapDispatchToProps = (dispatch) => ({
  onTick: (n) => {
    dispatch(increase(n));
  },
  onIncreaseClick: (n) => {
    dispatch(increase(n));
  },
  onDecreaseClick: (n) => {
    dispatch(decrease(n));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeComponent);

