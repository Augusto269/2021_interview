import React, { useState, useEffect } from "react";
import axios from "axios";
import AppBar from "@mui/material/AppBar";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WeatherCard from "../components/WeatherCard/weatherCard";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import AsyncSelect from "react-select/async";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";


const theme = createTheme();
const filterCountries = (values) => {
  return values.map(res => {
    return {value:res.name , label: res.name}
  })
};


export default function Home() {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState("");
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const loadOptions = async (inputValue, callback) => {
    if(inputValue.length < 4) return
    const response = await axios.get(
      `http://localhost:8000/api/weather/allCities/${inputValue}`
    );
    callback(filterCountries(response.data))
  };
  
  useEffect(() => {
    async function fetchWeather() {
      const response = await axios.get(
        `http://localhost:8000/api/weather/${city}`
      );
      setWeather(response.data);
    }

    fetchWeather();
  }, [city]);
  const changeCity = (e) => {
    setCity(e.value);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <WbSunnyIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Weather Forecast Widget{" "}
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Weather Aplication
            </Typography>
            <AsyncSelect
              loadOptions={loadOptions}
              classNamePrefix="select"
              onChange={changeCity}
            />
          </Container>
        </Box>
        <Container sx={{ py: 4 }}>
          <Grid container sx={{ justifyContent: !matches ? "center" : null }}>
            {weather.map((day) => {
              return <WeatherCard key={day.dt} day={day} isMobile={!matches} />;
            })}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
