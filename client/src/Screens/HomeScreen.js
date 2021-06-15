import React, { useState, useEffect } from "react";
import Memory from '../Components/Memory.js'

import {Spinner,Row,Col} from 'react-bootstrap'
import { fetchMemories } from "../Axios/index.js";

const HomeScreen = () => {
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    const getMemories = async () => {

      const { data } = await fetchMemories();
      setMemories(data);

    };

    getMemories();
  }, []);
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
