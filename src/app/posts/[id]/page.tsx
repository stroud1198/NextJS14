const fetchPost = async (postID: string) => {
    const post = await fetch(`https://next-js-14-flame.vercel.app/api/posts/${postID}`, {
        method: "GET",
    });
    return post.json();
};

export async function generateMetadata({params}:any) {
    const {post} = await fetchPost(params.id);
    return {
        title: post.title,
        description: post.description
    }
}


export default function PostID({params}:any) {
    return (
        <div>Post {params.id} </div>
    )
}