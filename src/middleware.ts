import exp from "constants";
import { NextResponse, NextRequest } from "next/server";

const isLoggedIn: boolean = false;

// export function middleware(request: Request) {
//     // if (!isLoggedIn && request.url === 'http://localhost:3000/profile') {
//     //     return NextResponse.redirect(new URL('/', request.url))
//     // }
//     // return NextResponse.next()
//     // return NextResponse.json({
//     //     hello:"middleware",
//     // })

//     if (isLoggedIn) {
//         return NextResponse.next()
//     }
//     return NextResponse.redirect(new URL('/', request.url))
// }

export function middleware(request: NextRequest) {
    let headers = new Headers(request.headers);
    if (isLoggedIn) {
        return NextResponse.next()
    }
    return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
    matcher: ['/profile']
}