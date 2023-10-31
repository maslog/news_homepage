import Header from "./components/header";
import Main from "./components/main";
import Card from "./components/card";
import './App.css';
import img1 from "./assets/images/image-retro-pcs.jpg";
import img2 from "./assets/images/image-top-laptops.jpg";
import img3 from "./assets/images/image-gaming-growth.jpg";


function App() {
  return (
    <div className="Appp p-32 pt-10">
      <Header />
      <Main />

      <div className="flex justify-stretch mt-10">
        <Card num="01" image={img1} title="Reviving Retro PCs" text="What happens when old PCs are given modern upgrades?"></Card>
        <Card num="02" image={img2} title="Top 10 Laptops of 2022" text="Our best picks for various needs and budgets."></Card>
        <Card num="03" image={img3} title="The Growth of Gaming" text="How the pandemic has sparked fresh opportunities."></Card>
      </div>


    </div>
  );
}

export default App;
