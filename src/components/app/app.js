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
                {label: 'Going to learn React', important: false, id: 1},
                {label: 'Going to learn React', important: false, id: 2},
                {label: ' to learn React', important: true, id: 3},
                {label: 'arn React', important: false, id: 4}
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);

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

    render(){
        return (
            <AppBlock>
                <AppHeader/>    
                <div className='search-panel d-flex'>
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>            
                <PostList 
                    posts={this.state.data}
                    onDelete={this.deleteItem}
                />
                <PostAddForm
                    onAdd={this.addItem}/>
            </AppBlock>
            );
    }


};