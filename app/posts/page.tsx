export default async function Page() {
    let data: any = [];
    let posts: any = [];

    try {
        data = await fetch('https://api.vercel.app/blog');
        posts = await data.json();
    } catch (err: any) {
        console.log('เว็บอาจจะไม่ถูกต้อง โปรดตรวจสอบอีกครั้ง');
    }

    return (
        <ul>
            {posts.map((post: any) => (
                <li key={post.id}>
                    {post.title}
                </li>
            ))}
        </ul>
    )
}