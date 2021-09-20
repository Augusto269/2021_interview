import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import moment from "moment";
import CloudIcon from "@mui/icons-material/Cloud";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function WeatherCard({ day , isMobile}) {
  var dateString = moment.unix(day.dt).format("dddd MM/DD/YYYY");
  return (
    <Box sx={{ width: (isMobile) ? '80%' : 222, padding: "10px" }}>
      <Card variant="outlined" sx={{ padding: "10px" }} sx={{ height: 200 }}>
        <>
          <CardContent>
            <Typography
              sx={{ fontSize: 15 }}
              color="text.secondary"
              gutterBottom
            >
              {dateString}
            </Typography>
            <Typography variant="h3" component="div">
              {(day.main.temp - 273.15).toFixed()} ° C
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "16px",
              }}
            >
              {day.weather[0].main === "Clouds" ? (
                <CloudIcon sx={{ fontSize: 50 }} />
              ) : (
                <WbSunnyIcon sx={{ fontSize: 50 }} />
              )}
              {"  "}
              <Typography variant="body1">
                {day.weather[0].description}
              </Typography>
            </div>
          </CardContent>
        </>
      </Card>
    </Box>
  );
}
