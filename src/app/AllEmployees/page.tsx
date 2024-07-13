"use client";
import React, { useState, useRef } from 'react';
import Navbar from '../Components/Navbar';
import { CircleUserRound, BookText, BriefcaseBusiness, LockKeyhole, Camera } from 'lucide-react';

const tabs = [
  { name: 'Personal Information', id: 'personal', icon: <CircleUserRound className="mr-2" /> },
  { name: 'Professional Information', id: 'professional', icon: <BriefcaseBusiness className="mr-2" /> },
  { name: 'Documents', id: 'documents', icon: <BookText className="mr-2" /> },
  { name: 'Account Access', id: 'access', icon: <LockKeyhole className="mr-2" /> },
];

const EmployeeForm = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="py-4 p-4 sm:ml-64">
      <div className="stats shadow rounded-lg dark:border-gray-700 w-full ">
        <Navbar />
      </div>

      <div className="tabs form-container p-4 shadow rounded-lg bg-white mt-4">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab tab-bordered flex items-center ${activeTab === tab.id ? 'tab-active text-blue-500 border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon && tab.icon}
            {tab.name}
          </button>
        ))}
      </div>

      <div className="form-container p-4 shadow rounded-lg bg-white mt-4">
        {activeTab === 'personal' && (
          <form>
            <div className="flex flex-col items-center mb-4">
              <button
                type="button"
                onClick={handleButtonClick}
                className="flex items-center justify-center h-16 w-16 rounded-full border border-gray-300 bg-white"
              >
                <Camera className="h-8 w-8 text-gray-400" />
              </button>
              <input type="file" ref={fileInputRef} className="hidden" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">First Name</label>
                <input type="text" className="input input-bordered w-full bg-white" />
              </div>
              <div>
                <label className="block mb-1">Last Name</label>
                <input type="text" className="input input-bordered w-full bg-white" />
              </div>
              <div>
                <label className="block mb-1">Phone Number</label>
                <input type="text" className="input input-bordered w-full bg-white" />
              </div>
              <div>
                <label className="block mb-1">Email Address</label>
                <input type="email" className="input input-bordered w-full bg-white" />
              </div>
              <div>
                <label className="block mb-1">Date of Birth</label>
                <input type="date" className="input input-bordered w-full bg-white" />
              </div>
              <div>
                <label className="block mb-1">Marital Status</label>
                <select className="select select-bordered w-full bg-white">
                  <option>Single</option>
                  <option>Married</option>
                </select>
              </div>
              <div>
                <label className="block mb-1">Gender</label>
                <select className="select select-bordered w-full bg-white">
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div>
                <label className="block mb-1">Nationality</label>
                <input type="text" className="input input-bordered w-full bg-white" />
              </div>
              <div className='col-span-2'>
                <label className="block mb-1">Address</label>
                <input type="text" className="input input-bordered w-full bg-white" />
              </div>
            </div>    
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <label className="block mb-1">City</label>
                <input type="text" className="input input-bordered w-full bg-white" />
              </div>
              <div>
                <label className="block mb-1">State</label>
                <input type="text" className="input input-bordered w-full bg-white" />
              </div>
              <div>
                <label className="block mb-1">ZIP Code</label>
                <input type="text" className="input input-bordered w-full bg-white" />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button type="button" className="btn btn-light text-gray-500 bg-white border border-gray-300 mr-2">Close</button>
              <button type="submit" className="btn bg-blue-500 text-white">Next</button>
            </div>
          </form>
        )}
        {activeTab === 'professional' && (
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className='col-span-2'>
                <label className="block mb-1">Employee ID</label>
                <input type="text" className="input input-bordered w-full" />
              </div>
              <div>
                <label className="block mb-1">User Name</label>
                <input type="text" className="input input-bordered w-full" />
              </div>
              <div>
                <label className="block mb-1">Password</label>
                <input type="password" className="input input-bordered w-full" />
              </div>
              <div>
                <label className="block mb-1">Select Employee Type</label>
                <select className="select select-bordered w-full">
                  <option>CEO</option>
                  <option>SEO</option>
                  <option>FRONT END - DEV</option>
                  <option>BACK END - DEV</option>
                  <option>IT Support</option>
                </select>
              </div>
              <div>
                <label className="block mb-1">Email Address </label>
                <input type="text" className="input input-bordered w-full" />
              </div>
              <div>
                <label className="block mb-1">Select Department</label>
                <select className="select select-bordered w-full">
                  <option>Web Developer</option>
                  <option>POS Developer</option>
                </select>
              </div>
              <div>
                <label className="block mb-1">Enter Designation</label>
                <input type="text" className="input input-bordered w-full" />
              </div>
              <div>
                <label className="block mb-1">Select Working Days</label>
                <select className="select select-bordered w-full">
                  <option>30</option>
                  <option>60</option>
                </select>
              </div>
              <div>
                <label className="block mb-1">Select Joining Date</label>
                <input type="date" className="input input-bordered w-full bg-white" />
              </div>
              <div className='col-span-2'> 
                <label className="block mb-1">Select Office Location</label>
                <input type="text" className="input input-bordered w-full" />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button type="button" className="btn btn-light text-gray-500 bg-white border border-gray-300 mr-2">Close</button>
              <button type="submit" className="btn bg-blue-500 text-white">Next</button>
            </div>
          </form>
        )}
        {activeTab === 'documents' && (
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-2 md:col-span-1 flex flex-col items-center mb-4">
                <label className="block mb-1">Upload Appointment Letter</label>
                <div className="flex items-center justify-center h-40 w-full rounded-lg border border-dashed border-gray-300">
                  <div className="text-center">
                    <button type="button" onClick={handleButtonClick} className="flex items-center justify-center h-16 w-16 mx-auto">
                      <Camera className="h-8 w-8 text-gray-400" />
                    </button>
                    <input type="file" ref={fileInputRef} className="hidden" />
                    <p>Drag & Drop or <span className="text-blue-500 cursor-pointer" onClick={handleButtonClick}>choose file</span> to upload</p>
                    <p>Supported file formats: .jpeg, .pdf</p>
                  </div>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1 flex flex-col items-center mb-4">
                <label className="block mb-1">Upload Salary Slips</label>
                <div className="flex items-center justify-center h-40 w-full rounded-lg border border-dashed border-gray-300">
                  <div className="text-center">
                    <button type="button" onClick={handleButtonClick} className="flex items-center justify-center h-16 w-16 mx-auto">
                      <Camera className="h-8 w-8 text-gray-400" />
                    </button>
                    <input type="file" ref={fileInputRef} className="hidden" />
                    <p>Drag & Drop or <span className="text-blue-500 cursor-pointer" onClick={handleButtonClick}>choose file</span> to upload</p>
                    <p>Supported file formats: .jpeg, .pdf</p>
                  </div>
                </div>
              </div>
              <div className="col-span-2 flex flex-col items-center mb-4">
                <label className="block mb-1">Upload Relieving Letter</label>
                <div className="flex items-center justify-center h-40 w-full rounded-lg border border-dashed border-gray-300">
                  <div className="text-center">
                    <button type="button" onClick={handleButtonClick} className="flex items-center justify-center h-16 w-16 mx-auto">
                      <Camera className="h-8 w-8 text-gray-400" />
                    </button>
                    <input type="file" ref={fileInputRef} className="hidden" />
                    <p>Drag & Drop or <span className="text-blue-500 cursor-pointer" onClick={handleButtonClick}>choose file</span> to upload</p>
                    <p>Supported file formats: .jpeg, .pdf</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button type="button" className="btn btn-light text-gray-500 bg-white border border-gray-300 mr-2">Close</button>
              <button type="submit" className="btn bg-blue-500 text-white">Next</button>
            </div>
          </form>
        )}
        {activeTab === 'access' && (
        <form>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div> 
                <label className="block mb-1">Enter Email Address</label>
                <input type="text" className="input input-bordered w-full" />
              </div>
              <div> 
                <label className="block mb-1">Enter Discode ID</label>
                <input type="text" className="input input-bordered w-full" />
              </div>
              <div> 
                <label className="block mb-1">Enter Line ID</label>
                <input type="text" className="input input-bordered w-full" />
              </div>
              <div> 
                <label className="block mb-1">Enter Github ID</label>
                <input type="text" className="input input-bordered w-full" />
              </div>
          </div>
          <div className="flex justify-end mt-4">
              <button type="button" className="btn text-gray-500 bg-white border border-gray-300 mr-2">Close</button>
              <button type="submit" className="btn bg-blue-500 text-white">Next</button>
            </div>
        </form>
        )}
      </div>
    </div>
  );
};

export default EmployeeForm;
