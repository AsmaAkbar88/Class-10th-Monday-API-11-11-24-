
import { NextResponse } from "next/server";  // shadi hall
// api sy kam niklwy ka kam krti hy 

// simulate a database
let books = [
    {
        id: 1,
        title: "Harry Potter",
        autor: "J.K Rowling",
        available: "true"
    }
]
export async function GET() {

    try {
        return NextResponse.json(books, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { message: "Error fetching books" }, {
            status: 500
        })
    }
}