import React, { useEffect, useState } from 'react'

const Bot = () => {
    const [output, setOutput] = useState("");
    const [displayLearnMore, setDisplayLearnMore] = useState("none");
    const [contents, setContents] = useState([]);
  
    function fetchInput() {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recorder = new SpeechRecognition();
      let record = recorder.start();
  
      recorder.onstart = () => {};
  
      recorder.onresult = (event) => {
        const resultIndex = event.resultIndex;
        const transcript = event.results[resultIndex][0].transcript;
        let input = transcript;
        localStorage.setItem("voicein", input);
  
        if (input) {
          if (input.includes("your name")) {
            const reply = "My name is Prakash Dsouza";
            setOutput(reply);
            localStorage.setItem("reply", reply);
          } else if (
            input.includes("something about you") ||
            input.includes("about yourself")
          ) {
            window.location.replace("/about");
            const reply =
              "I'm a front-end developer with having a 6 months of experience of developing websites with my skills";
            setOutput(reply);
            localStorage.setItem("reply", reply);
          } else if (
            input.includes("contact page") ||
            input.includes("contact details")
          ) {
            window.location.replace("/contact");
            const reply =
              "To contact me via e-mail on prakashdsouza077@gmail.com. If you would like to call me please call me on +91 6360242612";
            setOutput(reply);
            localStorage.setItem("reply", reply);
          } else if (
            input.includes("mobile number") ||
            input.includes("phone number") ||
            input.includes("contact number") 
          ) {
            const reply = "My phone number is +91 6360243612.";
            setOutput(reply);
            localStorage.setItem("reply", reply);
          } else if (input.includes("your mail") || input.includes("mail ID")) {
            setOutput("My mail id is prakashdsouza077@gmail.com. ");
          } else if (
            input.includes("projects page") ||
            input.includes("projects")
          ) {
            window.location.replace("/projects");
            setOutput("Redirected to Projects Page");
          } else if (input.includes("about page") || input.includes("about")) {
            window.location.replace("/about");
            setOutput("Redirected to about Page");
          } else if (input.includes("home page") || input.includes("home")) {
            window.location.replace("/");
            setOutput("Welcome back to my Home Page");
          } else if (input.includes("resume")) {
            window.location.replace(
              "https://drive.google.com/file/d/1Rgzh2mCImDb_nE1rFqjzFJM4ZPx2hM38/view"
            );
          } else {
            const reply = "Sorry dear";
            setOutput(reply);
            localStorage.setItem("reply", reply);
          }
        } else {
          setOutput(" ");
        }
      };
    }
  
    async function voice() {
      const speech = new SpeechSynthesisUtterance();
      await (speech.text = output);
      await setOutput("");
      speech.volume = 5;
      speech.rate = 0.8;
      speech.pitch = 0;
      window.speechSynthesis.speak(speech);
    }
  
    voice();
  
    function addText() {
      let textin = localStorage.getItem("voicein");
      let textout = localStorage.getItem("reply");
  
      let id = contents.length + 1;
  
      const myList = {
        slno: id,
        in: textin,
        out: textout,
      };
  
      setContents([...contents, myList]);
    }
  
    function click() {
      setDisplayLearnMore("block");
    }
  
    useEffect(() => {
      if (displayLearnMore === "block") {
        addText();
      } else {
      }
    }, [displayLearnMore]);
  return (
    <div className="assistant">
    <div className="mic" onClick={() => fetchInput()}>
      <i className="fas fa-microphone-alt"></i> tap hererji
    </div>
    <p onClick={() => click()}>Learn More</p>
  </div>
  )
}

export default Bot