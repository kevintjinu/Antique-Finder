const INITIAL_STATE = {
  sections: [
    {
      title: "Clocks",
      // imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      imageUrl: "https://c4.wallpaperflare.com/wallpaper/90/928/972/blue-mechanism-clock-steampunk-wallpaper-preview.jpg", // local file in public/images/
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "Jewellery",
      // imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      imageUrl: "https://c0.wallpaperflare.com/preview/850/335/822/wristwatch-rolex-watch-wrist-watch.jpg", // local file in public/images/
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "Cars",
      // imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      imageUrl: "https://c1.wallpaperflare.com/preview/279/137/96/car-vehicle-transportation-system-classic.jpg", // local file in public/images/
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "Rare Novel Books",
      // imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      imageUrl: "https://c4.wallpaperflare.com/wallpaper/775/897/127/books-old-macro-wallpaper-preview.jpg", // local file in public/images/
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "Others",
      // imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      imageUrl: "https://c4.wallpaperflare.com/wallpaper/865/337/65/wine-red-glasses-grapes-wallpaper-preview.jpg", // local file in public/images/
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ]
};

const directoryReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default directoryReducer;