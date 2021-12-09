import React, {Component} from "react";
import './post-list-item.css'

export default class PostListItem extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         important: false,
    //         like: false
    //     };
    //     this.onImportant = this.onImportant.bind(this);
    //     this.onLike = this.onLike.bind(this);
    // }

    // onImportant() {
    //     this.setState(({important}) => ({
    //         important: !important
    //     }))
    // }

    // onLike() {
    //     this.setState(({like}) => ({
    //         like: !like
    //     }))
    // }
        render() {
            const {label, onDelete, onToogleImportant, onToogleLiked, important, like} = this.props;
            // const {important, like} = this.state;
            let classNames = 'app-list-item d-flex justify-content-between mb-3'

            if (like) {
                classNames +=' like';
            }
            if (important) {
                classNames +=' important';
            }
            return (
                <div className={classNames}>
                    <span 
                    className="app-list-item-label"
                    onClick={onToogleLiked}>
                        {label}
                    </span>
                    <div className="d-flex justify-content-center align-items-center">
                        <button 
                        type='button' 
                        className="btn-star btn-sm"
                        onClick={onToogleImportant}>
                            <i className="fas fa-star"></i>
                        </button>
                        <button 
                        type='button' 
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                            <i className="fas fa-trash"></i>
                        </button>
                        <i className="far fa-heart"></i>
                    </div>        
                </div>
            )
        }
}

