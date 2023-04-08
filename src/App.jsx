//              ***********************     TODO APP    ************************************

//import React, { Component } from 'react'
// import todosData from './Components/todosData'
// import TodoItem from './Components/TodoItem'

// export default class App extends Component {

//   constructor(){
//     super()
//     this.state = {
//       todos: todosData
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }

//   handleChange(id){
//     this.setState(prev => {
//       const updatedTodos = prev.todos.map(todo => {
//         if(todo.id === id) {
//           todo.completed = !todo.completed
//         }
//         return todo
//       })
//       return updatedTodos
//     })
//   }

//   render() {

//     return (
//       <div>
//         {this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)}
//       </div>
//     )
//   }
// }

//         **********************    FETCHING DATA FROM API     *************************

// import React, { Component } from 'react'

// export default class App extends Component {

//   constructor(){
//     super()
//     this.state = {
//         isLoading: false,
//         character: {}
//     }
//   }

//   componentDidMount(){
//     this.setState({isLoading: true})
//     fetch("https://swapi.dev/api/people/1")
//       .then(response => response.json())
//       .then(data => this.setState({
//         character: data,
//         isLoading: false
//       }))
//   }

//   render() {
//     const text = this.state.isLoading ? 'Loading...' : this.state.character.name
//     return (
//       <div>
//         {text}
//       </div>
//     )
//   }
// }

//    **********************************    FORMS     *********************************

// import React, { Component } from 'react'

// export class App extends Component {

//   constructor(){
//     super()
//     this.state = {
//       firstName: '',
//       lastName: '',
//       isFriendly: false,
//       gender: '',
//       favColor: 'blue'
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }

//   handleChange(event){
//     const {name, value, type, checked} = event.target
//     type === checked ? this.setState({[name] : checked}) : this.setState({ [name]: value })
//   }

//   handlerSubmit(){

//   }

//   render() {
//     return (
//       <form onSubmit={this.handlerSubmit}>
//         <input
//           type="text"
//           value={this.state.firstName}
//           name='firstName'
//           placeholder='First name'
//           onChange={this.handleChange}
//         /><br />
//         <input
//           type="text"
//           value={this.state.lastName}
//           name='lastName'
//           placeholder='Last name'
//           onChange={this.handleChange}
//         />
//         <br />
//         <textarea
//           value={'Some default value'}
//           onChange={this.handleChange}
//         />
//         <br />
//         <label htmlFor="">
//           <input
//             type="checkbox"
//             name='isFriendly'
//             checked={this.state.isFriendly}
//             onChange={this.handleChange}
//           /> Is friendly?
//         </label>
//         <br />
//         <label htmlFor="">
//           <input
//             type="radio"
//             name='gender'
//             value={'male'}
//             checked={this.state.gender === 'male'}
//             onChange={this.handleChange}
//           /> Male
//         </label>
//         <br />
//         <label htmlFor="">
//           <input
//             type="radio"
//             name='gender'
//             value={'female'}
//             checked={this.state.gender === 'female'}
//             onChange={this.handleChange}
//           /> Female
//         </label>
//         <br />
//         <label htmlFor="favColor">Favorite color:</label>
//         <select
//           value={this.state.favColor}
//           onChange={this.handleChange}
//           name='favColor'
//         >
//           <option value="blue">Blue</option>
//           <option value="red">Red</option>
//           <option value="green">Green</option>
//           <option value="yellow">Yellow</option>
//         </select>

//         <h1>{this.state.firstName} {this.state.lastName}</h1>
//         <h2>{this.state.gender ? `You are a ${this.state.gender}` : ''}</h2>
//         <h2>Your Favorite color is {this.state.favColor}</h2>
//         <button>Submit</button>
//       </form>
//     )
//   }
// }

// export default App



//               **************************  FORMS PRACTICE  *************************


import React, { Component } from 'react'

export default class App extends Component {

  constructor(){
    super()
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      destination: '',
      dietaryRestrictions: {
        isVegan: false,
        isKosher: false,
        isLactoseFree: false
      }
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const {name, value , type, checked} = event.target
    type === 'checkbox' ? 
              this.setState( prev => {
                return{                  
                  dietaryRestrictions: {
                    ...prev.dietaryRestrictions,
                    [name] : checked
                  }
                }
              }
                ) : 
              this.setState({[name] : value})
  }

  render() {
    return (
      <main>
          <form action="">
            <input
              type='text'
              name='firstName'
              value={this.state.firstName}
              onChange={this.handleChange}
              placeholder='First Name'
            /> <br />
            <input
              name='lastName'
              type='text'
              value={this.state.lastName}
              onChange={this.handleChange}
              placeholder='Last Name'
            /> <br />
            <input
              name='age'
              type='number'
              value={this.state.age}
              onChange={this.handleChange}
              placeholder='Age'
            /> <br />

            <label htmlFor="">
              <input
                type="radio" 
                name='gender'
                value='male'
                checked={this.state.gender === 'male'}
                onChange={this.handleChange}
              /> Male
            </label>
            <br />
            <label htmlFor="">              
              <input
                  type="radio" 
                  name='gender'
                  value='female'
                  checked={this.state.gender === 'female'}
                  onChange={this.handleChange}
                /> Female
            </label>
            <br />
            <select 
              value={this.state.destination}
              name='destination'
              onChange={this.handleChange}
            >
              <option value="">-- Please choose a destination</option>
              <option value="azerbaijan">Azerbaijan</option>
              <option value="turkey">Turkey</option>
              <option value="germany">Germany</option>
              <option value="norway">Norway</option>
              <option value="spain">Spain</option>
            </select>

            <br />
            <label htmlFor="">
              <input 
                type="checkbox" 
                name='isVegan'
                onChange={this.handleChange}
                checked={this.state.dietaryRestrictions.isVegan}
              />Vegan?  
            </label>
            <br />
            <label htmlFor="">
              <input 
                type="checkbox" 
                name='isKosher'
                onChange={this.handleChange}
                checked={this.state.dietaryRestrictions.isKosher}
              />Kosher?  
            </label>
            <br />
            <label htmlFor="">
              <input 
                type="checkbox" 
                name='isLactoseFree'
                onChange={this.handleChange}
                checked={this.state.dietaryRestrictions.isLactoseFree}
              />LactoseFree?  
            </label>
            <br />

            <button>Submit</button>
            
          </form>
          <hr />
          <h2>Entered information:</h2>
          <p>Your name: {this.state.firstName} {this.state.lastName}</p>
          <p>Your age: {this.state.age}</p>
          <p>Your gender: {this.state.gender}</p>
          <p>Your destination: {this.state.destination}</p>
          <dl>
            <dt>Your dietary restrictions:</dt>  
            <dd>Vegan: {this.state.dietaryRestrictions.isVegan ? 'Yes' : 'No'}</dd> 
            <dd> Kosher: {this.state.dietaryRestrictions.isKosher ? 'Yes' : 'No'}</dd> 
            <dd>Lactose: {this.state.dietaryRestrictions.isLactoseFree ? 'Yes' : 'No'}</dd>  
          </dl>
      </main>
    )
  }
}