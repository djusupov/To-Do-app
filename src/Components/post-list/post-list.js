import React, {Component} from 'react';
import PostListItem from "../post-list-item/post-list-item";

class PostList extends Component {
    render() {
        const {data, onDeleteItem, onCheckbox, value } = this.props;
        const postList = data.filter(v =>{
            if(value ==='all'){
                return true
            } else if(value === 'done') {
                return v.check
            }else if(value === 'Nocheck'){
                return !v.check 
            }
        }).map((item, i) => {
            return (
                <PostListItem
                    index={i}
                    onCheckbox={()=> onCheckbox(item.id)}
                    onDeleteItem={()=> onDeleteItem(item.id)}
                    key={i}
                    {...item}/>
            )
        })
        return (
            <div className='container'>
                <ul>
                    {postList}
                </ul>
            </div>
        );
    }
}

export default PostList;