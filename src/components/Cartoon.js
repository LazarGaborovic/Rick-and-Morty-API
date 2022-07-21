import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Cartoon.css";
import { Container, Row, CardBody, Card, CardTitle, Col } from "reactstrap";


const Cartoon = () => {
  const [results, setResults] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log('info :', info);
    console.log('search: ', search);
    console.log('results: ', results);
  },[ info, search, results]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://rickandmortyapi.com/api/character?page=1"
        );
        setInfo(data.info);
        setSearch(data.search)
        setCharacters(data.results);
        setResults(data.results)
      } catch {
        console.log();
      }
    };

    fetchData();
  }, []); 
  return (
    <div className="cartoon_main mt-6" >
      <form>
        <input onChange={(e) => {
          setSearch(e.value.target)
        }}
        value={search}
        type="text" />
        <button>Search</button>
      </form>
      <div className="card__cartoon" >
          <Container >
          <Row>
            {characters.map((character, index) => {
              return (
                <Col sm="3" className="cards" >
               
                  <Card className="cartoon__cards m-2 bg-dark">
                    <img src={character.image} alt={results.name} 
                    />  
                    <CardBody className="characteristics">
                      <CardTitle>
                        <h1>{character.name}</h1>
                      </CardTitle>   
                      <p key={index}>{character.location.name}</p>
                      {(() => {
                        if(character.status === "Dead"){
                          return ( <div className="badge  text-bg-danger">{character.status}</div>
                          );
                        }
                        else if(character.status === "Alive"){
                          return (
                            <div className="  badge text-bg-success">{character.status}</div>
                          );
                        }
                        else {
                          return (
                            <div className="  badge  text-bg-secondary">{character.status}</div>
                          );
                        }
                      })()};
                               
                      -
                      <span> {character.gender}</span>
                      <p>{character.species}</p>
                      <p>{character.type}</p>
                  
                      
                    </CardBody>

                   
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Cartoon;
