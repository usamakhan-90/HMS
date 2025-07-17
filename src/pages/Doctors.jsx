import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

function Doctors() {
  const navigate = useNavigate();
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);

  // 👇 Dynamic route navigation
  const handleNavigate = (speciality) => {
    if (!speciality || speciality === '') {
      navigate('/doctors');
    } else {
      navigate(`/doctors/${encodeURIComponent(speciality)}`);
    }
  };

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  const categories = [
    "General physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist"
  ];

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctor specialist</p>

      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        {/* Left Sidebar */}
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          {categories.map((cat) => (
            <p
              key={cat}
              onClick={() => handleNavigate(cat)}
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
                speciality === cat ? 'bg-blue-100 border-blue-400' : ''
              }`}
            >
              {cat}
            </p>
          ))}
        </div>

        {/* Doctor Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6'>
          {filterDoc.map((doctor, index) => (
            <div
              key={index}
              onClick={() => navigate(`/appointement/${doctor._id}`)}
              className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
            >
              <img className='bg-blue-50' src={doctor.image} alt="" />
              <div className='p-4'>
                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                  <p className='size-2 bg-green-500 rounded-full'></p>
                  <p>Available</p>
                </div>
                <p className='text-gray-900 text-lg font-medium'>{doctor.name}</p>
                <p className='text-gray-600 text-sm'>{doctor.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Doctors;
