/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import {
  actions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";
import RenderHtml from "react-native-render-html";

const REditor = () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const strikethrough = require("../assets/icon.png"); //icon for strikethrough
  const RichText = useRef(null); //reference to the RichEditor component
  const [article, setArticle] = useState("<p>start typing...</p>");
  const { width } = useWindowDimensions();

  // this function will be called when the editor has been initialized
  function editorInitializedCallback() {
    RichText.current?.registerToolbar(function (items) {
      // items contain all the actions that are currently active
      console.log(
        "Toolbar click, selected items (insert end callback):",
        items
      );
    });
  }

  // Callback after height change
  function handleHeightChange(height) {
    // console.log("editor height change:", height);
  }

  function onPressAddImage() {
    // you can easily add images from your gallery
    RichText.current?.insertImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/100px-React-icon.svg.png"
    );
  }

  return (
    <ScrollView style={styles.con}>
      <Text style={styles.text}></Text>
      <RichEditor
        disabled={false}
        containerStyle={styles.editor}
        ref={RichText}
        style={styles.rich}
        placeholder={"Start Writing Here"}
        onChange={(text) => setArticle(text)}
        editorInitializedCallback={editorInitializedCallback}
        onHeightChange={handleHeightChange}
      />
      <RichToolbar
        style={[styles.richBar]}
        editor={RichText}
        disabled={false}
        iconTint={"purple"}
        selectedIconTint={"pink"}
        disabledIconTint={"purple"}
        onPressAddImage={onPressAddImage}
        actions={[actions.setStrikethrough, actions.heading1]}
        // map icons for self made actions
        iconMap={{
          [actions.heading1]: ({ tintColor }) => (
            <Text style={[styles.tib, { color: tintColor }]}>H1</Text>
          ),
          [actions.setStrikethrough]: strikethrough,
        }}
      />
      <Text style={styles.text}>Result</Text>
      <RenderHtml contentWidth={width} source={{ html: article }} />
    </ScrollView>
  );
};

export default REditor;

const styles = StyleSheet.create({
  /********************************/
  /* styles for html tags */
  a: {
    fontWeight: "bold",
    color: "purple",
  },
  div: {
    fontFamily: "monospace",
  },
  p: {
    fontSize: 30,
  },
  /*******************************/
  con: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "#6472c5",
  },
  editor: {
    backgroundColor: "black",
    borderColor: "black",
    borderWidth: 1,
  },
  rich: {
    minHeight: 300,
    flex: 1,
  },
  richBar: {
    height: 50,
    backgroundColor: "#F5FCFF",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
  tib: {
    textAlign: "center",
    color: "#515156",
  },
});
