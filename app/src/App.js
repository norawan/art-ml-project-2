import logo from './logo.svg';
import './App.css';
import ButtonUsage from './TestButton';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<ButtonUsage />
			</header>
		</div>
	);
}

export default App;
