import React, {useEffect, useState} from 'react'

function ProfileInfo({user}) {

  console.log(user.reservations)

  const res = user.reservations.map((r) => r.check_out)
  console.log(res)

  return (
    <div>All time reservations
      
    </div>
  )
}

export default ProfileInfo