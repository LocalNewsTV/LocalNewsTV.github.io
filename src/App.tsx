import Header from './components/Header/Header'
import '@fontsource/roboto';
import '@fontsource-variable/open-sans';
import ViewRouter from './routes/ViewRouter';

const App = () => {
  return (
    <>
      <Header/>
      <ViewRouter/>
    </>
  )
}

export default App
