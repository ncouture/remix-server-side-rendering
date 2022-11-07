import axios from "axios";
import { useLoaderData } from "@remix-run/react";
import { redirect } from "@remix-run/node"; // or cloudflare/deno

export async function loader({ request }) {
 try {
  const url = new URL(request.url);
  const search = new URLSearchParams(url.search);
  const postId = search.get("postId");
   const res = await axios.get(
     `https://jsonplaceholder.typicode.com/posts/${postId}`
   );
  return { postId, title: res.data.title, body: res.data.body };
 } catch (err) {
  console.error(err);
  redirect("/");
  return {};
 }
}

export default function Index() {
 const data = useLoaderData();
 return (
  <div>
   <h1>{data.postId}</h1>
   <h2>{data.title}</h2>
   <h4>{data.body}</h4>
  </div>
 );
}
