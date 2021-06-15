import React,{useState,useEffect} from "react";

import {useHistory} from 'react-router-dom'

import ReactFireBase64 from "react-file-base64";
import { Form, Button } from "react-bootstrap";

import {updateMemory,fetchMemory} from '../Axios/index.js'

const UpdateMemory = ({id}) => {

    const [memoryData,setMemoryData]=useState({
        title:'',
        content:'',
        creator:'',
        image:''
    })

    useEffect(() => {

        const getMemo = async () => {
            const {data} = await fetchMemory(id)
            setMemoryData(data)
        }

        getMemo()
    },[id])


    const history = useHistory()

  return (
    <Form onSubmit={(e) => {
        e.preventDefault()
        updateMemory(id,memoryData)

        history.push('/')
        
    }}>
      <Form.Group>
        <h1>Update memory</h1>
      </Form.Group>
      
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control  value={memoryData.title} name={"title"} type={"text"} onChange={(e)=>setMemoryData({...memoryData,title:e.target.value})}></Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Creator</Form.Label>
        <Form.Control value={memoryData.creator} name={"creator"} type={"text"} onChange={(e)=>setMemoryData({...memoryData,creator:e.target.value})}></Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Memory</Form.Label>
        <Form.Control value={memoryData.content} name={"content"} type={"text"} as={'textarea'} rows={6} onChange={(e)=>setMemoryData({...memoryData,content:e.target.value})}></Form.Control>
      </Form.Group>

      <Form.Group>
          <img src={memoryData.image} width={100}/>
          <br />
          <ReactFireBase64 type='file' multiple={false} onDone={({base64}) => {
              setMemoryData({...memoryData,image:base64})
          }}/>
      </Form.Group>

      <Button type='submit' block>Update Memory</Button>

    </Form>
  );
};

export default UpdateMemory;
