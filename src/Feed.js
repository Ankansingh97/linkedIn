import React, { useEffect, useState } from 'react'
import "./Feed.css"
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';

// Import the necessary exports from firebase.js
import { db } from './firebase'; // Adjust the path as necessary
import { collection, addDoc, onSnapshot, serverTimestamp } from 'firebase/firestore';





const Feed = () => {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);





    // change delete 



    // const [message,setMessage] = useState('');








    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "posts"), (snapshot) => {
            setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            })));
        });

        // Cleanup the subscription on unmount
        return () => unsubscribe();
    }, []);

    const sendPost = (e) => {
        e.preventDefault();
    
        addDoc(collection(db, 'posts'),{
            name: 'Ankan Singh', // Ideally, you would set this dynamically if you have user auth
            description: 'this is test', // You could prompt the user for this as well
            message: input, 
            photoURL: '', // If you have images, you can update this
            timestamp: serverTimestamp(), // Use Firestore's server timestamp
        });

        setInput(''); // Clear the input after posting
        // setMessage('')
        // setDescription('');

    };

    return (
        <div className='feed'>
            <div className='feed_inputContainer'>
                <div className='feed_input'>
                    <CreateIcon />
                    <form>
                        <input 
                            value={input} 
                            onChange={e => setInput(e.target.value)} 
                            type='text' 
                            placeholder="What's on your mind?" 
                        />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className='feed_inputOptions'>
                    <InputOption Icon={ImageIcon} title='Photo' />
                    <InputOption Icon={SubscriptionsIcon} title='Video' />
                    <InputOption Icon={EventNoteIcon} title='Event' />
                    <InputOption Icon={CalendarViewDayIcon} title='Write article' />
                </div>
            </div>

            {/* Render posts */}
            {posts.map(({ id, data: { name, description, message, photoURL } }) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoURL={photoURL}
                />
            ))}
        </div>
    )
}

export default Feed;
