import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Stack from "react-bootstrap/Stack";
import {
  FaSearch,
} from "react-icons/fa";

const Search = (searchProps) => {
  const { search, setQuery, query, ascendingList, descendingList, sortOwnerList, sortPetList } = searchProps;

  return (
    <Stack direction="horizontal" className="my-3 mx-auto w-75," gap={0}>
      <Form.Control
        className="me-auto"
        placeholder="Search here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ marginLeft: '0px', }}
      />
      <Button
        variant="success"
        size="sm"
        onClick={search.search}
        title="Search"
        style={{ marginLeft: '1px',backgroundColor:'blue', }}
      >
        <FaSearch />
      </Button>
      <div className="border" >
        <Dropdown>
          <Dropdown.Toggle
            variant="outline-success"
            size="sm"
            id="dropdown-basic"
            style={{
              backgroundColor: 'blue',
              color: 'white',
              marginLeft: 'auto',
              width: 'fit-content',
            }}
          >
            Sort by
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={descendingList} title="Descending">
                  DESC
            </Dropdown.Item>
            <Dropdown.Item onClick={ascendingList} title="Ascending">
                   ASC
            </Dropdown.Item>
            <Dropdown.Item onClick={sortPetList} title="Pet Name">
                   Pet
            </Dropdown.Item>
            <Dropdown.Item onClick={sortOwnerList} title="Owner Name">
                 Owner
            </Dropdown.Item>
            <Dropdown.Item onClick={sortOwnerList} title="notes">
               Notes
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Stack>
  );
};

export default Search;
