import React, {useState, useEffect} from 'react'
import './UserForm.css' // Importing CSS file

const UserForm = ({user, onSubmit}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
  })

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        department: user.department,
      })
    } else {
      setFormData({name: '', email: '', department: ''})
    }
  }, [user])

  const handleChange = e => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    const newUser = {...formData, id: user ? user.id : Date.now()} // Simulate ID for new user
    onSubmit(newUser)
  }

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="First Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="department"
        placeholder="Department"
        value={formData.department}
        onChange={handleChange}
        required
      />
      <button type="submit">{user ? 'Update User' : 'Add User'}</button>
    </form>
  )
}

export default UserForm
