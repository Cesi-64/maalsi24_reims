import React, {useState, useEffect} from 'react';
import { userService } from '../_services'

const Service = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {

            userService.getAllUsers()
                .then(res => {
                    // Liste dans le state
                    setUsers(res.data.data)
                })
                .catch(err => console.log(err))
       

       
        
    }, [])
    return (
        <div className="User">
            User liste       
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Email</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr key={user.id}>
                                <td><span className='del_ubtn' onClick={() => delUser(user.id)}>X</span></td>
                                <td>{user.id}</td>
                                <td>{user.nom}</td>
                                <td>{user.prenom}</td>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Service;