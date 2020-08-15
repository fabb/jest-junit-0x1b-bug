import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"

test("jest-junit does not strip 0x1b from testing-library truncated output", () => {
    render(<App />)
    expect(screen.getByTestId("does not exist").textContent).toBeInTheDocument()
})
