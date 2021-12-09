import React, { Component } from "react";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
import styled from 'styled-components';
import './app.css'

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 1000px;
`;

// const StyledAppBlock = styled(AppBlock)`
//     background-color: grey
// `;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'Going to learn React', important: false, like: false, id: 1},
                {label: 'Going to learn React', important: false, like: false, id: 2},
                {label: ' to learn React', important: true, like: false, id: 3},
                {label: 'arn React', important: false, like: false, id: 4}
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToogleImportant = this.onToogleImportant.bind(this);
        this.onToogleLiked = this.onToogleLiked.bind(this);
        // this.createNewItem = this.createNewItem.bind(this);


        this.maxId = 5;
    };

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            // data.splice(index, 1); //неправильный метод мутируем state, а этого нельзя делать
            // return {
            //     data: data
            // };
            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, ...after];

            return {
                data: newArr
            }
        });
    };

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    // createNewItem(param, id) {
    //     this.setState(({data}) => {
    //         const index = data.findIndex(elem => elem.id === id);

    //         const old = data[index];
    //         const newItem = {...old, param: !old.param}

    //         const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

    //         return {
    //             data: newArr
    //         }
    //     })
    // }

    onToogleImportant(id) {
        // this.createNewItem = this.createNewItem.bind(this);

        // this.createNewItem(this.state.data.important);
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, important: !old.important}

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }

    onToogleLiked(id) {
        // this.createNewItem = this.createNewItem.bind(this);

        // this.createNewItem(this.state.data.important);
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, like: !old.like}

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }

    render(){
        const {data} = this.state;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;
        // const important = this.state.data.filter(item => item.important)

        return (
            <AppBlock>
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}
                />    
                <div className='search-panel d-flex'>
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>            
                <PostList 
                    posts={this.state.data}
                    onDelete={this.deleteItem}
                    onToogleImportant={this.onToogleImportant}
                    onToogleLiked={this.onToogleLiked}
                />
                <PostAddForm
                    onAdd={this.addItem}/>
            </AppBlock>
            );
    }


};