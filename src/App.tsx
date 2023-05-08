import './global.css'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Post } from './components/Post/Post'
import { Header } from './components/Header/Header'
import styles from './App.module.css'
import './global.css'


function App() {
  const posts = [
    {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/felipenobrg.png',
      name: 'Felipe Nóbrega',
      role: 'Front-End Developer',
    },
    content: [
     { type: 'paragraph', content: 'Fala galeraa 👋' },
     { type: 'paragraph',  content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz' },
     { type: 'paragraph',  content: 'no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
     { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-05-04 7:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @RocketSeat',
    },
    content: [
     { type: 'paragraph', content: 'Fala galeraa 👋' },
     { type: 'paragraph',  content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz' },
     { type: 'paragraph',  content: 'no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
     { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-05-10 7:00:00')
  }
  ]

  return (
    <div>
      <Header />
       
       <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
               <Post
                 key={post.id}
                 author={post.author}
                 content={post.content}
                 publishedAt={post.publishedAt}
                 post={post}
               />
            )
          })}
        </main>
       </div>
    </div>
  )
}

export default App
