import React from 'react'

function ProfileInfo({user}) {

  console.log(user.reservations)

  const res = user.reservations.map((r) => (
    <li>{r.check_in}-{r.check_out}</li>
  ))

  console.log(res)

  return (
    <ul>
      <li>{res}</li>
    </ul>
  )
}

export default ProfileInfo