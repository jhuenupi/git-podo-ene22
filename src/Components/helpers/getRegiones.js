//const url = "http://localhost:1337/regiones";
import React, { Component } from "react";

export default class getRegiones extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items : [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('http://localhost:1337/regiones')
            .then(res => res.json())
            .then(json => {

                this.setState({
                    isLoaded:true,
                    items: json.data,
                })

            });

    }

    render() {

        var {isLoaded, items} = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else {

            return (
                <>
                <h3>Listado items</h3>

                
                    {/* <select class="browser-default"> */}
                    {/* <ul>                    
                        {items.map(item => (
                            //<option value={item.id}>{item.name}</option>
                            <li key={item.id}>
                                 Name : {item.name}
                            </li>
                            ))};
                    </ul> */}
                    {/* </select> */}
                
                </>
            );
        }
    }
}