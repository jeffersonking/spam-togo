import {Button} from "../web_modules/azure-devops-ui/Button.js";
import {Spinner} from "../web_modules/azure-devops-ui/Spinner.js";
import React, {useState} from "../web_modules/react.js";
import swc from "../web_modules/@microsoft/sarif-web-component.js";
const readAsText = (file) => new Promise((resolve, reject) => {
  let reader = new FileReader();
  reader.onload = () => resolve(reader.result);
  reader.onerror = reject;
  reader.readAsText(file);
});
const {Viewer} = swc;
export function App() {
  const [analyzing, setAnalyzing] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileContents, setFileContents] = useState("https://raw.githubusercontent.com/microsoft/sarif-pattern-matcher/main/README.md");
  const [sarif, setSarif] = useState(void 0);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "intro"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "introHeader"
  }, /* @__PURE__ */ React.createElement("h1", null, "SARIF Pattern Matcher"), analyzing && /* @__PURE__ */ React.createElement(Spinner, null), /* @__PURE__ */ React.createElement(Button, {
    className: "buttonAnalyze",
    primary: !sarif,
    disabled: analyzing || !fileContents,
    onClick: async () => {
      if (sarif) {
        setFileName("");
        setFileContents("");
        setSarif(void 0);
        return;
      }
      let urlContent = void 0;
      try {
        const url = new URL(fileContents);
        const urlResponse = await fetch(url.toString());
        urlContent = await urlResponse.text();
      } catch (_) {
      }
      setAnalyzing(true);
      const body = new FormData();
      body.append("filename", fileName);
      body.append("filecontent", urlContent ?? fileContents);
      body.append("ruleid", "SEC1001");
      const response = await fetch("https://myspamcheckertest.azurewebsites.net/api/analyze", {method: "POST", body});
      const responseJson = await response.json();
      setSarif(responseJson);
      setAnalyzing(false);
    }
  }, !sarif ? `Analyze ${fileName}` : `Clear`)), /* @__PURE__ */ React.createElement("textarea", {
    value: fileContents,
    spellCheck: "false",
    onChange: (e) => setFileContents(e.target.value),
    onDragOver: (e) => e.preventDefault(),
    onDrop: async (e) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      setFileName(file.name);
      setFileContents(await readAsText(file));
    },
    placeholder: "Enter text, enter an url, or drop a file here."
  })), /* @__PURE__ */ React.createElement("div", {
    className: `viewer ${sarif ? "viewerActive" : ""}`
  }, /* @__PURE__ */ React.createElement(Viewer, {
    logs: sarif && [sarif]
  })));
}
