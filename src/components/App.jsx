import React from "react";
import { BrowserRouter,Route } from "react-router-dom";
import StreamShow from "./streams/StreamShow";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StrimList";
import StreamCreate from "./streams/streamCreate";
import Header from "./Header";
const App =()=>{
    return(
        <div className="ui container">
            <BrowserRouter>
            <div>
            <Header />
                <Route path="/" exact component={StreamList}></Route>
                <Route path="/streams/new" exact component={StreamCreate}></Route>
                <Route path="/streams/edit" exact component={StreamEdit}></Route>
                <Route path="/streams/delete" exact component={StreamDelete}></Route>
                <Route path="/streams/show" exact component={StreamShow}></Route>
            </div>
            </BrowserRouter>
        </div>
    )
}
export default App