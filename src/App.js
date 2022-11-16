import React, {useMemo, useRef, useState} from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyBytton";
import MyInput from "./components/UI/input/MyInput";
import './styles/App.css'
import PostForm from "./components/PostForm";
import postForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import {usePosts} from "./hooks/usePosts";

function App() {

    const [posts, setPosts] = useState([
        { id: 1, title: 'JavaScript', body: 'Description' },
        { id: 2, title: 'Python', body: 'Description' },
        { id: 3, title: 'MySQL', body: 'Description' },
        { id: 4, title: 'C++', body: 'Description' },
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: '20px'}} onClick={() => setModal(true)}>Создать пост</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: "15px 0"}} />
            <PostFilter filter={filter} setFilter={setFilter }/>
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про IT" />
        </div>
    );
}

export default App;
