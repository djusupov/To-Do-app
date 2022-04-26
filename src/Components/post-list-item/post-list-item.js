import React, { Component } from 'react';
import  moment from 'moment'
import 'moment/locale/ru'

class PostListItem extends Component {

    render() {
        let ClassName = 'post-list d-flex justify-content-between align-items-center'
        const { label, onDeleteItem, check, onCheckbox} = this.props;

        if (check) {
            ClassName += ' check'
        }
        // const color = ['red', 'green', 'blue', 'orange']
        // style={{color : color[index % color.length]}} 
        return (
            <>
                <li className={ClassName}>
                    <div className='list-checkbox'>
                        <i className="fa fa-check"></i>
                        <input checked={check} onChange={onCheckbox} type="checkbox" />
                    </div>
                    <div className='list-group'>
                        <span className='span-list'>{label}</span>
                    </div>
                    <p>{moment().startOf('min').fromNow()}</p>
                    <div className='btn-group'>
                        <button
                            disabled={check === true ? false : true}
                            onClick={onDeleteItem}
                            className='btn btn-danger'>
                            x
                        </button>
                    </div>
                </li>
            </>
        );
    }
}

export default PostListItem;