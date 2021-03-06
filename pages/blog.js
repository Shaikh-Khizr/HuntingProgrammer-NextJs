import React, { useState, useEffect } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";

// Step 1: Collect all the files from blogdata directory
// Step 2: Iterate through them and display them

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  const [count, setCount] = useState(2);

  const fetchMoreData = async () => {
    let newData = await fetch(
      `http://localhost:3000/api/blogs/?count=${count + 2}`
    );
    let data = await newData.json();
    setBlogs(data);
    setCount(count + 2);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <InfiniteScroll
          dataLength={blogs.length} //This is important field to render the next data
          next={fetchMoreData}
          hasMore={props.allCount !== blogs.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {blogs.map((blogitem) => {
            return (
              <div className="blogItem" key={blogitem.slug}>
                <Link href={`/blogpost/${blogitem.slug}`} passHref>
                  <h3 className={styles.blogItemh3}>{blogitem.title}</h3>
                </Link>
                <p className={styles.blogItemp}>
                  {blogitem.metadesc.substr(0, 140)}...
                </p>
                <Link href={`/blogpost/${blogitem.slug}`} passHref>
                  <button className={styles.btn}>Read More</button>
                </Link>
              </div>
            );
          })}
        </InfiniteScroll>
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs");
  let allBlogs = await data.json();
  let allCount = allBlogs.length;
  allBlogs = allBlogs.slice(0, 2);

  return {
    props: { allBlogs, allCount }, // will be passed to the page component as props
  };
}

export default Blog;
