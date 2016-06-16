import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "headerText": {
        "alignItems": "center",
        "paddingBottom": 20
    },
    "search-widget": {
        "display": "flex",
        "flexDirection": "column",
        "marginTop": 30,
        "alignItems": "center",
        "width": "100%"
    },
    "wrapper": {
        "flexDirection": "column",
        "alignItems": "center",
        "display": "flex",
        "marginTop": 30
    },
    "error-widget": {
        "marginTop": 20,
        "justifyContent": "center",
        "width": "80%"
    },
    "container": {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "space-between",
        "marginTop": 0,
        "marginRight": 130,
        "marginBottom": 0,
        "marginLeft": 130
    },
    "section-map": {
        "marginTop": 50,
        "marginRight": "auto",
        "marginBottom": 50,
        "marginLeft": "auto",
        "height": 500,
        "flexDirection": "column",
        "alignItems": "center"
    },
    "map-widget": {
        "alignItems": "center"
    },
    "footer-info": {
        "width": "100%",
        "borderTop": "5px solid #63b672"
    }
});