import React from 'react'
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts',  { cache:"no-store"});

 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}


const Blog = async () => {
  const data = await getData()
  return (
    <div className={styles.mainContainer}>
      {data.map(item =>(
      <Link href={item._id} className={styles.container} key = {item.id}>
        <div className={styles.imageContainer}>
          <Image
              src={item.img}  
              alt= ""
              width={400}
              height={250}
              className={styles.image} 
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
    ))}

      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
              src= "https://images.pexels.com/photos/22942026/pexels-photo-22942026/free-photo-of-trevi-fountain-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt= ""
              width={400}
              height={250}
              className={styles.image} 
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>

      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
              src= "https://images.pexels.com/photos/22942026/pexels-photo-22942026/free-photo-of-trevi-fountain-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt= ""
              width={400}
              height={250}
              className={styles.image} 
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>

    </div>
  )
}

export default Blog
