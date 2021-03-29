import "./App.css";
import React from "react";
import Grid from "@material-ui/core/Grid";
import VerticalTabs from "./Components/Homepage/VerticalTabs";
import HomeTab from "./Components/Homepage/HomeTab";

function App() {

  return (
    <div className="App">
    	<Grid container spacing={1}>
        
    		<Grid item xs={12}>
                <HomeTab />
        	</Grid>
        	<Grid item xs={3}>
				<VerticalTabs/>
        	</Grid>
        	<Grid item xs={9}>
            	right
        	</Grid>
      	</Grid>
		  
    </div>
  );
}

export default App;
