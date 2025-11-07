import React, { useState, useMemo } from 'react'
import './styles/lab-styles.css'
import StudentForm from './components/StudentForm'
import StudentControls from './components/StudentControls'
import StudentList from './components/StudentList'

const initialStudents = [
  { id: 1, name: 'Ali', grade: 85 },
  { id: 2, name: 'Siti', grade: 72 },
  { id: 3, name: 'Rahim', grade: 55 }
]

export default function App() {
  const [students, setStudents] = useState(initialStudents)
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [sortOrder, setSortOrder] = useState('high-low')

  function addStudent(newStudent) {
    setStudents(prev => [newStudent, ...prev])
  }

  function deleteStudent(id) {
    setStudents(prev => prev.filter(s => s.id !== id))
  }
 
  const visibleStudents = useMemo(() => {
    const term = search.trim().toLowerCase()
    let list = students.slice()

    if (filter === 'pass') list = list.filter(s => s.grade >= 60)
    if (filter === 'fail') list = list.filter(s => s.grade < 60)

    if (term) {
      list = list.filter(s => s.name.toLowerCase().includes(term))
    }

    list.sort((a, b) => (sortOrder === 'high-low' ? b.grade - a.grade : a.grade - b.grade))

    return list
  }, [students, filter, search, sortOrder])

  return (
    <div className="app">
      <h1 className="header">Student Dashboard</h1>

      <StudentForm onAdd={addStudent} existingStudents={students} />

      <StudentControls
        filter={filter}
        onFilterChange={setFilter}
        search={search}
        onSearchChange={setSearch}
        sortOrder={sortOrder}
        onSortToggle={() => setSortOrder(prev => (prev === 'high-low' ? 'low-high' : 'high-low'))}
      />

      <StudentList
        students={visibleStudents}
        onDelete={deleteStudent}
        searchTerm={search}
      />
    </div>
  )
}
