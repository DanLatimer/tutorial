import { CatList } from "../components/cat-list";
import {AddCat} from "../components/add-cats";
export function Home() {
    return (
      <div>
        <h2>Home</h2>
        <CatList/>
        <AddCat/>
      </div>
    );
  }