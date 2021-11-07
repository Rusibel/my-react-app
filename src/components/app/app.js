import React from "react";
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

const StyledAppBlock = styled(AppBlock)`
    background-color: grey
`;
const App = ()=> {

    const data = [
        {label: 'Going to learn React', important: false, id:"lklkj"},
        {label: 'Going to learn React', important: false, id:"qewr"},
        {label: ' to learn React', important: true, id:'jk'},
        {label: 'arn React', important: false, id:'nmvgjk'}
    ]
    return (
        <StyledAppBlock>
            <AppHeader/>    
            <div className='search-panel d-flex'>
                <SearchPanel/>
                <PostStatusFilter/>
            </div>            
            <PostList posts={data}/>
            <PostAddForm/>
        </StyledAppBlock>
        );
};

export default App;