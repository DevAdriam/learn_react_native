import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
const logo = require("../assets/adaptive-icon.png");

const ImageTag = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
            {/* <Image source={logo} style={{ width: 300, height: 300 }}></Image>
            <Image
                source={{
                    uri: "https://images.unsplash.com/photo-1682687982183-c2937a74257c?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
                style={{ width: 300, height: 300 }}
            ></Image> */}
            <ImageBackground source={logo} style={{ flex: 1 }}>
                <Text>Image Text</Text>
            </ImageBackground>
        </View>
    );
};

export default ImageTag;
