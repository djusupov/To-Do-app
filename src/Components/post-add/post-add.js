import React, { Component } from 'react';

class PostAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    onChangeValue = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.props.onPostNewAdd(this.state.text)
        this.setState({
            text: ''
        })
    }
    onEnter = (e) => {
        if (e.keyCode === 13) {
            this.onSubmit()
        }
    }
    render() {
        const { allPost, checkPost, onChangeAll } = this.props;
        return (
            <form
                onSubmit={this.onSubmit}
                className="header">
                <div className='container'>
                    <h2 style={{ margin: '5px' }}>My To Do List {allPost}</h2>
                    <h2 style={{ margin: '5px' }}>My to Do Check {checkPost}</h2>
                    <input
                        onKeyPress={(e) => this.onEnter(e)}
                        onChange={this.onChangeValue}
                        type="text"
                        value={this.state.text}
                        placeholder="Title..." />
                    <button
                        type='submit'
                        className="addBtn">
                        Add
                    </button>
                    <p>
                        <select onChange={onChangeAll}>
                            <option value={'all'}>Все</option>
                            <option value={'done'}>Выполнено</option>
                            <option value={'Nocheck'}>Не выполнено</option>
                        </select>
                    </p>
                </div>
            </form>
        );
    }
}

export default PostAdd;