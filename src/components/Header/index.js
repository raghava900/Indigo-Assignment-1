import {AiOutlineMenu} from 'react-icons/ai'
import {BsPersonCircle} from 'react-icons/bs'
import './index.css'

const Header = () => (
  <div className="header">
    <p className="header-heading">
      <span>
        <AiOutlineMenu className="header-icons" />
      </span>
      IndigoLearn
    </p>

    <div className="dropdown">
      <button type="button" className="dropBtn">
        BUY COURSES
      </button>
      <div className="dropdown-content">
        <button type="button">
          <p className="dropdown-list">CA Foundation</p>
          <hr />
          <p>CA Inter</p>
          <hr />
          <p>CA Final</p>
          <hr />
          <p>ACCA - Knowledge Level(L1)</p>
          <hr />
          <p>ACCA - Skills Level (L2)</p>
          <hr />
          <p>CMA Foundation (old)</p>
          <hr />
          <p>CMA Inter (Old)</p>
          <hr />
          <p>CMA Final (Old)</p>
          <hr />
          <p>Cs Exec</p>
          <hr />
          <p>CS Professional</p>
          <hr />
          <p>CBSE</p>
          <hr />
          <p>Mock Test Services</p>
          <hr />
          <p>Mentorship</p>
          <hr />
          <p>UpSkilling</p>
        </button>
      </div>
    </div>

    <div>
      <a
        href="https://www.indigolearn.com/courses/Books/fdxqww"
        className="dropBtn-anchor-tag"
      >
        BUY BOOKS
      </a>
    </div>

    <div className="dropdown">
      <button type="button" className="dropBtn">
        PROGRAMS
      </button>
      <div className="dropdown-content">
        <button type="button">
          <p className="dropdown-list">CA</p>
          <hr />
          <p>CFA</p>
          <hr />
          <p>ACCA</p>
        </button>
      </div>
    </div>

    <div>
      <a
        href="https://www.indigolearn.com/resources"
        className="dropBtn-anchor-tag"
      >
        FREE RESOURSES
      </a>
    </div>

    <button type="button" className="header-button">
      <span>
        <BsPersonCircle className="header-icons" />
      </span>
      Log In/Sign Up
    </button>
  </div>
)

export default Header
