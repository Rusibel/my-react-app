import React from "react";
import PostListItem from "../post-list-item/post-list-Item";
import { ListGroup } from 'reactstrap';
import './post-list.css'

const PostList = ({posts, onDelete, onToogleImportant, onToogleLiked}) => {

    // const elements = posts.map((item) => {
    //     return (
    //         <li className='list-group-item'>
    //             <PostListItem 
    //             label={item.label} important={item.important}/>
    //         </li>
    //     )
    // })
    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className='list-group-item'>
                <PostListItem 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToogleImportant={() => onToogleImportant(id)}
                onToogleLiked={() => onToogleLiked(id)}
                />
            </li>
        )
    })
    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup >
    )
}

export default PostList;