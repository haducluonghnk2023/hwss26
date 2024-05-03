import React from 'react'

export default function B6() {
    const user = {
        firstName: 'Nguyễn Văn',
        lastName: 'A'
    }
    const formatName = (user:any) => {
        return `${user.firstName} ${user.lastName}`
    }
  return (
    <div>
        <h1>B6</h1>
        <p>Họ và tên : {formatName(user)}</p>
    </div>
  )
}
