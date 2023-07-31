import Header from './components/Header/Header'
import '@fontsource/roboto';
import '@fontsource-variable/open-sans';
import ViewRouter from './routes/ViewRouter';
import Socials from './components/Socials/Socials';

const App = () => {
  return (
    <>
      <Header/>
      <ViewRouter/>
      <Socials />
    </>
  )
}

export default App
