import React from "react";
import { Container, Typography, Box, Button, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { Chat, School, BusinessCenter, Language } from "@mui/icons-material";

const HomePage: React.FC = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/signup");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#F2F2F7",
        minHeight: "100vh",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <Box
        sx={{
          background: "linear-gradient(135deg, #007AFF 0%, #62AFFF 100%)",
          minHeight: "40vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{ fontWeight: 600, color: "#FFFFFF" }}
        >
          AI English
        </Typography>
      </Box>
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "60vh",
            textAlign: "center",
            gap: 3,
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: 500, color: "#1F1F1F" }}
          >
            AIとともに英語の可能性を解き放とう
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            sx={{ fontWeight: 400, color: "#1F1F1F" }}
          >
            AIがあなたの英語学習をサポート！最先端の技術で効果的な学習体験を提供します。
          </Typography>
          <Grid container spacing={2} justifyContent="center" mt={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: 200,
                  padding: 2,
                }}
              >
                <Chat style={{ fontSize: 60, color: "#1F1F1F" }} />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 500, color: "#1F1F1F" }}
                >
                  リアルタイム対話
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: 200,
                  padding: 2,
                }}
              >
                <School style={{ fontSize: 60, color: "#1F1F1F" }} />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 500, color: "#1F1F1F" }}
                >
                  効果的な学習
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: 200,
                  padding: 2,
                }}
              >
                <BusinessCenter style={{ fontSize: 60, color: "#1F1F1F" }} />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 500, color: "#1F1F1F" }}
                >
                  ビジネス英語対応
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: 200,
                  padding: 2,
                }}
              >
                <Language style={{ fontSize: 60, color: "#1F1F1F" }} />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 500, color: "#1F1F1F" }}
                >
                  多言語サポート
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(135deg, #007AFF 0%, #62AFFF 100%)",
              color: "#FFFFFF",
              mt: 4,
              "&:hover": {
                background: "linear-gradient(135deg, #005FD7 0%, #4791DB 100%)",
              },
            }}
            size="large"
            onClick={handleButtonClick}
          >
            Start Your Free Trial
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
