import React from "react"
import "./styles.css"

export default function App() {
    return (
        <div className="App">
            {[...Array(10000).keys()].map((i) => (
                <p>This is paragraph number {i}</p>
            ))}
        </div>
    )
}
