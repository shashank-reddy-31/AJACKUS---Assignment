import React, {useEffect, useState} from 'react'
// Adjusted the import path
import {fetchUsers, deleteUser} from '../api'
import UserForm from '../UserForm/UserForm' // Adjusted import for UserForm
import './UserList.css' // Importing CSS file

const UserList = () => {
  const [users, setUsers] = useState([])
  const [editingUser, setEditingUser] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsers()
        setUsers(data)
      } catch (err) {
        setError('Failed to fetch users')
      }
    }
    getUsers()
  }, [])

  const handleDelete = async id => {
    try {
      await deleteUser(id)
      setUsers(users.filter(user => user.id !== id))
    } catch {
      setError('Failed to delete user')
    }
  }

  const handleEdit = user => {
    setEditingUser(user)
  }

  const handleFormSubmit = user => {
    setEditingUser(null)
    setUsers(users.map(u => (u.id === user.id ? user : u)))
  }

  return (
    <div className="user-list">
      <h1>User Management</h1>
      {error && <div className="error-message">{error}</div>}
      <UserForm user={editingUser} onSubmit={handleFormSubmit} />
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email} - {user.department}
            <div>
              <button onClick={() => handleEdit(user)}>Edit</button>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
