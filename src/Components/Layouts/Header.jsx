import { AppBar,Typography,Tabs,Tab,Button} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import React,{useState} from "react";


const Header=()=>{
   const[value,setValue]= useState();
    return(
        <React.Fragment>
           <AppBar>
            <Toolbar>
                <Typography>MyCrypto</Typography>

                <Tabs textColor="white" value={value}  onChange={(e,value)=>setValue(value)} indicatorColor="secondary">
                    <Tab sx={{marginLeft:10}} label="Home"></Tab>
                    <Tab label="About"></Tab>
                    
                </Tabs>
                <Button sx={{marginLeft:"auto",color:'white',backgroundColor:'red',fontWeight:'bold'}}
                 variant="container">Login</Button>
                
            </Toolbar>
           </AppBar>
        </React.Fragment>
    )

}
export default Header;