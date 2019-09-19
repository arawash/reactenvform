// import React, { Component } from 'react';
// //import { css } from '@material-ui/system';
// import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import Icon from '@material-ui/core/Icon';

// //import ReactDOM from "react-dom";
// const useStyles = makeStyles(theme => ({
//     button: {
//       margin: theme.spacing(1),
//     },
//     leftIcon: {
//       marginRight: theme.spacing(1),
//     },
//     rightIcon: {
//       marginLeft: theme.spacing(1),
//     },
//     iconSmall: {
//       fontSize: 20,
//     },
//   }));

  
// class TodoList extends React.Component {
//     render() {
//         return (
//             <div>
//                 <ul>
//                     {this.props.items.map(item => (
//                         <li key={item.id}>{item.text}
//                         </li>
//                     )
//                     )}
//                 </ul>
//             </div>
//         )
//     }
// }

// const err = "dd";

// export default class TodoComponent extends Component {
    
//     constructor(props) {
//         super(props);
//         this.state = {
//             items: [], 
//             text: "", 
//             mycar: "", 
//         };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
        
//     }
//     classes = useStyles();
//     render() {
//         return (
//             <div>
//                 <h3>Todo</h3>
//                 <TodoList
//                     items={this.state.items}
//                     />
//                 <form onSubmit={this.handleSubmit}>
//                 <label htmlFor="new-todo">
//                         Name.
//                     </label>
//                     <input type="text"
//                         // defaultValue =""  
//                         id=" new-todo"
//                         onChange={this.handleChange}
//                         value={this.state.items.text}
//                         />
//                     <label htmlFor="new-todo">
//                         WHAT?.
//                     </label>
//                     <input type="text"
//                         // defaultValue =""  
//                         id=" new-todo"
//                         onChange={this.handleChange}
//                         value={this.state.items.text}
//                     />
//                     <label htmlFor="Description">
//                         Description.
//                     </label>
                    
//                     <textarea type="text-erea"
//                         // defaultValue =""  
//                         id=" new-todo"
//                         onChange={this.handleChange}
//                         value={this.state.items.text}
//                         />
//                     <label htmlFor="latitude">
//                     latitude:
//                     </label>
//                     <input type="number"
//                         // defaultValue =""  
//                         id=" new-todo"
//                         onChange={this.handleChange}
//                         value={this.state.items.text}
//                         />
//                     <label htmlFor="longitude">
//                     longitude:

//                     </label>
//                     <input type="number"
//                         // defaultValue =""  
//                         id=" new-todo"
//                         onChange={this.handleChange}
//                         value={this.state.items.text}
//                         />
//                     <Button  variant="contained" color="primary">
//                         add #{this.state.items.length + 1}DDD
//                         <Icon className={this.classes.rightIcon}>send</Icon>

//                     </Button>
//                 </form>
//             </div>
//         )
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();
//         if (!this.state.text.length) {
//             console.error("Error");
//             return;
//         }
//         const newItem = {
//             text: this.state.items.text,
//             mycar: this.state.items.mycar,
//             id: Date.now()
//         };
//         this.setState(state => ({
//             items: state.items.concat(newItem), text: ""
//         }
//         )
//         );
//     }
//     handleChange = (e) => {
//         this.state.text = e.target.value;
//         this.setState({ tems: { errormessage: err } });
//     };
// }    
