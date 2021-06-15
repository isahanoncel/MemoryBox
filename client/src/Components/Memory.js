import React from "react";
import moment from 'moment'

import {MdDelete, MdModeEdit} from 'react-icons/md'

import {Card} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'


import {useDispatch} from 'react-redux'
import {deleteMemory} from '../Actions/memoryActions'

const Memory = ({ memory }) => {

  const dispatch = useDispatch()

  return (
    <Card className='rounded py-3 my-3'>
      <Card.Img variant="top" src={memory.image} />
      <Card.Body>
        <Card.Title>{memory.title}</Card.Title>
        <Card.Text>
          {memory.content}
        </Card.Text>
        <Card.Title>Author : {memory.creator}</Card.Title>
        <Card.Subtitle>{moment(memory.createdAt).fromNow() }</Card.Subtitle>
      </Card.Body>

      <Card.Footer className="bg-white pb-0 d-flex justify-content-between">
        <LinkContainer  to={`/update/${memory._id}`} style={{cursor:'pointer'}}>
            <MdModeEdit color='blue' size={25}/>
        </LinkContainer>
            <MdDelete color='red' style={{cursor:'pointer'}} size={25} onClick={() => dispatch(deleteMemory(memory._id))}/>
      </Card.Footer>

    </Card>
  );
};

export default Memory;
