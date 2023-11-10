import React from "react";
import { Text, View } from "react-native";

const TextTag = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
            <Text>
                <Text style={{ color: "white" }}>Hello</Text>World
            </Text>
        </View>
    );
};

export default TextTag;
