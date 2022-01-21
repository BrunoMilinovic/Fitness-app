import Nav from "../Components/Navigation";
import BlogList from "../Components/BlogList";
import Footer from "../Components/Footer";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import React, { useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0";
function blog({ posts }) {
  const { user } = useUser();
  return (
    <div>
      <Nav />
      <BlogList user={user} posts={posts} />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("http://localhost:2000/api/user/blog");
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
export default blog;
