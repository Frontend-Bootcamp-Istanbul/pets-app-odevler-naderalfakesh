import React, { Component } from 'react'

export default class DetailsPage extends Component {
    constructor(props){
        super(props);
        this.state={
            pet: {},
            error: false
        }
    }
    componentDidMount(){
        //fetching the id sent with router
        let id = 0;
        if(this.props.location.state)  {id= this.props.location.state.id;}
        // justg for fun url parameter added 
        else { id  = this.props.match.params.id; }
        
        //getting details of pet using it's id
        fetch(`http://5dd7af92505c590014d3b4ac.mockapi.io/pets/${id}` )
        .then((res) => res.json() )
        .then((data) => this.setState({pet: data}) )
        .catch(() => this.setState({error: true}) )
    }

    render() {
        const {name, image, age, description, breed} = this.state.pet;
        // using the same markup of pet component 
        return (
            <div className="d-flex justify-content-center">
               <div className="col-lg-6 col-md-4 mb-4">
                    <div className="card h-100">
                         <img className="card-img-top" src={image} alt="" style={{height: "292px"}}/> 
                        <div className="card-body">
                            <h4 className="card-title">
                                {name} 
                                <div>
                                    <span className="badge badge-primary" style={{fontSize: "12px"}}>{breed}</span>
                                </div>
                                <div>
                                    <span className="badge badge-warning" style={{fontSize: "12px"}}>{age}</span>
                                </div>
                            </h4>
                            <p className="card-text">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



