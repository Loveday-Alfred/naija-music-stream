import React, { useEffect, useState } from "react";
import { RadioBrowserApi } from "radio-browser-api";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Box, Card, Container, Grid, Typography } from "@mui/material";

const Radio = () => {
  const [station, setStation] = useState();

  const getRadio = async () => {
    const api = new RadioBrowserApi("My Radio App");
    const station = await api.searchStations({
      countryCode: "NG",
      limit: 100,           
    });
    setStation(station);
    return station;
  };

  useEffect(() => {
    getRadio();
  }, []);

  const setDefaultSrc = (e) => {
    e.target.src =
      "https://i.pinimg.com/originals/df/68/61/df68616f9ac5be91a090ffb8ca111859.jpg";
  };

  return (
    <>
      <Container
        maxWidth="md"
        sx={{ paddingTop: "7rem", paddingBottom: "7rem" }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            marginBottom: "2rem",
            fontFamily: "Festive",
            color: "#212B36",
          }}
        >
          choose a station, start listening
        </Typography>
        <Grid container justifyContent="center" spacing={4}>
          {station &&
            station.map((radio) => (
              <Grid key={radio.id} item xs={12} sm={12} md={6} lg={4}>
                <Card>
                  <div>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        p: 2,
                      }}
                    >
                      <img
                        style={{ width: "30%", borderRadius: "50%" }}
                        src={radio.favicon}
                        alt={radio.name}
                        onError={setDefaultSrc}
                      />
                      <Box
                        sx={{
                          m: 2,
                          fontFamily: "Syne Tactile",
                          fontSize: "20px",
                        }}
                      >
                        {radio.name}
                      </Box>
                    </Box>
                    <div>
                      <AudioPlayer
                        style={{
                          backgroundColor: "#F8FAFC",
                        }}
                        src={radio.urlResolved}
                        showJumpControls={false}
                        layout="stacked"
                        customProgressBarSection={[]}
                        customControlsSection={[
                          "MAIN_CONTROLS",
                          "VOLUME_CONTROLS",
                        ]}
                      />
                    </div>
                  </div>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
};

export default Radio;
