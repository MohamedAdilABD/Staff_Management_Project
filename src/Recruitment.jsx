import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
// import { Linkedin, MessageCircle, File } from 'lucide-react';

// function Card() {
//     return (
//         <div className="flex flex-col gap-4 divide-y divide-slate-300 border rounded-xl p-3">
//             <div className="flex items-center gap-2">
//                 <img src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" className="rounded-full w-12 h-12" />
//                 <div className="flex flex-col gap-1">
//                     <h1 className="font-semibold">Mohamed</h1>
//                     <p className="text-sm font-light text-slate-400">Mohamed@gmail.com</p>
//                 </div>
//             </div>
//             <div className="flex items-center justify-between">
//                 <span className="flex items-center gap-1 pt-3 text-xs">
//                     <Linkedin size={15} />
//                     <p className="">LinkedIn</p>
//                 </span>

//                 <span className="flex items-center gap-1 pt-3 text-xs">
//                     <File size={15} />
//                     <p className="">4</p>
//                 </span>
//                 <span className="flex items-center gap-1 pt-3 text-xs">
//                     <MessageCircle size={15} />
//                     <p className="">6</p>
//                 </span>
//             </div>
//         </div>
//     )
// }

// export default function Requitment() {
//   return (
//     <>
//     <Navbar />
//     <Sidebar/>

//     <div className="flex flex-col gap-3 items-center mt-[7rem] mx-auto w-full justify-center">
//         <div className="flex gap-5 w-[60%] ml-[20%] justify-between">
//             <h1 className="py-1 px-4 bg-blue-300 rounded">Sourced</h1>
//             <h1 className="py-1 px-4 bg-yellow-300/50 rounded">In Progress</h1>
//             <h1 className="py-1 px-4 bg-purple-300 rounded">Interview</h1>
//             <h1 className="py-1 px-4 bg-green-300 rounded">Hired</h1>
//         </div>
//         <div className="flex gap-5 w-[60%] ml-[20%] justify-between">
//             <div className="flex flex-col items-center gap-4">
//                 <Card />
//                 <Card />
//                 <Card />
//             </div>
//             <div className="flex flex-col items-center gap-4">
//                 <Card />
//                 <Card />
//                 <Card />
//             </div>
//             <div className="flex flex-col items-center gap-4">
//                 <Card />
//                 <Card />
//                 <Card />
//             </div>
//             <div className="flex flex-col items-center gap-4">
//                 <Card />
//                 <Card />
//                 <Card />
//             </div>
//         </div>
        
//     </div>
//     </>
//   )
// }


// // Import React and Bootstrap dependencies
// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const recruitment = () => {
  const columns = [
    { name: "Sourced", color: "primary" },
    { name: "In Progress", color: "warning" },
    { name: "Interview", color: "secondary" },
    { name: "Hired", color: "success" },
  ];



  const candidates = new Array(3).fill({
    name: "Mohamed",
    email: "mohamamed@gmail.com",
    linkedin: "LinkedIn",
    files: 4,
    comments: 6,
  });

  return (
    <>
    <Navbar />
    <Sidebar />
    <div className="container py-5" style={{ marginLeft: "15%"}}>
      <div className="row ">
        {columns.map((column, colIndex) => (
          <div className="col" key={colIndex}>
            <h5 className={`text-${column.color} text-center mb-3`}>{column.name}</h5>
            {candidates.map((candidate, index) => (
              <div className="card mb-3 shadow-sm" style={{width: "85%", margin: "0 auto"}} key={index}>
                <div className="card-body ">
                  <div className="d-flex align-items-center">
                    <div className="avatar me-3">
                      <img
                        src="https://via.placeholder.com/50"
                        alt="Avatar"
                        className="rounded-circle"
                      />
                    </div>
                    <div>
                      <h6 className="card-title mb-0">{candidate.name}</h6>
                      <p className="text-muted small mb-1">{candidate.email}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between small">
                    <a href="#" className="text-decoration-none text-primary">
                      {candidate.linkedin}
                    </a>
                    <div>
                      <i className="bi bi-files"></i> {candidate.files}
                    </div>
                    <div>
                      <i className="bi bi-chat"></i> {candidate.comments}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
    
    </>
  );
};

export default recruitment;
