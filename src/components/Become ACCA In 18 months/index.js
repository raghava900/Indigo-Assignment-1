import Popup from 'reactjs-popup'
import {MdOutlineMenuBook, MdGroup} from 'react-icons/md'
import {BsDisplay} from 'react-icons/bs'
// import {BiAlarm} from 'react-icons/bi'
import {FaSmile} from 'react-icons/fa'
import './index.css'

const BecomeACCA = () => (
  <div className="brochure">
    <div>
      <h1 className="brochure-heading">Become ACCA in 18 months</h1>
      <p className="brochure-para">
        Acquire globally recognized accountancy qualification, ACCA (also <br />
        called as Global CA), and get placed in top MNCs & Big4s. Begin <br />
        ACCA prep with 1FIN now.
      </p>

      <div className="box">
        <div className="boxes-1">
          <p className="box-para">
            <span>
              <FaSmile />
            </span>
            Registered Users
          </p>
          <p className="box-para">294,022</p>
        </div>
        <div className="boxes-1">
          <p className="box-para">
            <span>
              <MdOutlineMenuBook />
            </span>
            Courses Enrolled
          </p>
          <p className="box-para">65,171</p>
        </div>
        <div className="boxes-1">
          <p className="box-para">
            <span>
              <BsDisplay />
            </span>
            Minutes Watched
          </p>
          <p className="box-para">2,090,935,459</p>
        </div>
        <div className="boxes-1">
          <p className="box-para">
            <span>
              <MdGroup />
            </span>
            Faculty
          </p>
          <p className="box-para">8 Expert</p>
        </div>
      </div>
      <div className="brochure-buttons">
        <button type="button" className="button1">
          Download Brochure
        </button>

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

export default BecomeACCA
