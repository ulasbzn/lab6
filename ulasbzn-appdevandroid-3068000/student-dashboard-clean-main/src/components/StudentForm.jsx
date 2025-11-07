import React, { useState } from 'react'

export default function StudentForm({ onAdd, existingStudents = [] }) {
  const [name, setName] = useState('')
  const [grade, setGrade] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setError('')
    const trimmed = name.trim()
    if (!trimmed) {
      setError('Name is required')
      return
    }
    const num = Number(grade)
    if (Number.isNaN(num) || num < 0 || num > 100) {
      setError('Grade must be a number between 0 and 100')
      return
    }

  const exists = existingStudents.some(s => s.name.toLowerCase() === trimmed.toLowerCase())
    if (exists) {
      setError('A student with that name already exists')
      return
    }

    const newStudent = { id: Date.now(), name: trimmed, grade: num }
    onAdd(newStudent)
    setName('')
    setGrade('')
  }

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <input
        className="input"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        className="input input-grade"
        placeholder="Grade"
        value={grade}
        onChange={e => setGrade(e.target.value)}
      />
      <button className="btn" type="submit">
        Add
      </button>
      {error && <span className="form-error">{error}</span>}
    </form>
  )
}
