import React, { Component } from "react";
import { connect } from "react-redux"
import { addList } from "../actions"

class TrelloActionButton extends Component {
    state = {
        formOpen: false,
        text: ""
    };

    openForm = () => {
        this.setState({
            formOpen: true
        });
    };

    closeForm = e => {
        this.setState({
            formOpen: false
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

    renderAddButton = () => {
        const { list } = this.props;
        const buttonText = list ? "Add another list" : "Add another Card";
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "white" : "inherit";
        const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";

        return (
            <div
                onClick={this.openForm}
                style={{
                    ...styles.openFormButtonGroup,
                    opacity: buttonTextOpacity,
                    color: buttonTextColor,
                    backgroundColor: buttonTextBackground
                }}
            >
                <span>add</span>
                <p>{buttonText}</p>
            </div>
        );
    };

    renderForm = () => {
        const { list } = this.props;

        const placeholder = list ? "Enter list title " : "Enter card title";

        const buttonTitle = list ? "Add List" : "Add Card";
        return (
            <div>
                <div
                    style={{
                        overflow: "visible",
                        minHeight: "80px",
                        minWidth: "272px",
                        padding: "6px 8px 2px"
                    }}
                >
                    <textarea
                        placeholder={placeholder}
                        autoFocus
                        onBlur={this.closeForm}
                        value={this.state.text}
                        onChange={this.handleInputChange}
                        style={{
                            resize: "none",
                            width: "100%",
                            overflow: "hidden",
                            outline: "none",
                            border: "none"
                        }}
                    />
                </div>
                <div style={styles.formButtonGroup}>
                    <button
                        onMouseDown={this.handleAddList}
                        variant="contained"
                        style={{
                            color: "white",
                            backgroundColor: "#5aac44"
                        }}
                    >
                        {buttonTitle}
                    </button>
                    <span style={{ marginLeft: 0, cursor: "pointer" }}>
                        close
                    </span>
                </div>
            </div>
        );
    };

    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
}

export default connect()(TrelloActionButton)

const styles = {
    openFormButtonGroup: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: "3px",
        height: "36px",
        width: "272px",
        paddingLeft: "10px"
    },
    formButtonGroup: {
        marginTop: "8px",
        display: "flex",
        alignItems: "center"
    }
};
