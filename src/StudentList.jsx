function StudentList({ students }) {
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

export default StudentList;