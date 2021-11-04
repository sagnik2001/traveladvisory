import {CssBaseline , Grid } from "@material-ui/core"
import Header from "./Components/Header/Header"
import List from "./Components/Lists/Lists"
import Maps from "./Components/Maps/Maps"
function App() {
  return (
     <>
         <CssBaseline/>
         <Header/>
         <Grid container spacing={3} style={{width: '100%'}}>
            <Grid item xs={12} md={4}>
                 <List/>
            </Grid>
            <Grid item xs={12} md={8}>
               <Maps/>
            </Grid>
         </Grid>
     </>
  );
}

export default App;
