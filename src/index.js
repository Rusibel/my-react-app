import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/app/app';
// import reportWebVitals from './reportWebVitals';

// class WhoAmI extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             years: 26,
//             nationality: 'uk'
//         }
//         this.nextYear = this.nextYear.bind(this);//1-й метод приявязки контекстаметода к объекту
//         // this.nextYear =() => {  // 2-й способ задать метод через стрелочную функцию
//         //     this.setState(state => ({
//         //         years: ++state.years
//         //     }))
//         }

//     // nextYear =() => {  // 3-й способ ClassFields - "экспериментальная технология"
//     //     this.setState(state => ({
//     //     years: ++state.years
//     //     }))
//     // }   

//     nextYear() {
//         // this.state.years++ // "это неправильный вариант "
//         this.setState(state => ({
//             years: ++state.years
//         }))
//     }

//     render() {
//         const {name, surname, link} = this.props;
//         const {years} = this.state;
//         return (
//         <React.Fragment>
//             <button onClick={this.nextYear}>++</button>
//             <h1>My Name is {name}, my surname - {surname}, years = {years}</h1>
//             <a href={link}>my profile</a>
//         </React.Fragment>
//         )
//     }
// }






// // function WhoAmI({name, surname, link}) {
// //     return (
// //         <React.Fragment>
// //             <h1>My Name is {name}, my surname - {surname}</h1>
// //             <a href={link}>my profile</a>
// //         </React.Fragment>
// //     )
// // }

// const All = ()=> {
//     return (
//         <>
//             <WhoAmI name="John" surname="Smith" link="vk.com" />
//             <WhoAmI name="Mary" surname="Smith" link="vk.com" />
//             <WhoAmI name="Den" surname="Smith" link="vk.com" />    
//         </>
//     )
// }

// ReactDOM.render(<All />, document.getElementById('root'));

// ReactDOM.render(<WhoAmI name="John" surname="Smith" link="vk.com" />, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));

// reportWebVitals();
