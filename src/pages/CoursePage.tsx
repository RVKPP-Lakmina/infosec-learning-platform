import CourseContentPage from "./CourseContent";

const CoursePage = () => {
  return <CourseContentPage />;
  //   <>
  //     <section>
  //       <div className="backSec">
  //         <Link to="/courses" className="back">
  //           Back to All Courses
  //         </Link>
  //       </div>
  //     </section>

  //     {!course ? (
  //       <div>Course not found!</div>
  //     ) : (
  //       <section className="mainSection">
  //         <div className="courseContainer">
  //           <div className="courseGrid">
  //             <main>
  //               <div className="courseCard">
  //                 <div className="courseType">{course.type}</div>
  //                 <h1 className="courseHeading">{course.title}</h1>
  //               </div>

  //               <div className="courseDetailsCard">
  //                 <h3 className="courseCard2Head">Course Description</h3>

  //                 <p className="courseDetails">{course.description}</p>

  //                 <h3 className="courseCard2Head">Time</h3>

  //                 <p className="courseDetails">{course.time}</p>
  //               </div>
  //             </main>

  //             {/* <!-- Sidebar -->
  //           <aside>
  //             <div className='bg-white p-6 rounded-lg shadow-md'>
  //               <h3 className='text-xl font-bold mb-6'>Company Info</h3>

  //               <h2 className='text-2xl'>{course.company.name}</h2>

  //               <p className='my-2'>{course.company.description}</p>

  //               <hr className='my-4' />

  //               <h3 className='text-xl'>Contact Email:</h3>

  //               <p className='my-2 bg-indigo-100 p-2 font-bold'>
  //                 {course.company.contactEmail}
  //               </p>

  //               <h3 className='text-xl'>Contact Phone:</h3>

  //               <p className='my-2 bg-indigo-100 p-2 font-bold'>
  //                 {' '}
  //                 {course.company.contactPhone}
  //               </p>
  //             </div>

  //           </aside>*/}
  //           </div>
  //         </div>
  //       </section>
  //     )}
  //   </>
  // );
};

export default CoursePage;
