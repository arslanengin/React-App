import React, { Component } from 'react'
import axios from 'axios';

const UserContext = React.createContext();
//provider,consumer

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter(user => action.payload !== user.id)
      }
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map(user => user.id === action.payload.id ? action.payload : user)
      }
    default:
      return state
  }
}
// 1. fonksiyon(...nesne);  // fonksiyona parametre olarak
// 2. [...nesne, '1', '3', 64]  // dizi ve string ifadeler için
// 3. let nesneKopyası= { ...nesne }; // ES2018 ile kullanılıyor.

export class UserProvider extends Component {

  state = {

    users: [],
    dispatch: (action) => {
      this.setState(state => reducer(state, action))
    }
  }

  componentDidMount = async () => { //async veri dönene kadar burda beklemeyi sağlar
    const response = await axios.get("http://localhost:3004/users")
    this.setState({
      users: response.data

    })
    console.log("componentdidmount");
  }

  render() {

    return (

      <UserContext.Provider value={this.state}>

        {this.props.children}

      </UserContext.Provider>
    )
  }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer; 