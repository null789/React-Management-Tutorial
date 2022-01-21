import React from "react"; 

class Customer extends React.Component{
    render(){
        return(
            <div>
                <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name}/>
                <CustomerInfo name={this.props.name} age={this.props.age}/>
            </div>
        )
    }
}

class CustomerProfile extends React.Component{
    render() {
        return(
            <div>
                <img src={this.props.image} alt="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component{
    render() {
        return(
            <div>
                <h2>{this.props.name}</h2>
                <h2>{this.props.age}</h2>
            </div>
        )
    }
}

export default Customer;