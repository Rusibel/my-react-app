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
            ],
            term: '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToogleImportant = this.onToogleImportant.bind(this);
        this.onToogleLiked = this.onToogleLiked.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);

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

    createNewItem(param, id) {
        this.setState(() => {
            const index = this.state.data.findIndex(elem => elem.id === id);

            const old = this.state.data[index];
            const newItem = {...old}
            console.log(newItem);
            newItem[param] = !old[param];
            const newArr = [...this.state.data.slice(0, index), newItem, ...this.state.data.slice(index + 1)];

            return {
                data: newArr
            }
        });
    }

    onToogleImportant(id) {
        this.createNewItem = this.createNewItem.bind(this);

        this.createNewItem("important", id);
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id === id);

        //     const old = data[index];
        //     const newItem = {...old, important: !old.important}

        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

        //     return {
        //         data: newArr
        //     }
        // })
    }

    onToogleLiked(id) {
        // this.createNewItem = this.createNewItem.bind(this);

        this.createNewItem("like", id);
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id === id);

        //     const old = data[index];
        //     const newItem = {...old, like: !old.like}

        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

        //     return {
        //         data: newArr
        //     }
        // })
    }

    searchPost(items, term){
        if(term.length === 0){
            return items
        }

        return items.filter((item)=>{
            return item.label.indexOf(term) > -1
        })
    }

    filterPost(items, filter) {
        if (filter === 'like'){
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    onUpdateSearch(term){
        this.setState({term})
    }

    onFilterSelect(filter){
        this.setState({filter})
    }

    render(){
        const {data, term, filter} = this.state;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;
        // const important = this.state.data.filter(item => item.important)

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);
        return (
            <AppBlock>
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}
                />    
                <div className='search-panel d-flex'>
                    <SearchPanel
                    onUpdateSearch={this.onUpdateSearch}
                    />
                    <PostStatusFilter
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}
                    />
                </div>            
                <PostList 
                    posts={visiblePosts}
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