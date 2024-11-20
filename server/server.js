const express = require('express');  
const cors = require('cors');  
const bodyParser = require('body-parser');  

const app = express();  
const PORT = 5000;  

app.use(cors());  
app.use(bodyParser.json());  

// Sample user data  
let users = [  
    { id: 1, name: 'John Doe' },  
    { id: 2, name: 'Jane Smith' },  
    { id: 3, name: 'Alice Johnson' }  
];  

// Fetch all users  
app.get('/api/users', (req, res) => {  
    res.json(users);  
});  

// Delete user by ID  
app.delete('/api/users/:id', (req, res) => {  
    const { id } = req.params;  
    users = users.filter(user => user.id !== parseInt(id));  
    res.json({ message: `User with ID ${id} deleted` });  
});  

// Start the server  
app.listen(PORT, () => {  
    console.log(`Server is running on http://localhost:${PORT}`);  
});