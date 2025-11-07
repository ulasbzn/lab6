import React from 'react'
import StudentItem from './StudentItem'

export default function StudentList({ students, onDelete, searchTerm }) {
  if (!students || students.length === 0) {
    if (searchTerm && searchTerm.trim() !== '') {
      return (
        <p className="no-data">No students match "<em>{searchTerm}</em>"</p>
      )
    }
    return <p className="no-data">No students yet - use the form above.</p>
  }

  return (
    <ul className="student-list">
      {students.map(student => (
        <StudentItem key={student.id} student={student} onDelete={onDelete} />
      ))}
    </ul>
  )
}
