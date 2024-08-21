import React from 'react'
import styles from './page.module.css';
import Image from 'next/image';

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`,  { cache:"no-store"});

 
  if (!res.ok) {
    return notFound()
  }
 
  return res.json()
}


const BlogPost = async({params}) => {
  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data.title}
          </h1>
          <p className={styles.desc}>
            One of Ireland’s favourite visitor experiences, the Cliffs of Moher tower over the 
            rugged west Clare coast. Walk the safe, paved pathways and view the famous Cliffs on Europe’s 
            western frontier and enjoy the spectacular vistas over the Atlantic Ocean and the Aran Islands.
            Their natural beauty has inspired artists, musicians, and poets for generations, as well as
            absorbing scientists and geologists, drawn by the unique landscape in which they sit. The Cliffs of Moher, 
            the most famous cliffs in Ireland, will leave you awestruck, creating memories that will stay with you forever. 
            The Cliffs of Moher host major colonies of nesting sea birds and are one of the country’s most important 
            bird-breeding sites. The area has been designated a Special Protection Area (SPA) for Birds.
          </p>
          <div className={styles.author}>
            <Image 
              src="https://images.pexels.com/photos/2382681/pexels-photo-2382681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Ashuya</span>

          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          The Great Wall of China (traditional Chinese: 萬里長城; simplified Chinese: 万里长城; pinyin: Wànlǐ Chángchéng,
          literally ten thousand li long wall) is a series of fortifications that were built across the historical northern borders of
          ancient Chinese states and Imperial China as protection against various nomadic groups from the
          Eurasian Steppe. Several walls were built from as early as the 7th century BC,[4] with selective 
          stretches later joined by Qin Shi Huang (220–206 BC), the first emperor of China. Little of the Qin wall remains.
          [5] Later on, many successive dynasties built and maintained multiple stretches of border walls. The best-known 
          sections of the wall were built by the Ming dynasty (1368–1644).
        </p>
      </div>
      
    </div>
  )
}

export default BlogPost
