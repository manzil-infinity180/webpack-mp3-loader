import { createRoot } from 'react-dom/client'
import AudioPlayer from './audio.mp3'

function App() {
  return <AudioPlayer />
}
createRoot(document.getElementById('root')).render(
  <App />
)
// ReactDOM.render(<App />, document.getElementById('root'))