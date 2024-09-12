// import { useState } from 'react';
// import JobCard from './JobCard';
// import JobDetails from './JobDetails';

// export default function AvailableJobs({ dataJobs }) {
//   const onBookmarkClickHandler = (id) => {
//     dataJobs.map((job) => {
//       job.id == id ? { ...job, bookmarked: !job.bookmarked } : job;
//     });
//     console.log(dataJobs[id]);
//   };

//   return (
//     <section className="container mx-auto xl:px-32">
//       <ul className="p-4 grid lg:grid-cols-2 gap-4 bg-white rounded-lg">
//         {dataJobs.map((job, idx) => (
//           <JobCard key={job.id} job={job} savedInit={job?.saved?.length > 0} />
//         ))}
//       </ul>
//       {/* <section className="md:col-span-2 hidden md:block bg-white rounded-lg p-4 ">
//         <JobDetails
//           job={dataJobs[jobIndex]}
//           onBookmarkClick={onBookmarkClickHandler}
//         />
//       </section> */}
//     </section>
//   );
// }
