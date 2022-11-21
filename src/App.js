import Header from './Templates/Header';
import Footer from './Templates/Footer';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
