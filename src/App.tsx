import './App.css'
import { useState } from 'react'

function App() {
  const [name, setName] = useState('')

  // SAVE
  const saveOnLocalStorage = () => {
    localStorage.setItem('name', name)
  }

  // REMOVE
  const removeLocalStorageItem = () => {
    localStorage.removeItem('name')

    window.location.reload()
  }

  // REMOVE ALL
  // localStorage.clear();

  // TIP: for jwt authentication, you can save the token on localStorage after login. Then, you can use it on every request to the backend.

  // TIP: It is better to use localStorage than cookies because it is more secure.

  // TIP: Session storage syntax is the same as local storage, only change this:
  // sessionStorage.setItem('name', name)

  // TIP: Session storage is cleared when the browser tab is closed.

  return (
    <>
      {/* READ */}
      <h2>Hello {localStorage.getItem('name')}</h2>

      <form onSubmit={saveOnLocalStorage}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Name'
          aria-label='Name'
        />
        <input type='submit' value='Submit' />
      </form>

      <button onClick={removeLocalStorageItem}>Remove localStorage item</button>
    </>
  )
}

export default App
