import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './AppContext';
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { blue, deepPurple, orange } from "@mui/material/colors";




const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: deepPurple[400]
		},
		secondary: {
			main: orange[800]
		}
		
	},
	
})



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

	<ThemeProvider theme={theme}>
		<CssBaseline />
		<AppProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</AppProvider>
	</ThemeProvider>	 
		
);
