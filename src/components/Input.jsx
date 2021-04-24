import { useState } from 'react'

const AddTask = (props) => {
    const [text, setText] = useState('');


    const onSubmit = (e) => {
        e.preventDefault();

        if (!text) {
            alert('Please add a user id!');
            return;
        }

        props.onSubmit({ user_id: text })

        setText('');
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <input
                    type='text'
                    placeholder='Enter id...'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <input type='submit' value='Posts' className='btn btn-block' />
        </form>
    )
}

export default AddTask