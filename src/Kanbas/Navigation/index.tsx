import { Link, useLocation } from "react-router-dom";
import "../Navigation/index.css";
import React from 'react'
import "../../index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faTachometer, faCircleUser, faCalendar, faInbox, faClock, faTv, faArrowRight, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'

function KanbasNavigation() {
  const links = [
    { label: "Account", icon: <FontAwesomeIcon icon={faCircleUser} /> },
    { label: "Dashboard", icon: <FontAwesomeIcon icon={faTachometer} /> },
    { label: "Courses", icon: <FontAwesomeIcon icon={faBook} /> },
    { label: "Calendar", icon: <FontAwesomeIcon icon={faCalendar} /> },
    { label: "Inbox", icon: <FontAwesomeIcon icon={faInbox} /> },
    { label: "History", icon: <FontAwesomeIcon icon={faClock} /> },
    { label: "Studio", icon: <FontAwesomeIcon icon={faTv} /> },
    { label: "Commons", icon: <FontAwesomeIcon icon={faArrowRight} /> },
    { label: "Help", icon: <FontAwesomeIcon icon={faCircleQuestion} /> },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation-react">
      <li>
        <a href="http://northeastern.edu">
          N
        </a>
      </li>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} <br></br> {link.label} </Link> 
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;