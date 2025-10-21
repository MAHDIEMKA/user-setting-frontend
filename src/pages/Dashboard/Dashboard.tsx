import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FaUser, FaShoppingCart, FaDollarSign, FaBoxOpen, FaUsers } from "react-icons/fa";

export default function Dashboard() {
  const cards = [
    { title: "Users", value: 120, icon: <FaUser size={30} />, color: "#3b82f6"},       // blue
    { title: "Orders", value: 75, icon: <FaShoppingCart size={30} />, color: "#22c55e" }, // green
    { title: "Revenue", value: "$4,500", icon: <FaDollarSign size={30} />, color: "#eab308" }, // yellow
    { title: "Products", value: 50, icon: <FaBoxOpen size={30} />, color: "#a855f7" },   // purple
    { title: "Visitors", value: 300, icon: <FaUsers size={30} />, color: "#ec4899" },    // pink
  ];

  const handleClick = (title: string) => {
    alert(title);
  };

  return (
    <Box
      sx={{
        p: 6,
        width: "15%",
        background: "linear-gradient(90deg, #1307ec 0%, #433cc0 27%, #00d4ff 82%)",
        // minHeight: "100vh",
        // border: "50px solid black"
        height: "100vh"
      }}
    >
      <Typography
        variant="h4"
        // fontWeight="bold"
        mb={6}
        sx={{ color: "white", textAlign: "center" }}
      >
        Dashboard
      </Typography>

      <Box
        sx={{
          width: "100%",
          height: "10%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start", // کارت‌ها زیر هم قرار می‌گیرن
          gap: 3,
          alignItems: "center",
          // border: "50px solid black"
        }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            style={{ width: "100%", maxWidth: 400 }}
          >
            <Card
              onClick={() => handleClick(card.title)}
              sx={{
                background: card.color,
                color: "white",
                borderRadius: 4,
                boxShadow:
                  "0 8px 20px rgba(0,0,0,0.15), inset 0 0 30px rgba(255,255,255,0.05)",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                p: 3,
                transition: "0.4s",
                width: "100%",
                "&:hover": {
                  boxShadow:
                    "0 12px 30px rgba(0,0,0,0.25), inset 0 0 40px rgba(255,255,255,0.1)",
                },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.15), transparent)",
                  opacity: 0,
                  transition: "0.4s",
                  "&:hover": { opacity: 0.3 },
                }}
              />

              <CardContent sx={{ zIndex: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Box sx={{ mr: 2, fontSize: 40 }}>{card.icon}</Box>
                  <Typography variant="h6" fontWeight="bold">
                    {card.title}
                  </Typography>
                </Box>
                <Typography variant="h4" fontWeight="900">
                  {card.value}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}
