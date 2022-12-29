import {MdOutlineMenuBook} from 'react-icons/md'
import {BsLaptop, BsCalendarDate} from 'react-icons/bs'
import {BiAlarm} from 'react-icons/bi'
import './index.css'

const WhyChooseUs = () => (
  <div>
    <h1 className="middle-heading">Why Choose Us?</h1>
    <hr className="line" />
    <div className="box-container">
      <div className="box-1">
        <img
          src="https://www.indigolearn.com/media/images/ca_concept.png"
          alt="bulb"
          className="image-size"
        />
        <h6 className="box-title">Expert Faculty</h6>
        <p>
          Our Faculty are subject matter expertise with practical experience.
          They believe in #StudentFirst principle
        </p>
      </div>
      <div className="box-1">
        <img
          src="https://www.indigolearn.com/media/images/ca_top_faculties.png"
          alt="bulb"
          className="image-size"
        />
        <h6 className="box-title">Complete Success Package</h6>
        <p>
          Leading Exam Prep Destination with Video classes, Live sessions, Doubt
          resolution Forums, E-notes from Kaplan, MCQs, Practice tests,
          Webinars.
        </p>
      </div>
      <div className="box-1">
        <img
          src="https://www.indigolearn.com/media/images/ca_unlimited_views.png"
          alt="bulb"
          className="image-size"
        />
        <h6 className="box-title">Placements</h6>
        <p>
          Resume building workshops, mock interviews and placement drives will
          help you impress the top employers and get the dream job.
        </p>
      </div>
    </div>

    <div className="box">
      <div className="boxes">
        <p className="box-para">Levels</p>
        <p>
          <span>
            <MdOutlineMenuBook />
          </span>
          Three (13 papers)
        </p>
      </div>
      <div className="boxes">
        <p className="box-para">Duration</p>
        <p>
          <span>
            <BiAlarm />
          </span>
          6-30 minutes
        </p>
      </div>
      <div className="boxes">
        <p className="box-para">Exams</p>
        <p className="box-icon">
          <span>
            <BsLaptop />
          </span>
          Quarterly(Online)
        </p>
      </div>
      <div className="boxes">
        <p className="box-para">Exemptions</p>
        <p>
          <span>
            <BsCalendarDate />
          </span>
          Available
        </p>
      </div>
    </div>
  </div>
)

export default WhyChooseUs
