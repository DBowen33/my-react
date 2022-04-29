import faker from '@faker-js/faker'
import React from 'react'
import ReactDOM  from 'react-dom'
import CommentDetail from './components/CommentDetail'
import ApprovalCard from './components/ApprovalCard'

const App = () => {
    return (
        <div className='ui containter comments'>
            <ApprovalCard>
                <CommentDetail name='alex' comment='sick' time='Today at 4:55pm' avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail name='john' comment='cool' time='Today at 5:30pm' avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail name='mary' comment='dope' time='Today at 2:00pm' avatar={faker.image.avatar()}/>
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))