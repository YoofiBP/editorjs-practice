import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import { Button, Paper, Typography } from "@mui/material";
import { useState, useEffect } from "react";

function App() {
  const [editor, setEditor] = useState<EditorJS | null>();

  useEffect(() => {
    const Editor = new EditorJS({
      holder: "editorjs",

      tools: {
        header: {
          class: Header,
          inlineToolbar: ["link"],
        },
        list: {
          class: List,
          inlineToolbar: true,
        },
      },
      onReady: () => {
        setEditor(Editor);

        document
          .getElementById("save")
          ?.addEventListener("click", () =>
            Editor.save().then((output) => console.log(output))
          );
      },
      autofocus: true,

      onChange: (api, event) => {
        Editor.save()?.then((data) => {
          console.log();
        });

        // console.log("Now I know that Editor's content changed!", event);
      },
    });
  }, []);

  // const onSave = () => {
  //   console.log(editor);
  //   editor
  //     ?.save()
  //     .then((outputData: any) => {
  //       // const array = outputData.blocks;
  //       console.log("Article data: ", outputData);
  //     })
  //     .catch((error: any) => {
  //       console.log("Saving failed: ", error);
  //     });
  // };

  return (
    <>
      <Paper elevation={3} sx={{ margin: "50px", height: "700px" }}>
        <div id="editorjs"></div>
      </Paper>
      <Typography align="center">
        <Button variant="contained" color="success" id="save">
          Submit
        </Button>
      </Typography>
    </>
  );
}

export default App;
