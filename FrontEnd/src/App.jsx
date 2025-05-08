import "prismjs/themes/prism-tomorrow.css";
import Prism from "prismjs";
import "./App.css";
import Editor from "react-simple-code-editor";
import { useEffect, useState } from "react";
import axios from "axios";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

function App() {
  const [code, setcode] = useState(``);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  async function reviewCode() {
    const response = await axios.post("https://code-reviewer-backend-qfjt.onrender.com", {code});

    setreview(response.data);
    //  console.log(response.data)
  }

  const [review, setreview] = useState(``);

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setcode(code)}
              highlight={(code) =>
                Prism.highlight(code, Prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                fontSize: 16,
                fontFamily: "monospace",
                height: "100%",
                width: "100%",
              }}
            />
          </div>
          <div className="reviewbtn" onClick={reviewCode}>
            Review
          </div>
        </div>

        <div className="right">
          <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
        </div>
      </main>
    </>
  );
}

export default App;
