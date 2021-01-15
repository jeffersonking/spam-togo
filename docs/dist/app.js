import {InteractionType} from "../web_modules/@azure/msal-browser.js";
import {AuthenticatedTemplate, UnauthenticatedTemplate, useIsAuthenticated, useMsal, useMsalAuthentication} from "../web_modules/@azure/msal-react.js";
import swc from "../web_modules/@microsoft/sarif-web-component.js";
import {Button} from "../web_modules/azure-devops-ui/Button.js";
import {Spinner} from "../web_modules/azure-devops-ui/Spinner.js";
import React, {useEffect, useState} from "../web_modules/react.js";
import {useHistoryState} from "./useHistoryState.js";
const request = {
  scopes: ["api://f42dbafe-6e53-4dce-b025-cc4df39fb5cc/Ruleset.read"]
};
const readAsText = (file) => new Promise((resolve, reject) => {
  let reader = new FileReader();
  reader.onload = () => resolve(reader.result);
  reader.onerror = reject;
  reader.readAsText(file);
});
function tryURL(url) {
  if (!url.startsWith("http"))
    return void 0;
  try {
    return new URL(url);
  } catch (_) {
  }
  return void 0;
}
const {Viewer} = swc;
export function App() {
  const isAuthenticated = useIsAuthenticated();
  const {instance, accounts} = useMsal();
  const {login} = useMsalAuthentication(InteractionType.Silent, request);
  const [analyzing, setAnalyzing] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileContents, setFileContents] = useState("");
  const [sarif, setSarif] = useHistoryState();
  useEffect(() => {
    const fileName2 = tryURL(fileContents)?.pathname.split("/").pop();
    if (fileName2)
      setFileName(fileName2);
  }, [fileContents]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "intro"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "introHeader"
  }, /* @__PURE__ */ React.createElement("h1", null, "CredScan-on-Push Tester"), analyzing && /* @__PURE__ */ React.createElement(Spinner, null), !sarif ? /* @__PURE__ */ React.createElement(Button, {
    className: "buttonAnalyze",
    primary: true,
    disabled: !isAuthenticated || !fileContents || analyzing,
    onClick: async () => {
      let urlFileName = void 0;
      let urlContent = void 0;
      try {
        const url = tryURL(fileContents);
        if (!url)
          throw new Error("URL is empty");
        const urlResponse = await fetch(url.toString());
        urlFileName = url.pathname.split("/").pop();
        urlContent = await urlResponse.text();
      } catch (_) {
      }
      setAnalyzing(true);
      const headers = new Headers();
      if (isAuthenticated) {
        const tokenResponse = await instance.acquireTokenSilent({
          account: instance.getAllAccounts()[0],
          ...request
        });
        headers.append("Authorization", `Bearer ${tokenResponse.accessToken}`);
      }
      const body = new FormData();
      body.append("filename", fileName);
      body.append("filecontent", urlContent ?? fileContents);
      const response = await fetch("https://sarif-pattern-matcher-internal-function.azurewebsites.net/api/analyze", {method: "POST", headers, body});
      const responseJson = await response.json();
      setFileName("");
      setFileContents("");
      setSarif(responseJson);
      setAnalyzing(false);
    }
  }, "Analyze ", fileName) : /* @__PURE__ */ React.createElement(Button, {
    className: "buttonAnalyze",
    onClick: async () => history.back()
  }, "Clear"), /* @__PURE__ */ React.createElement(UnauthenticatedTemplate, null, /* @__PURE__ */ React.createElement(Button, {
    primary: !!fileContents,
    onClick: () => login(InteractionType.Popup, request)
  }, "Sign in")), /* @__PURE__ */ React.createElement(AuthenticatedTemplate, null, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => instance.logout()
  }, "Sign out ", accounts[0]?.username))), /* @__PURE__ */ React.createElement("textarea", {
    value: fileContents,
    spellCheck: "false",
    autoComplete: "off",
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
    logs: sarif && [sarif],
    filterState: {
      Baseline: {value: ["new", "unchanged", "updated"]},
      Level: {value: ["error", "warning"]}
    }
  })));
}
