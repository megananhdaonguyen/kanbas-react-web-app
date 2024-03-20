import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "../Courses/Navigation"
import "../Courses/index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from "react-router-dom";
import Home from "../Courses/Home";
import Modules from "../Courses/Modules";
import Assignments from "./Assignments";

function Courses({ courses }: { courses: any[]; }) {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    const { pathname } = useLocation();
    return (
        <div>
                <h4 style={{ color: 'red' }}><HiMiniBars3 /> Course {course?.name}</h4>
                <h4> <FontAwesomeIcon icon={faChevronRight} /> {pathname.substring(22)} </h4>
                <hr></hr>
            <CourseNavigation />
            <div>
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{ left: "320px", top: "50px" }} >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Piazza" element={<h1><b>Piazza</b></h1>} />
                        <Route path="Assignments" element={<Assignments/>} />
                        <Route path="Assignments/:assignmentId" element={<h1><b>Assignment Editor</b></h1>} />
                        <Route path="Grades" element={<h1><b>Grades</b></h1>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
export default Courses;