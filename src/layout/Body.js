import React from "react";
import RestaurantCard from "../components/RestaurantCard";

const Body = () => {
    const resData = [
        {
            "info": {
                "id": "10583",
                "name": "Pizza Hut",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/a46c64e9-675b-45e5-9945-01a30b6cf99b_10583.JPG",
                "locality": "Coles Road",
                "areaName": "Frazer Town",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Pizzas"
                ],
                "avgRating": 4.3,
                "parentId": "721",
                "avgRatingString": "4.3",
                "totalRatingsString": "19K+",
                "sla": {
                    "deliveryTime": 42,
                    "lastMileTravel": 3.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "40-45 mins",
                    "lastMileTravelString": "3.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2025-10-07 03:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹98"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "4.4",
                        "ratingCount": "2.8K+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-87dd96cc-d858-454f-9863-f63304e55b7a"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/pizza-hut-coles-road-frazer-town-rest10583",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "303248",
                "name": "Theobroma",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/14/2d56f814-bab2-4110-ab76-af0f682045d1_303248.JPG",
                "locality": "Frazer Town",
                "areaName": "Frazer Town",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Desserts",
                    "Bakery",
                    "Beverages"
                ],
                "avgRating": 4.6,
                "parentId": "1040",
                "avgRatingString": "4.6",
                "totalRatingsString": "9.0K+",
                "sla": {
                    "deliveryTime": 30,
                    "lastMileTravel": 4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "4.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2025-10-06 23:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Rxawards/_CATEGORY-Desserts.png",
                            "description": "Delivery!"
                        },
                        {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                    }
                                },
                                {
                                    "attributes": {
                                        "description": "Gourmet",
                                        "imageId": "newg.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "15% OFF",
                    "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "4.1",
                        "ratingCount": "282"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-87dd96cc-d858-454f-9863-f63304e55b7a"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/theobroma-frazer-town-rest303248",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "5938",
                "name": "Burger King",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/b88fe4d2-557a-42a5-a801-a43a40134004_5938.jpg",
                "locality": "Tasker Town",
                "areaName": "Shivaji Nagar",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Burgers",
                    "American"
                ],
                "avgRating": 4.4,
                "parentId": "166",
                "avgRatingString": "4.4",
                "totalRatingsString": "39K+",
                "sla": {
                    "deliveryTime": 37,
                    "lastMileTravel": 3.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35-45 mins",
                    "lastMileTravelString": "3.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2025-10-07 04:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹59"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-87dd96cc-d858-454f-9863-f63304e55b7a"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/burger-king-tasker-town-shivaji-nagar-rest5938",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "124178",
                "name": "Starbucks Coffee",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/22/79a61e0c-9dd1-4ce1-8c86-dfcb8d9e32bc_124178.JPG",
                "locality": "Ashok Nagar",
                "areaName": "Ashok Nagar",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Beverages",
                    "Cafe",
                    "Snacks",
                    "Desserts",
                    "Bakery",
                    "Ice Cream"
                ],
                "avgRating": 4.3,
                "parentId": "195515",
                "avgRatingString": "4.3",
                "totalRatingsString": "2.4K+",
                "sla": {
                    "deliveryTime": 39,
                    "lastMileTravel": 4.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35-40 mins",
                    "lastMileTravelString": "4.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2025-10-06 23:59:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png",
                            "description": "Delivery!"
                        },
                        {
                            "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                            "description": "Delivery!"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png"
                                    }
                                },
                                {
                                    "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "4.5",
                        "ratingCount": "2.2K+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-87dd96cc-d858-454f-9863-f63304e55b7a"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/starbucks-coffee-ashok-nagar-rest124178",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "23796",
                "name": "Domino's Pizza",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/8/affd41ed-c585-49be-955c-54e5b24a13a0_23796.JPG",
                "locality": "Cunningham Road",
                "areaName": "Central Bangalore",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Pizzas",
                    "Italian",
                    "Pastas",
                    "Desserts"
                ],
                "avgRating": 4.4,
                "parentId": "2456",
                "avgRatingString": "4.4",
                "totalRatingsString": "17K+",
                "sla": {
                    "deliveryTime": 20,
                    "lastMileTravel": 1.8,
                    "serviceability": "SERVICEABLE",
                    "slaString": "15-20 mins",
                    "lastMileTravelString": "1.8 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2025-10-06 23:59:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Rxawards/_CATEGORY-Pizza.png",
                            "description": "Delivery!"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹59"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-87dd96cc-d858-454f-9863-f63304e55b7a"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/dominos-pizza-cunningham-road-central-bangalore-rest23796",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "49842",
                "name": "Ibaco",
                "cloudinaryImageId": "hylsy45223hmcqnxfb7i",
                "locality": "Frazer Town",
                "areaName": "Frazer Town",
                "costForTwo": "₹800 for two",
                "cuisines": [
                    "Desserts"
                ],
                "avgRating": 4.6,
                "parentId": "3481",
                "avgRatingString": "4.6",
                "totalRatingsString": "1.4K+",
                "sla": {
                    "deliveryTime": 28,
                    "lastMileTravel": 3.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "3.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2025-10-06 23:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                        }
                    ]
                },
                "isOpen": true,
                "aggregatedDiscountInfoV2": {},
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Gourmet",
                                        "imageId": "newg.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "4.2",
                        "ratingCount": "372"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-87dd96cc-d858-454f-9863-f63304e55b7a"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/ibaco-frazer-town-rest49842",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "677689",
                "name": "Mad Over Donuts",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/12/d841660e-2de8-4cf2-9e62-34471e2bd70f_677689.JPG",
                "locality": "Muninagappa layout",
                "areaName": "R.T Naga",
                "costForTwo": "₹200 for two",
                "cuisines": [
                    "Desserts",
                    "Sweets",
                    "Bakery"
                ],
                "avgRating": 4.3,
                "veg": true,
                "parentId": "611",
                "avgRatingString": "4.3",
                "totalRatingsString": "723",
                "sla": {
                    "deliveryTime": 42,
                    "lastMileTravel": 4.8,
                    "serviceability": "SERVICEABLE",
                    "slaString": "40-45 mins",
                    "lastMileTravelString": "4.8 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2025-10-07 00:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "25% OFF",
                    "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-87dd96cc-d858-454f-9863-f63304e55b7a"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/mad-over-donuts-muninagappa-layout-r-t-naga-rest677689",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "770772",
                "name": "Olio - The Wood Fired Pizzeria",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/9981e910-f172-48ba-b08f-c7e5141e7983_770772.JPG",
                "locality": "Ali Askar Road",
                "areaName": "Central Bangalore",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "Pizzas",
                    "Pastas",
                    "Italian",
                    "Fast Food",
                    "Snacks",
                    "Beverages",
                    "Desserts"
                ],
                "avgRating": 4.3,
                "parentId": "11633",
                "avgRatingString": "4.3",
                "totalRatingsString": "1.0K+",
                "sla": {
                    "deliveryTime": 38,
                    "lastMileTravel": 2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35-40 mins",
                    "lastMileTravelString": "2.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2025-10-07 05:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Gourmet",
                                        "imageId": "newg.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹119"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-87dd96cc-d858-454f-9863-f63304e55b7a"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/olio-the-wood-fired-pizzeria-ali-askar-road-central-bangalore-rest770772",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "237668",
                "name": "McDonald's",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/6e13e84c-0c56-41ac-8096-78ebc5469947_237668.JPG",
                "locality": "Commercial Street",
                "areaName": "Shivajinagar",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Burgers",
                    "Beverages",
                    "Cafe",
                    "Desserts"
                ],
                "avgRating": 4.6,
                "parentId": "630",
                "avgRatingString": "4.6",
                "totalRatingsString": "6.7K+",
                "sla": {
                    "deliveryTime": 34,
                    "lastMileTravel": 3.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "3.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2025-10-06 23:45:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
                            "description": "Delivery!"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹119"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-87dd96cc-d858-454f-9863-f63304e55b7a"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/mcdonalds-commercial-street-shivajinagar-rest237668",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "347868",
                "name": "KFC",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/6389f7cc-dbd3-4c6d-8113-f54fb0f7d0c4_347868.JPG",
                "locality": "Cunnigham road",
                "areaName": "Central Bangalore",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Burgers",
                    "Fast Food",
                    "Rolls & Wraps"
                ],
                "avgRating": 4.3,
                "parentId": "547",
                "avgRatingString": "4.3",
                "totalRatingsString": "6.7K+",
                "sla": {
                    "deliveryTime": 36,
                    "lastMileTravel": 2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35-40 mins",
                    "lastMileTravelString": "2.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2025-10-07 01:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹119"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-87dd96cc-d858-454f-9863-f63304e55b7a"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/kfc-cunnigham-road-central-bangalore-rest347868",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "672074",
                "name": "Subway",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/8f9a90a5-4f89-4234-b4ed-a840580dbe52_672074.jpg",
                "locality": "Ashok Nagar",
                "areaName": "Sobha Mall",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "sandwich",
                    "Salads",
                    "wrap",
                    "Healthy Food"
                ],
                "avgRating": 4.5,
                "parentId": "2",
                "avgRatingString": "4.5",
                "totalRatingsString": "2.2K+",
                "sla": {
                    "deliveryTime": 38,
                    "lastMileTravel": 3.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35-40 mins",
                    "lastMileTravelString": "3.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2025-10-07 03:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹69"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-87dd96cc-d858-454f-9863-f63304e55b7a"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/subway-ashok-nagar-sobha-mall-rest672074",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "245536",
                "name": "Brik Oven - Original Sourdough Pizzas",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/11/41a548e0-7b72-4591-859a-4673e8ea0f68_245536.jpg",
                "locality": "High Grounds",
                "areaName": "High Grounds",
                "costForTwo": "₹700 for two",
                "cuisines": [
                    "Italian",
                    "Pizzas",
                    "Desserts",
                    "Beverages"
                ],
                "avgRating": 4.4,
                "parentId": "488952",
                "avgRatingString": "4.4",
                "totalRatingsString": "6.1K+",
                "sla": {
                    "deliveryTime": 33,
                    "lastMileTravel": 1.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "1.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2025-10-06 23:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Gourmet",
                                        "imageId": "newg.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹115"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "4.4",
                        "ratingCount": "1.2K+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-87dd96cc-d858-454f-9863-f63304e55b7a"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/brik-oven-original-sourdough-pizzas-high-grounds-rest245536",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "435405",
                "name": "Chaayos Chai+Snacks=Relax",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_435405.JPG",
                "locality": "Cunningham Road",
                "areaName": "Central Bangalore",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Beverages",
                    "Chaat",
                    "Snacks",
                    "Bakery",
                    "Street Food",
                    "healthy",
                    "Home Food",
                    "Maharashtrian",
                    "Italian",
                    "Desserts"
                ],
                "avgRating": 4.6,
                "veg": true,
                "parentId": "281782",
                "avgRatingString": "4.6",
                "totalRatingsString": "2.6K+",
                "sla": {
                    "deliveryTime": 33,
                    "lastMileTravel": 1.8,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "1.8 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2025-10-07 00:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹84"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "4.2",
                        "ratingCount": "456"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-87dd96cc-d858-454f-9863-f63304e55b7a"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/chaayos-chai-snacks-relax-cunningham-road-central-bangalore-rest435405",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "53607",
                "name": "Sweet Chariot",
                "cloudinaryImageId": "zld92burraevhjwphfgc",
                "locality": "Cunnigham road",
                "areaName": "Central Bangalore",
                "costForTwo": "₹500 for two",
                "cuisines": [
                    "Desserts"
                ],
                "avgRating": 4.7,
                "parentId": "912",
                "avgRatingString": "4.7",
                "totalRatingsString": "3.0K+",
                "sla": {
                    "deliveryTime": 24,
                    "lastMileTravel": 2.2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "2.2 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2025-10-06 21:30:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "aggregatedDiscountInfoV2": {},
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-87dd96cc-d858-454f-9863-f63304e55b7a"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/sweet-chariot-cunnigham-road-central-bangalore-rest53607",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "3436",
                "name": "Nandhini Deluxe",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/3/147063cd-d445-4c26-a6ee-aef802e76f93_3436.jpg",
                "locality": "Sankey Road",
                "areaName": "Seshadripuram",
                "costForTwo": "₹500 for two",
                "cuisines": [
                    "North Indian",
                    "Chinese",
                    "Andhra",
                    "Biryani"
                ],
                "avgRating": 4.4,
                "parentId": "2451",
                "avgRatingString": "4.4",
                "totalRatingsString": "27K+",
                "sla": {
                    "deliveryTime": 42,
                    "lastMileTravel": 1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "40-45 mins",
                    "lastMileTravelString": "1.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2025-10-06 23:59:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "₹100 OFF",
                    "subHeader": "ABOVE ₹699",
                    "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "3.4",
                        "ratingCount": "893"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-87dd96cc-d858-454f-9863-f63304e55b7a"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/nandhini-deluxe-sankey-road-seshadripuram-rest3436",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "241420",
                "name": "Misu",
                "cloudinaryImageId": "sfiv4ftxpr8lihrj9scz",
                "locality": "Shivaji Nagar",
                "areaName": "Seshadripuram",
                "costForTwo": "₹1300 for two",
                "cuisines": [
                    "Asian",
                    "Chinese",
                    "Vietnamese",
                    "Malaysian",
                    "Sushi",
                    "Singaporean",
                    "Desserts"
                ],
                "avgRating": 4.5,
                "parentId": "7415",
                "avgRatingString": "4.5",
                "totalRatingsString": "2.7K+",
                "sla": {
                    "deliveryTime": 33,
                    "lastMileTravel": 1.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "1.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2025-10-06 23:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Gourmet",
                                        "imageId": "newg.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "60% OFF",
                    "subHeader": "UPTO ₹120"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "4.4",
                        "ratingCount": "507"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-87dd96cc-d858-454f-9863-f63304e55b7a"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/misu-shivaji-nagar-seshadripuram-rest241420",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "570511",
                "name": "Bakingo",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/11/7244708a-5369-4a94-a295-452b1d294579_570511.JPG",
                "locality": "Puhlong X-road",
                "areaName": "Vasanth Nagar",
                "costForTwo": "₹299 for two",
                "cuisines": [
                    "Bakery",
                    "Desserts",
                    "Beverages",
                    "Snacks"
                ],
                "avgRating": 4.6,
                "parentId": "3818",
                "avgRatingString": "4.6",
                "totalRatingsString": "5.1K+",
                "sla": {
                    "deliveryTime": 23,
                    "lastMileTravel": 1.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "1.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2025-10-07 01:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "₹550 OFF",
                    "subHeader": "ABOVE ₹2999",
                    "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-87dd96cc-d858-454f-9863-f63304e55b7a"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/bakingo-puhlong-x-road-vasanth-nagar-rest570511",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "382636",
                "name": "Wendy's Burgers",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/097020c5-09e8-4430-96fb-77ef985c2935_382636.JPG",
                "locality": "Vasanth Nagar",
                "areaName": "R.T. Nagar",
                "costForTwo": "₹200 for two",
                "cuisines": [
                    "Burgers",
                    "American",
                    "Fast Food",
                    "Snacks"
                ],
                "avgRating": 4.2,
                "parentId": "972",
                "avgRatingString": "4.2",
                "totalRatingsString": "3.3K+",
                "sla": {
                    "deliveryTime": 35,
                    "lastMileTravel": 0.8,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35-40 mins",
                    "lastMileTravelString": "0.8 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2025-10-06 23:59:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹59"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-87dd96cc-d858-454f-9863-f63304e55b7a"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/wendys-burgers-vasanth-nagar-r-t-nagar-rest382636",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "15905",
                "name": "Anand Sweets & Savouries",
                "cloudinaryImageId": "me4mzdjxosmk0lg4ndog",
                "locality": "Commercial Street",
                "areaName": "Shivajinagar",
                "costForTwo": "₹200 for two",
                "cuisines": [
                    "Sweets",
                    "Chaat",
                    "Snacks",
                    "Desserts"
                ],
                "avgRating": 4.7,
                "veg": true,
                "parentId": "53",
                "avgRatingString": "4.7",
                "totalRatingsString": "23K+",
                "sla": {
                    "deliveryTime": 49,
                    "lastMileTravel": 3.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "45-50 mins",
                    "lastMileTravelString": "3.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2025-10-06 22:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Rxawards/_CATEGORY-Mithai.png",
                            "description": "Delivery!"
                        }
                    ]
                },
                "isOpen": true,
                "aggregatedDiscountInfoV2": {},
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Rxawards/_CATEGORY-Mithai.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "4.2",
                        "ratingCount": "8.1K+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-87dd96cc-d858-454f-9863-f63304e55b7a"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/anand-sweets-and-savouries-commercial-street-shivajinagar-rest15905",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "855717",
                "name": "Burgerama",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/5/bc55063f-9d8d-439c-bc58-b630bbdc280f_855717.jpg",
                "locality": "Vasanth Nagar",
                "areaName": "R.T. Nagar",
                "costForTwo": "₹700 for two",
                "cuisines": [
                    "Burger"
                ],
                "avgRating": 4.3,
                "parentId": "8993",
                "avgRatingString": "4.3",
                "totalRatingsString": "443",
                "sla": {
                    "deliveryTime": 29,
                    "lastMileTravel": 0.8,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "0.8 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2025-10-06 23:59:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Gourmet",
                                        "imageId": "newg.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "₹550 OFF",
                    "subHeader": "ABOVE ₹2999",
                    "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-87dd96cc-d858-454f-9863-f63304e55b7a"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/burgerama-vasanth-nagar-r-t-nagar-rest855717",
                "type": "WEBLINK"
            }
        }
    ];


    return (
        <div className="body-container">
            <div className="search">Search</div>
            <div className="res-container">
                {resData.map((resItem) => (
                    <RestaurantCard resItem={resItem.info} key={resItem.info.id} />
                )
                )}
            </div>
        </div>
    )
}

export default Body;