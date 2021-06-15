import React,{useState} from "react";

import {useHistory} from 'react-router-dom'

import {useDispatch} from 'react-redux'
import {createMemory} from '../Actions/memoryActions'

import ReactFireBase64 from "react-file-base64";
import { Form, Button } from "react-bootstrap";

const SubmitMemory = () => {

    const [memoryData,setMemoryData]=useState({
        title:'',
        content:'',
        creator:'',
        image:''
    })

    const history = useHistory()
    const dispatch = useDispatch()

  return (
    <Form onSubmit={(e) => {
        e.preventDefault()
        if(memoryData.title && memoryData.content && memoryData.creator){
          dispatch(createMemory(memoryData))
          history.push('/')
        }
        
    }}>
      <Form.Group>
        <h1>Create a memory</h1>
      </Form.Group>
      
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control name={"title"} type={"text"} onChange={(e)=>setMemoryData({...memoryData,title:e.target.value})}></Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Creator</Form.Label>
        <Form.Control name={"creator"} type={"text"} onChange={(e)=>setMemoryData({...memoryData,creator:e.target.value})}></Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Memory</Form.Label>
        <Form.Control name={"content"} type={"text"} as={'textarea'} rows={6} onChange={(e)=>setMemoryData({...memoryData,content:e.target.value})}></Form.Control>
      </Form.Group>

      <Form.Group>
          <ReactFireBase64 type='file' multiple={false} onDone={({base64}) => {
              setMemoryData({...memoryData,image:base64})
          }}/>
      </Form.Group>

      <Button type='submit' block>Create Memory</Button>

    </Form>
  );
};

export default SubmitMemory;
