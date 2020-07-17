import React, { Component } from 'react';
import TrelloList from './TrelloList'
import { connect } from "react-redux"
import TrelloActionButton from './TrelloActionButton'
import './app.css'


class App extends Component {
    render() {
        const { lists } = this.props
        return (
            <div className="App">
                <h1 style={{ textAlign: "center", color: "white" }}>Trello App</h1>
                <div style={styles.listContainer}>
                    {lists.map(list => <TrelloList key={list.id} title={list.title} cards={list.cards} />)}
                    {/* <TrelloList title="test"/> */}
                    <TrelloActionButton list />
                </div>
            </div>
        );
    }
}

const styles = {
    listContainer: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row"
    }
}

const mapStateToProps = state => ({  // coventional name
    lists: state.lists // come from index.js de listReducer
})

export default connect(mapStateToProps)(App);
