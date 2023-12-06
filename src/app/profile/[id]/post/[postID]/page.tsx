"use client";
import { useParams } from "next/navigation";
export default function ProfileIDPostID() {
    const params = useParams();
    return (
        <div>this is ID post page, profile id: {params.id} and post ID: {params.postID}</div>
    )
}