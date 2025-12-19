import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Paul Käufl",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["Red, yellow, green", "Fast Feedback", "Developing in Teams"],
    // Which CI/CD tools do you use in your project?
    tools: "Jenkins",
    // What do you want to learn in this workshop?
    expectations: ["Learn how to improve this workshop"],
  },
});
