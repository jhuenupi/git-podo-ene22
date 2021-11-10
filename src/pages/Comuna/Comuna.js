import React, { Component } from "react";


export default class Comuna extends Component {
  constructor(props) {
    super(props);
    this.state = {
        items : [],
        isLoaded: false
    }
    
  }
  

  async componentDidMount() {
    const response = await fetch(`http://localhost:1337/comunas`);
    const json = await response.json();
    this.setState({ isLoaded:true, items: json });

  } 

  render () {
          var {isLoaded, items} = this.state;
          
          if (!isLoaded ) {
            return (
            <>
            
            <div>Loading...</div>
            {console.log (this.state)}
            </>
            )
            }
          else {
                return (
                <>
                    
                    {console.log (items)}
                    
                    <select class="browser-default"> 
                    {/* <ul>                      */}
                        {items.map(item => (
                             <option value={item.idcomuna}>{item.nombre}</option>

                            ))};
                    {/* </ul> */}
                    </select>
                </>
                );
                }
        }
      }