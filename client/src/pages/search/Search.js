import { NwkraftChecklist, Searchbar } from "../../components";

function Search() {
  return (
    <>
      <div>
        <form action="search">
          <Searchbar />
          <NwkraftChecklist showOptions={true} />
          <input type="submit" value="submit"></input>
        </form>
      </div>
    </>
  );
}

export default Search;
