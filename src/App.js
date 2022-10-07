import './App.css'
import FlexContainer from './FlexContainer'

function App() {
  return (
    <div
      style={{
        backgroundImage: `url('https://res.cloudinary.com/calm-com/image/upload/v1582139698/jasper-lake.jpg')`,
      }}
      class="h-screen bg-no-repeat bg-center bg-cover align-middle bg-blend-darken brightness-125"
    >
      <div class="h-screen w-screen bg-gradient-to-r from-black/70 to-black/40 lg:from-black/70 lg:to-black/0">
        <FlexContainer />
      </div>
    </div>
  )
}

export default App
