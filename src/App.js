import React, { Component } from 'react';
import PostAdd from "./Components/post-add/post-add";
import './App.css'
import PostList from "./Components/post-list/post-list";
import { v4 as uuidv4 } from 'uuid';
class App extends Component {
    state = {
        data: [],
        value: 'all',
    }
    onChangeAll = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    componentDidMount() {
        this.setState({
            data: JSON.parse(localStorage.getItem('key')) || []
        })
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.state !== this.state.data) {
            localStorage.setItem('key', JSON.stringify(this.state.data))
        }
    }
    onPostNewAdd = (body) => {
        if (body !== '') {
            console.log(body)
            const newItem = {
                label: body,
                check: false,
                id: uuidv4()
            }
            this.setState(({ data }) => {
                const newArr = [...data, newItem];
                console.log(newArr)
                return {
                    data: newArr,
                }
            })
        } else {
            alert('Напишите что нибудь!!!')
        }
    }
    onDeleteItem = (id) => {
        this.setState(({ data }) => {
            const index = data.findIndex((elem) => elem.id === id)
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)]
            localStorage.setItem('key', '[]')
            return {
                data: newArr
            }
        })
    }
    onCheckbox = (id) => {
        this.setState(({ data }) => {
            const index = data.findIndex((elem) => elem.id === id)
            const old = data[index];
            const newItem = { ...old, check: !old.check };
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr
            }
        })
    }

    render() {
        const { data, value } = this.state;
        const allPost = data.length;
        const checkPost = data.filter(elem => elem.check).length
        return (
            <div>
                <PostAdd
                    onChangeAll={this.onChangeAll}
                    allPost={allPost}
                    checkPost={checkPost}
                    onPostNewAdd={this.onPostNewAdd} />
                <PostList
                    onCheckbox={this.onCheckbox}
                    onDeleteItem={this.onDeleteItem}
                    data={data}
                    value={value}
                />
            </div>
        );
    }
}

export default App;