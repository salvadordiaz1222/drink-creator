import Header from "./components/Header";
import Footer from "./components/Footer";
import { ApolloProvider, ApolloClient, inMemoryCache } from "react-apollo";
import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new inMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />

      <Footer />
    </ApolloProvider>
  );
}

export default App;
