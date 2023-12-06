"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Profile() {
    const router =useRouter();
    return (
        <>
        <div>My List of profile</div>
        <div>
            <ul>
               <Link href="/profile/1"> Profile 1</Link>
               <Link href="/profile/2"> Profile 2</Link>
               <Link href="/profile/3"> Profile 3</Link>
               <Link href={{
                pathname:"/profile/3",
                query: {
                    userName: "Guillaume",
                    userID: 12,
                    person: JSON.stringify({
                        age:18,
                    }),
                },
               }}>
                <div>This is with query</div>
               </Link>
               <a href="https://www.google.com">click</a>
                {/* <li onClick={() => router.push('/profile/2')}>
                    profile 2
                </li>
                <li onClick={() => router.push('/profile/3')}>
                    profile 3
                </li> */}
            </ul>
        </div>
        </>
    )
}