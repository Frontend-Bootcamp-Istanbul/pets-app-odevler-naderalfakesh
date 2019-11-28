import React from 'react';
import {Sidebar, PetList} from "../components";


class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            activeFilter: "",
            searchValue: ""
        }
    }

    componentDidMount() {
        document.title = "Home Page";
    }

    componentWillUnmount() {
        document.title = "Pets App";
    }

    filterPets = (breed) => {
        this.setState({
            activeFilter: breed
        });
    }

    search = (val) => {
        this.setState({
            searchValue: val
        });
    }

    petSelect = (id) => {
        //we can use history in page components because they have links in router
        // we can push payload with router and will be stored in props.location.state.{}
        this.props.history.push("/detay",{id:id})
    }
    render(){
        return (
            <div>
                <div className="container" >
                    <div className="row">
                        <div className="col-lg-3">
                            <Sidebar
                                onFilterPets={this.filterPets}
                                activeFilter={this.state.activeFilter}
                                onSearch={this.search}
                            />
                        </div>
                        <div className="col-lg-9">
                            <PetList
                                activeFilter={this.state.activeFilter}
                                searchValue={this.state.searchValue}
                                petSelect={this.petSelect}
                                
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
