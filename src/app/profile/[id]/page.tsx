"use client";
import { useParams, useRouter } from "next/navigation"
export default function ProfileID() {
    const params = useParams();
    const router = useRouter();
    return (
        <div>
            <div>My profile id page {params.id}</div>
            <div onClick={() => router.push('/profile')}>Back to main page</div>
        </div>
    )
}