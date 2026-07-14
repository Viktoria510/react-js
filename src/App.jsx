
/*function App() {
  const students = ["Rahim", "Karim", "Jamal"];

  return (
    <div>
      {students.map((student, index) => (
        <h2 key={index}>{student}</h2>
      ))}
    </div>
  );
}

export default App;
import React from "react";

function App() {
  const students = [
    "Rahim",
    "Karim",
    "Sakib",
    "Hasan",
    "Nayeem",
    "Rafi"
  ];

  return (
    <div>
      {students.slice(0, 2).map((student, index) => (
        <h2 key={index}>{student}</h2>
      ))}
    </div>
  );
}

export default App;
import React from "react";

function App() {
  const students = [
    "Rahim",
    "Karim",
    "Sakib",
    "Hasan",
    "Nayeem",
    "Rafi"
  ];
  const showStudents = ["Rahim", "Hasan"];

  return (
    <div>
      {students
        .filter((student) => showStudents.includes(student))
        .map((student, index) => (
          <h2 key={index}>{student}</h2>
        ))}
    </div>
  );
}

export default App;
import React from "react";

function App() {
  const students = [
    "Rahim",
    "Karim",
    "Sakib",
    "Hasan",
    "Nayeem",
    "Rafi"
  ];
  
  return (
    <div>
      {students
        .filter((student) => student !== "Rahim" && student !== "Hasan")
        .map((student, index) => (
          <h2 key={index}>{student}</h2>
        ))}
    </div>
  );
}

export default App;

import React from 'react';

function App() {
  const students = [
    {
      name: "Rahim",
      age: 20,
      city: "Dhaka"
    },
    {
      name: "Karim",
      age: 22,
      city: "Chittagong"
    },
    {
      name: "Jamal",
      age: 21,
      city: "Khulna"
    }
  ];

  return (
    <div>
      {students.map((student, index) => (
        <div key={index}>
          <h2>{student.name}</h2>
          <p>Age: {student.age}</p>
          <p>City: {student.city}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
import StudentList from "./StudentList";

function App() {
  const students = ["Rahim", "Karim", "Jamal"];

  return (
    <StudentList students={students} />
  );
}

export default App;

 import StudentList from "./StudentList";

function App() {
  const students = [
    {
      name: "Rahim",
      age: 20,
      city: "Dhaka"
    },
    {
      name: "Karim",
      age: 22,
      city: "Chittagong"
    },
    {
      name: "Jamal",
      age: 21,
      city: "Khulna"
    }
  ];

  return (
    <StudentList students={students} />
  );
}

export default App;*/
import React from 'react';
import ProductList from './ProductList';

function App() {
  return (
    <div style={{ backgroundColor: '#fff0f5', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
    
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '15px 30px', 
        borderBottom: '2px solid #ffb6c1',
        backgroundColor: '#ffe4e1'
      }}>
        <div style={{ color: '#db7093', fontWeight: 'bold', fontSize: '20px' }}>
          MyShop
        </div>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <span style={{ color: '#c71585', cursor: 'pointer' }}>Home</span>
          <span style={{ color: '#c71585', cursor: 'pointer' }}>Products</span>
          <span style={{ color: '#c71585', cursor: 'pointer' }}>Contact</span>
        </nav>
      </header>

      <div style={{ padding: '30px' }}>
        <h1 style={{ color: '#db7093', marginBottom: '30px', textAlign: 'center' }}>Product List</h1>
        <ProductList />
      </div>

    </div>
  );
}

export default App;