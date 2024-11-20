const API_BASE_URL = 'http://localhost:5000/api' // Base URL for your local API

// Fetch Users
export const fetchUsers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/users`)
    if (!response.ok) {
      throw new Error('Failed to fetch users')
    }
    return await response.json() // Assuming the response is a JSON object
  } catch (error) {
    console.error(error)
    return [] // Return an empty array in case of error
  }
}

// Delete User
export const deleteUser = async id => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${id}`, {
      method: 'DELETE',
    })
    if (!response.ok) {
      throw new Error('Failed to delete user')
    }
    return await response.json() // Response from the delete operation
  } catch (error) {
    console.error(error)
  }
}
