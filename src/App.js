import MyCounter from './components/MyCounter';
import MyGitHub from './components/MyGitHub';
function App() {
    return (
        <div>
	    <p>Hello! This is my Mern 2 assginment on port 5048. Brought to you by Alex Krings</p>
	    <hr />
           <MyCounter incBy={1} />
	    
	    <MyCounter incBy={5} />
	    <hr />
	    
            <MyGitHub />
        </div>
    );
}

export default App;
