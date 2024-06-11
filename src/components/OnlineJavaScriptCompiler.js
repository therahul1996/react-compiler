import React, { useState, useEffect } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-tomorrow";

const OnlineJavaScriptCompiler = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const consoleLog = (message) => {
    setOutput(message + "\n");
  };

  useEffect(() => {
    // Redirect console log
    console.log = consoleLog;
  }, []);

  const runCode = () => {
    try {
      // Execute the JavaScript code using eval (unsafe for production use)
      // eslint-disable-next-line no-eval
      eval(code);
    } catch (error) {
      console.error("Error: " + error.message);
      setOutput(error.message + "\n");
    }
  };

  return (
    <div>
      <div className="w-[50%]">
        <h2>Online JavaScript Compiler</h2>
        <AceEditor
          mode="javascript"
          theme="tomorrow"
          value={code}
          onChange={(newCode) => setCode(newCode)}
          name="code-editor"
          editorProps={{ $blockScrolling: true }}
        />
      </div>

      <button onClick={runCode}>Run Code</button>
      <div>
        <h3>Output:</h3>
        <AceEditor
          mode="javascript"
          theme="tomorrow"
          value={output}
          name="code-editor"
        />
      </div>
    </div>
  );
};

export default OnlineJavaScriptCompiler;
