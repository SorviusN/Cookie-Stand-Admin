import React from "react"
import Link from "next/link"

function Head() {
    return (
        <>
        <title>Cookies Stand Admin Page</title>
        <div class="nav-container">
            <Link href="/"><a>Welcome!</a></Link>
        </div>
        </>
    )
}

export default Head