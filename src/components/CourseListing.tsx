import { useState } from "react";
import { Link } from "react-router-dom";
{
  /*import Course from '../models/Courses'*/
}
import "./CourseListing.css";

const CourseListing = ({ course }: any) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = course.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }
  return (
    <div className="card">
      <div className="padding">
        <div className="margin">
          <div className="type">{course.type}</div>
          <h3 className="title">{course.title}</h3>
        </div>

        <div className="margin">{description}</div>

        <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className="state margin"
        >
          {showFullDescription ? "Less" : "More"}
        </button>

        <h3 className="state margin">{course.time}</h3>

        <div className="border"></div>

        <div className="button">
          <Link to={`/courses/${course.id}`} className="readMore">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseListing;
