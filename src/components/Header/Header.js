import React, { useState, useCallback } from "react"
import { Logo } from "./Logo"

const Header = () => {
  const [state, setState] = useState("40")
  const handleChange = useCallback(e => setState(e.target.value), [])
  return (
    <header className="App-header">
      <Logo height={`${state}vmin`} />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <input value={state} onChange={handleChange} type="range" />
    </header>
  )
}
export default Header
