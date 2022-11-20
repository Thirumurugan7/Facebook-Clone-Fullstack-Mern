function App() {
  const get = async () => {
    const res = await fetch("http://localhost:8000/");
    console.log(res);

    // console.log("body" + res.body);
    // console.log(res.bodyUsed);
    // console.log(res.ok);
    // console.log(res.json);
    // console.log(res.type);
    // console.log(res.url);
    // console.log(res.statusText);
    // console.log(res.formData);
    // console.log(res.headers);
    // console.log(res.redirected);
    // console.log(res.blob);
  };
  get();
  return <div>welcome to frontend</div>;
}

export default App;
