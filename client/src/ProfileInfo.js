import React from 'react'

function ProfileInfo({user}) {

  console.log(user.reservations)

  const res = user.reservations.map((r) => (
    <li>{r.check_in}-{r.check_out}</li>
  ))

  console.log(res)

  return (
    <div>
      <h2>{user.name}'s Reservations</h2>
      <ul><li>{res}</li></ul>
    </div>
  )
}

export default ProfileInfo