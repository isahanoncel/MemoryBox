import React, { useState, useEffect } from "react";
import Memory from '../Components/Memory.js'

import {Spinner,Row,Col} from 'react-bootstrap'

import { useDispatch,useSelector } from "react-redux";
import { fetchMemories } from "../Actions/memoryActions";

const HomeScreen = () => {

  const dispatch = useDispatch()

  const memories = useSelector((state) => state.memories)


  useEffect(() => {
    if(!memories[0])
      dispatch(fetchMemories())
      
  },[dispatch])

 
  return (
      <>
        <h1>Memories</h1>
        {
            !memories.length ? <Spinner animation='border'/> :
            <Row>
                {
                    memories.map((memory)=>(
                        <Col
                        key={memory._id}
                        sm={12}
                        md={6}
                        lg={4}
                        xl={3}
                        className='m-auto'
                        >
                            <Memory memory={memory}/>
                        </Col>
                    ))
                }
            </Row>
            
        }
      </>
  );
};

export default HomeScreen;
