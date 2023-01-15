import React from 'react'

import Card from 'react-bootstrap/Card';
function CardApi({ users }) {
  return (
    <div>
      <Card  style={{ width: '18rem' , margin:'20px'}}>
      <Card.Body>
      <Card.Title>{users.name} {users.username}</Card.Title>
      <Card.Text>{users.address.street}</Card.Text>
            
      </Card.Body>
    </Card>
    </div>
  )
}

export default CardApi