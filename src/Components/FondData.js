// import React, { Component } from 'react';

// export default class FondData extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             dataBase: JSON.parse(localStorage.getItem('user')),
//             name: '',
//             password: ''
//         }
//     }

// adduser=(name) =>{
//     this.setState({
//         dataBase: [...this.state.dataBase, name]
//         }, ()=> {
//             localStorage.setItem("user",JSON.stringify(this.state.dataBase))
//         })
//     }
 
// nameHandleChange= (e)=> {
//     e.preventDefault()
//     this.setState( { name:e.target.value } );
// }

// passwordHandleChange= (e)=> {
//     e.preventDefault()
//     this.setState( { password:e.target.value } );
// }
// // // on form submit...
// handleFormSubmit(e) {
//     e.preventDefault();
//     this.adduser(
//         {
//             'name':this.state.name,
//             'password':this.state.password,
//         }
//     )
// //    localStorage.setItem('user',JSON.stringify(this.state));
// }


 
 
// render() {
//     return (
//         <div className="container">
//             <form >
//                 <div className="form-group">
//                     <label>Name:</label>
//                     <input type="text" name="user" className="form-control" value={this.state.name} onChange={this.nameHandleChange} />
//                 </div>
//                 <div className="form-group">
//                     <label>PassWord</label>
//                     <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.passwordHandleChange} />
//                 </div>
//                 <button onClick={this.handleFormSubmit} type="submit" className="btn btn-primary btn-block">OK</button>
//             </form>
//         </div>
//     )
// }
// }





























// // export default class FondData extends Component {
// //     state = {
// //       user: '',
// //       rememberMe: false
// //     };

// //     componentDidMount() {
// //         const rememberMe = localStorage.getItem('rememberMe') === 'true';
// //         const user = rememberMe ? localStorage.getItem('user') : '';
// //         this.setState({ user, rememberMe });
// //       }
  
// //     handleChange = (event) => {
// //       const input = event.target;
// //       const value = input.type === 'checkbox' ? input.checked : input.value;
  
// //       this.setState({ [input.name]: value });
// //     };
  
// //     handleFormSubmit = () => {
// //         const { user, rememberMe } = this.state;
// //         localStorage.setItem('rememberMe', rememberMe);
// //         localStorage.setItem('user', rememberMe ? user : '');
// //       };


// //     render() {
// //         return (
// //           <form onSubmit={this.handleFormSubmit}>
// //             <label>
// //               User: <input name="user" value={this.state.user} onChange={this.handleChange}/>
// //             </label>
// //             <label>
// //               <input name="rememberMe" 
// //                      checked={this.state.rememberMe} 
// //                      onChange={this.handleChange} 
// //                      type="checkbox"/> 
                          
// //                         Remember me
// //             </label>
// //             <button type="submit">Sign In</button>
// //           </form>
// //         );
// //       }
// // }