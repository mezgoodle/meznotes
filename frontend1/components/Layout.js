import { Header } from "./Header";

export default function Layout({ children }) {
  return (
    <div className="container dark">
      <div className="app">
        <Header />
        {children}
      </div>
    </div>
  );
}
