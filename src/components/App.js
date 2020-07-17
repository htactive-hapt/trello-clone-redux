import React, { Component } from 'react';
import List from './List'
import { connect } from "react-redux"
import AddButton from './AddButton'

class App extends Component {
    render() {
        const { lists } = this.props
        console.log(lists, "Initial Lists");
        return (
            <div className="App">
                <h1 className="text-center">Trello App</h1>
                <div className="boards">
                    {lists.map(list => <List key={list.id} title={list.title} cards={list.cards} />)}
                    <AddButton list />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    lists: state.lists
})

export default connect(mapStateToProps)(App);
