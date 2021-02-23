import React, { Component } from 'react'
import './CSS/Produk.css'
import { Button } from 'reactstrap';



class Produk extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stock: this.props.stock,
            sub: "Beli",
            status: "Tersedia",
            disable : false

        }
    }
    
ButtonBeli = () => {
    this.setState ({
        stock: this.state.stock -1
    })

    if(this.state.stock === 1){
        this.setState({
            status: "sold out",
            disable: "true"
        })
    }
}

    render() {
        return (
            <div className="box-stock">
                <h2>{this.props.nama}</h2>
                <img src="https://placeimg.com/640/480/animals" alt=""/>
                <p><b>RP. {this.props.harga}</b> </p>
                <p>{this.state.stock}</p>
                <Button color="danger" onClick={this.ButtonBeli} disabled={this.state.disable}> Beli </Button>
               
                <p>{this.state.status}</p>
            </div>
        )
    }
}

export default Produk