import React, { Component } from "react";
import { connect } from "react-redux"
import { addList } from "../actions"

class AddList extends Component {
    state = {
        formOpen: false,
        text: "",
        listId: ''
    };

    handleForm = () => {
        this.setState({
            formOpen: !this.state.formOpen
        });
    };

    handleInputChange = e => {
        this.setState({
            text: e.target.value
        });
    };

    handleAddList = () => {
        const { dispatch } = this.props;
        const { text } = this.state;

        if (text) {
            dispatch(addList(text));
        }
        return;
    }

    render() {
        const { list } = this.props;

        return (this.state.formOpen ? (
            <div>
                <textarea
                    placeholder={list ? "Enter list title " : "Enter card title"}
                    autoFocus
                    className="textarea-input"
                    onBlur={this.handleForm}
                    value={this.state.text}
                    onChange={(e) => this.setState({ text: e.target.value })}
                />
                <div className="form-button-group">
                    <button
                        className="add-card-title"
                        onMouseDown={this.handleAddList}
                        variant="contained"
                    >
                        {list ? "Add List" : "Add Card"}
                    </button>
                    <span className="close-span">
                        X
                    </span>
                </div>
            </div>
        ) : (
                <div className="add-button"
                    onClick={this.handleForm}
                >

                    <p><span>+</span>{list ? "Add another list" : "Add another Card"}</p>
                </div>
            )
        );
    }
}

export default connect()(AddList)