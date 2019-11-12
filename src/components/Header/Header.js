import React, { useState } from "react"
import { Logo } from "./Logo"

const Header = () => {
  const [state, setState] = useState("40")
  return (
    <header className="App-header">
      <Logo height={`${state}vmin`} />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <input value={state} onChange={e => setState(e.target.value)} type="range" />
    </header>
  )
}
export default Header
