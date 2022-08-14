import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from './styles.module.css'
export function Home () {
  const url = "https://jsonplaceholder.typicode.com/posts"
  // const [xablau, setXablau] = useState([])

  const [posts, setPosts] = useState([]);

  useEffect( ()=> {
    async function getPosts() {
      const { data } = await axios.get(url)
      setPosts(data)
    } 
    getPosts();
    // setXablau(xab)
  }, [])


  return (
    <div className={styles.container}>
      <h2>Listagem</h2>
      <div className={styles.posts}>
        {posts.map((item) => (
        <div className={styles.post} key={item.id}>
          <h4>{item.id} - {item.title}</h4>
          <p>{item.body}</p>
        </div>
         ))}
      </div>
    </div>
  )
}