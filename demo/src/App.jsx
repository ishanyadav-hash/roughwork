
function App() {
  

  return (
    <>
    <div className="min-h-screen p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-blue-500">
            ITER CONNECT
          </h1>
          <p className="text-blue-500 text-sm">STUDENT PLATFORM</p>
        </div>
        <div className="flex gap-8 font-medium">
          <p>Home</p>
          <p>About Us</p>
          <p>Contact</p>
        </div>
        <div className="flex gap-4 items-center">
          <button className="px-4 py-2">Sign In</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Log In</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
