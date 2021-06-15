import React from "react";
import ReactFireBase64 from "react-file-base64";
import { Form, Button } from "react-bootstrap";

const SubmitMemory = () => {
  return (
    <Form>
      <Form.Group>
        <h1>Create a memory</h1>
      </Form.Group>
      
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control name={"title"} type={"text"}></Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Creator</Form.Label>
        <Form.Control name={"creator"} type={"text"}></Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Memory</Form.Label>
        <Form.Control name={"content"} type={"text"} as={'textarea'} rows={6}></Form.Control>
      </Form.Group>

      <Form.Group>
          <ReactFireBase64 type='file' multiple={false} onDone={() => {}}/>
      </Form.Group>

      <Button type='submit' block>Create Memory</Button>

    </Form>
  );
};

export default SubmitMemory;
