import React, { useEffect, useState } from "react";
import "../../../../src/index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import "./index.css"
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./reducer";
import * as client from "./client";
import { KanbasState } from "../../store";
import { findModulesForCourse, createModule } from "./client";

function ModuleList() {
  const handleDeleteModule = (moduleId: string) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const { courseId } = useParams();
  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
      );
  }, [courseId]);
  const moduleList = useSelector((state: KanbasState) =>
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) =>
    state.modulesReducer.module);
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);
  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  return (
    <>
      <div style={{ textAlign: "right", paddingRight: "10" }}>
        <button>Collapse All</button>
        <button>View Progress</button>
        <select style={{ width: "100px" }}>
          <option>Publish All</option>
          <option>Publish All Modules and Items</option>
          <option>Publish Modules Only</option>
          <option>Unpublish All</option>
        </select>
        <button className="button-module">+Module</button>
        <hr></hr>
      </div>
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <button
            onClick={handleAddModule}>
            Add
          </button>
          <button onClick={handleUpdateModule}>Update</button>
          <input value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            } />
          <textarea value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            } />
        </li>
        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li
              key={index}
              className="list-group-item"
              onClick={() => setSelectedModule(module)}>
              <button
                className="edit-button-module"
                onClick={() => dispatch(setModule(module))}>
                Edit
              </button>
              <button
                onClick={() => handleDeleteModule(module._id)} >
                Delete </button>
              <div>
                <FaEllipsisV className="me-2" />
                {module.name}
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </div>
              {selectedModule && selectedModule?._id === module._id && (
                <ul className="list-group">
                  {module.lessons?.map((lesson: any, index: any) => (
                    <li className="list-group-item" key={index}>
                      <FaEllipsisV className="me-2" />
                      {lesson.name}
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </>
  );
}
export default ModuleList;