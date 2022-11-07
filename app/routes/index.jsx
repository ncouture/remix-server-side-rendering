export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
         <form action="/post" method="GET">
           Post Id: <input type="number" name="postId" />
           <input type="submit" value="Get Posts" />
         </form>
    </div>
  );
}
