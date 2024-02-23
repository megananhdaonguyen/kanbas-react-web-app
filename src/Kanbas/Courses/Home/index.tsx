import ModuleList from "../Modules/List";
import React from 'react'
import "./index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImport, faArrowRight, faBullseye, faChartSimple, faBullhorn, faBell } from '@fortawesome/free-solid-svg-icons'

function Home() {
  return (
    <table>
      <tbody>
        <tr>
          <td style={{width: "900px", verticalAlign:"top"}}>
            <div>
              <ModuleList />
            </div>
          </td>
          <td style={{textAlign:"left"}}>
            <div>
              <table>
                <tbody>
                  <tr>
                    <button className="wd-left-align-status"><FontAwesomeIcon icon={faFileImport} /> Import Existing
                      Content</button>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <button className="wd-left-align-status"><FontAwesomeIcon icon={faArrowRight} /> Import From
                      Commons</button>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <button className="wd-left-align-status"><FontAwesomeIcon icon={faBullseye} /> Choose Home
                      Page</button>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <button className="wd-left-align-status"><FontAwesomeIcon icon={faChartSimple} /> View Course
                      Stream</button>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <button className="wd-left-align-status"><FontAwesomeIcon icon={faBullhorn} /> New
                      Announcement</button>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <button className="wd-left-align-status"><FontAwesomeIcon icon={faChartSimple} /> New
                      Analytics</button>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <button className="wd-left-align-status"><FontAwesomeIcon icon={faBell} /> View Course
                      Notifications</button>
                  </tr>
                </tbody>
              </table>
            </div>


            <div>
              <br></br>
              <h6>To Do</h6>
              <hr style={{ width: "100%" }}></hr>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <a className="status"><i className="fa fa-circle-exclamation"></i> Grade A1-
                        ENV+HTML</a>
                      <p className="wd-todo">100 pts * Sep
                        18 at 11: 59pm</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>


            <div>
              <h6>Coming Up &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <i className="fa fa-calendar" style={{ color: "grey" }}></i>
                <a style={{ color: "red" }}>View Calender</a>
              </h6>
              <hr style={{ width: "100%" }}></hr>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <i className="fa fa-calendar" style={{ color: "grey" }}></i>
                      <a style={{ color: "red" }}>Lecture</a>
                      <p className="course-status-font">
                        CS4550.12631.202410
                        <p className="course-status-font">
                          Sep 11 at 11: 45am</p>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <i className="fa fa-calendar" style={{ color: "grey" }}></i>
                      <a style={{ color: "red" }}>CS5610 06 SP23
                        Lecture</a>
                      <p className="course-status-font">
                        CS4550.12631.202410</p>
                      <p className="course-status-font">
                        Sep 11 at 6pm</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <i className="fa fa-calendar" style={{ color: "grey" }}></i>
                      <a style={{ color: "red" }}>CS5610 Web
                        Development</a>
                      <p className="course-status-font">
                        CS4550.12631.202410</p>
                      <p className="course-status-font">
                        Sep 11 at 7pm</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

  );
}
export default Home;