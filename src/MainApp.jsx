import React, { useState } from 'react'
import Authentication from './screens/Authentication'
import App from './App'

const MainApp = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

    return (
        JSON.parse(localStorage.getItem("user")) === null ? <Authentication setUser={setUser} user={user} /> : <App user={user} setUser={setUser} />
    )
}

export default MainApp