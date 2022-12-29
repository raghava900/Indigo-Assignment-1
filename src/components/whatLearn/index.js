import './index.css'

const WhatLearn = () => (
  <div>
    <h1 className="middle-heading">What will you Learn in ACCA?</h1>
    <hr className="line" />
    <div className="pp">
      <div className="acca-container1">
        <div className="acca1">
          <p className="acca-para">Knowledge Level</p>
        </div>
        <ul>
          <li>Business and Technology (BT)</li>
          <li>Management Accounting (MA)</li>
          <li>Financial Accounting (FA)</li>
        </ul>
        <div className="acca-para-down-container-1">
          <p className="acca-para-down">3 papers</p>
        </div>
      </div>

      <div className="acca-container1">
        <div className="acca1">
          <p className="acca-para">Skill Level</p>
        </div>
        <ul>
          <li>Corporate and Business Law (LW)</li>
          <li>Performance Management (PM)</li>
          <li>Taxation (TX)</li>
          <li>Financial Reporting (FR)</li>
          <li>Audit and Assurance (AA)</li>
          <li>Financial Management (FM)</li>
        </ul>
        <div className="acca-para-down-container-2">
          <p className="acca-para-down">6 papers</p>
        </div>
      </div>

      <div className="acca-container1">
        <div className="acca1">
          <p className="acca-para">Professional Level</p>
        </div>
        <h5>Compulsory</h5>
        <ul>
          <li>SBL - Strategic Business Leader</li>

          <li>SBR - Strategic Business Reporting</li>
        </ul>
        <h5>Two out of the following</h5>
        <ul>
          <li>Advanced Financial Management (AFM)</li>
          <li>Advanced Performance Management (APM)</li>
          <li>Advanced Taxation (ATX)</li>
          <li>Advanced Audit and Assurance (AAA)</li>
        </ul>
        <div className="acca-para-down-container-3">
          <p className="acca-para-down">4 papers</p>
        </div>
      </div>
    </div>
  </div>
)

export default WhatLearn
