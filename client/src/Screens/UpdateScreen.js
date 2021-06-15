import React from 'react'
import UpdateMemory from '../Components/UpdateMemory.js'

import {Container} from 'react-bootstrap'
import {useParams} from 'react-router-dom'

const UpdateScreen = () => {
    const { id } = useParams()

    return (
        <Container>
            <UpdateMemory id={id} />
        </Container>
    )
}

export default UpdateScreen
