import React from 'react';
import {Route, Switch} from "react-router";
import {FavoritesPage, HomePage , DetailsPage} from "../pages";

function Main(props) {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/favoriler" component={FavoritesPage}/>
                <Route exact path="/detay/:id" component={DetailsPage}/>
                {/* just for fun different approach */}
                <Route exact path="/detay" component={DetailsPage}/>
            </Switch>
        </div>
    );
}

export default Main;
