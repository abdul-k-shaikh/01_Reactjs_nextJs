import Link from 'next/link';
export default function allVideo(){
    return(
        <main>
        <h1>The Video</h1>
        <p><Link href="/video/post-1">Post-1</Link></p>
        
        <p><Link href="/video/post-2">Post-2</Link></p>
        </main>
    )
}