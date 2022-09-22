import React from "react"
import ReactDOM from "react-dom"
import "./style.css"
import App from "./components/App"

function Page() {
  return (
    < App />
  )
}

ReactDOM.render(< Page />, document.querySelector("#root")) 