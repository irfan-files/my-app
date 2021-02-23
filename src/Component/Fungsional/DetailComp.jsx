import React from 'react'
import { Jumbotron, Button } from 'reactstrap';

function DetailComp(props) {
    return (

        <div>
            <Jumbotron>
                <h1 className="display-3">{props.location.state.judul}</h1>
                <p className="lead">{props.location.state.tanggal}</p>
                <hr className="my-2" />
                <p>{props.location.state.keterangan}</p>
                <p className="lead">
                <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>
        </div>

    )
}

export default DetailComp
