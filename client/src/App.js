import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import memories from "./images/memories.png";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import { styles } from "./styles";

const App = () => {

    return (
        <Container maxWidth="lg">
            <AppBar sx={styles.appBar} position="static" color="inherit">
                <Typography sx={styles.heading} variant="h2" align="center">Golden Frames</Typography>
                <img sx={styles.image} src={memories} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );

};

export default App;