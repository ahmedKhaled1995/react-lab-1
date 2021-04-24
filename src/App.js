import usePosts from "./hooks/usePosts";

import Header from "./components/Header";
import Input from "./components/Input";

function App() {

  const { posts, getUserData } = usePosts([])

  return (
    <div className="App">
      <Header title={"Blog Post"}></Header>
      <Input onSubmit={getUserData} />
    </div>
  );
}

export default App;
