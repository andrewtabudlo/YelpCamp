var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("landing");
});

app.get("/campgrounds", (req, res) => {
  var campgrounds = [
    {name: "Salmon Creek", image: "https://pixabay.com/get/ec3cb20e2cf21c22d2524518b7444795ea76e5d004b0144295f5c879a3efbd_340.jpg"},
    {name: "Granite Hill", image: "https://www.photosforclass.com/download/pixabay-1846142?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fe83db50929f0033ed1584d05fb1d4e97e07ee3d21cac104496f0c47fa7e9b7bf_960.jpg&user=Pexels"},
    {name: "Mountain Goat's Rest", image: "https://www.photosforclass.com/download/flickr-225912054"}
  ]

  res.render("campgrounds", {campgrounds: campgrounds});
});

app.listen(3000, () => {
  console.log("The YelpCamp Server has started!");
});
