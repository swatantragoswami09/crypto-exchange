import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useStyles } from "./CardStyle";
import logo from "../../assets/logo.png";
import { Box } from "@mui/material";
const CoomonCard = (props: { GridDetails: any }) => {
  const classes = useStyles();
  const [AllDetails, setAllDetails] = useState<any[]>([]);
  console.log("props", props.GridDetails);
  useEffect(() => {
    setAllDetails(props.GridDetails);
  }, [props.GridDetails]);
  return (
    <div>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        <Grid container xs={12} direction="row">
          <Grid xs={4} md={16} lg={4}>
            {/* <div className={classes.Allcontainer}>
          <h1> Price updated a few second ago</h1>

          <div className={classes.SecondRow}>
            <div className={classes.logo}>
              <img src={logo} />
            </div>
            <div> bitcoin</div>
            <div>$ 20,081 </div>
          </div>
          <div> Price history</div>

          <div className={classes.Timer}>
            <div>24h 0.68546% </div>
            <div>24h 0.68546% </div>
            <div>24h 0.68546% </div>
          </div>
          <div className={classes.LowerManagnement}>
            <button> Login to purchase</button>
          </div>
        </div> */}

    
        return (
           
    <div className={classes.MainContainer}>
    <div className={classes.LineMan}>
      <div className={classes.UpperContain}>
        <div className={classes.NameRole}>
          <div className={classes.UpperNameRole}>
            <div className={classes.Name}> price</div>
            <div className={classes.AdminBack}> percentagechange</div>
          </div>
          <div className={classes.Role}>designation</div>
        </div>
        <div className={classes.ImageMan}>
          <img src={logo} className={classes.ImageProfile} />
        </div>
      </div>
    </div>
    <div className={classes.LowerContain}>
      <div className={classes.EmailMangne}>BUY</div>
      <div className={classes.CallMangne}>SELL</div>
    </div>
  </div>

          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default CoomonCard;
