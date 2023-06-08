import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './AppContext';
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { blue, orange } from "@mui/material/colors";

const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: blue[400]
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
