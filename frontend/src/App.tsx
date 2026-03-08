import { useState } from "react"

function App() {

  const [message, setMessage] = useState("")

  const callApi = async () => {

    const res = await fetch("http://localhost:8080/api/hello")
    const data = await res.text()

    setMessage(data)
  }

  return (
    <div>

      <h1>React Spring CI Demo</h1>

      <button onClick={callApi}>
        Call Backend API
      </button>

      <p>{message}</p>

    </div>
  )
}

export default App