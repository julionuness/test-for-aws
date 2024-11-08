import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';

function Contacts() {

const [users, setUsers] = useState([]);

  useEffect(()=> {
    const restCall = async () => {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users")
      const dados = await resp.json();
      const ordena = [...dados];

      ordena.sort((a, b) => {
        return a.name.localeCompare(b.name)
      })

      setUsers(ordena);
    
    }
    restCall();
  }, [])


    return (
        <div style={{background:"#272727"}}>
            <center>
            <h1 style={{color: "white"}}>🥇Top Buyers🥇</h1>
            </center>
            <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>Position</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Company</th>
                <th>City</th>
                </tr>
            </thead>
            <tbody>
            {users.map((user, index)=> (
                <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>@{user.username}</td>
                    <td>📩 {user.email}</td>
                    <td>🌐 {user.company.name}</td>
                    <td>📍 {user.address.city}</td>
                </tr>
            ))}      
            </tbody>
            </Table>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
}

export default Contacts;