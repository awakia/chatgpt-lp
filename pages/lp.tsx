import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { useRouter } from "next/router";

const HomePage: React.FC = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/signup");
  };

  return (
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
        <Typography variant="h2" component="h1">
          Unlock Your English Potential with AI
        </Typography>
        <Typography variant="h5" component="h2">
          AIとともに英語の可能性を解き放とう
        </Typography>
        <Typography variant="subtitle1" component="p">
          AIがあなたの英語学習をサポート！最先端の技術で効果的な学習体験を提供します。
        </Typography>
        <Typography variant="body1" component="p">
          リアルタイムでフィードバックを受け取り、学習の弱点を克服し、英語力を向上させましょう。さあ、無料トライアルを始めて、AIがもたらす英会話の未来を体験しましょう！
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" component="h3">
            5つ星の評価を受けた信頼のサービス
          </Typography>
          <Typography variant="body2" component="p">
            "AI英会話サービスは私の英語力を飛躍的に向上させました。短期間で効果を実感できる最高の学習方法です。"
            - Taro Yamada
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleButtonClick}
        >
          Start Your Free Trial
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
