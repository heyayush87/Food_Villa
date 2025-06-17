import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());

// Proxy for restaurant list
app.get("/api/foodvilla-restaurants", async (req, res) => {
  const url =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.148636167537521&lng=77.61002194136381&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  try {
    const response = await fetch(url, {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        accept: "application/json",
      },
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch restaurant list" });
  }
});

// Proxy for restaurant menu (expects ?id=RESTAURANT_ID)
app.get("/api/foodvilla-menu", async (req, res) => {
  const { id } = req.query;
  if (!id) return res.status(400).json({ error: "Missing restaurant id" });

  const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.148636167537521&lng=77.61002194136381&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;
  try {
    const response = await fetch(url, {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        accept: "application/json",
      },
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch menu" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));
