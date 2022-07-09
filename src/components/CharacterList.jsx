import { useEffect, useState } from "react";
import Character from "./Character";

function NavPage(props) {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <p>page :{props.page}</p>
      <button className="btn btn-primary btn-sm"
      onClick={()=> props.setPage(props.page+ 1)}
      >
        page {props.page + 1}
      </button>

    </header>
  )
}

function CharacterList() {
  const [cahracter, setcahracter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      console.log(data.results);
      setcahracter(data.results);
      setLoading(false);
    }
    fetchData();
  }, [page]);

  return (
    <div className="container">
      <NavPage page={page} setPage={setPage}/>

      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <div className="row">
          {cahracter.map((cahracte) => {
            return (
              <div className="col-md-4" key={cahracte.id}>
                <Character cahracte={cahracte} />
              </div>
            );
          })}
        </div>
      )}

<NavPage page={page} setPage={setPage}/>
    </div>
  );
}

export default CharacterList;
