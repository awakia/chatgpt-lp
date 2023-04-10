import React from "react";
import { Container, Typography, Box, Button, Grid, Paper } from "@mui/material";
import { useRouter } from "next/router";
import { Chat, School, BusinessCenter, Language } from "@mui/icons-material";

const HomePage: React.FC = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/signup");
  };

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            textAlign: "center",
            gap: 3,
          }}
        >
          <Typography variant="h2" component="h1" color="primary">
            Unlock Your English Potential with AI
          </Typography>
          <Typography variant="h5" component="h2" color="secondary">
            AIとともに英語の可能性を解き放とう
          </Typography>
          <Typography variant="subtitle1" component="p">
            AIがあなたの英語学習をサポート！最先端の技術で効果的な学習体験を提供します。
          </Typography>
          <Grid container spacing={2} justifyContent="center" mt={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                elevation={3}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 200,
                  padding: 2,
                }}
              >
                <Chat color="primary" style={{ fontSize: 60 }} />
                <Typography variant="h6">リアルタイム対話</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                elevation={3}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 200,
                  padding: 2,
                }}
              >
                <School color="primary" style={{ fontSize: 60 }} />
                <Typography variant="h6">効果的な学習</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                elevation={3}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 200,
                  padding: 2,
                }}
              >
                <BusinessCenter color="primary" style={{ fontSize: 60 }} />
                <Typography variant="h6">ビジネス英語対応</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                elevation={3}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 200,
                  padding: 2,
                }}
              >
                <Language color="primary" style={{ fontSize: 60 }} />
                <Typography variant="h6">多言語サポート</Typography>
              </Paper>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleButtonClick}
            sx={{ mt: 4 }}
          >
            Start Your Free Trial
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
