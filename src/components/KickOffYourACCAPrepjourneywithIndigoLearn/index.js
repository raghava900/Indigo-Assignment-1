import Popup from 'reactjs-popup'

import './index.css'

const KickOffYourJourney = () => (
  <div className="brochure">
    <div>
      <h1 className="brochure-heading">
        Kick off your ACCA Prep journey with IndigoLearn
      </h1>
      <p className="brochure-para">
        Kick off your ACCA Prep journey with IndigoLearn
      </p>
      <div className="brochure-buttons">
        <img
          src="https://il-app.s3.ap-south-1.amazonaws.com/images/acca_silver_lp_logo.png"
          alt="ACCA"
          className="ACCA"
        />
      </div>
    </div>
    <div className="register">
      <h5 className="Register-text">
        Aspiring to be an ACCA? Get in touch with us!
      </h5>
      <input type="text" placeholder="Email ID" className="input" />
      <input type="text" placeholder="Phone Number" className="input" />
      <input
        type="text"
        placeholder="Current Qualification"
        className="input"
      />
      <input type="text" placeholder="Interested In" className="input" />

      <div>
        <Popup
          modal
          trigger={
            <button type="button" className="request-button">
              Request Call Back
            </button>
          }
        >
          {close => (
            <div className="popup-container">
              <div>
                <p className="popup-request">
                  Your Successfully Booked a Call.
                </p>
              </div>
              <button
                type="button"
                className="trigger-button"
                onClick={() => close()}
              >
                Close
              </button>
            </div>
          )}
        </Popup>
      </div>
    </div>
  </div>
)

export default KickOffYourJourney
