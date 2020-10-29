// create your App component here
import React from 'react'

class App extends React.Component{
    constructor(){
        super();
        this.state= {
            peopleInSpace: []
        }
    }

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(object => this.setState({peopleInSpace: object}))
    }

    render(){
        return(
           <div className="spaceTalley">
               {console.log()}
           </div> 
        )
    }
}
export default App
