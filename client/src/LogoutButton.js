function LogoutButton({setUser}) {

    const handleLogout = () =>{
        fetch('/logout',{method:"DELETE"}).then().then(console.log)
        setUser(null)
    }



  return (
        <button onClick={handleLogout}>Logout</button>
  )
}

export default LogoutButton