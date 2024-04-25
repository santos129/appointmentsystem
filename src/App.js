import React, { useEffect, useReducer, useState } from "react";
import { Button } from "react-bootstrap";
import FormData from "./Components/FormData";
import Lists from "./Components/lists";
import Search from "./Components/search";
import { formReducer, INITIAL_STATE } from "./reducerHook/formReducer";
import { clientSchema } from "./Validation/formValidation";
import { FaRegCalendarAlt } from 'react-icons/fa';
import EventNoteIcon from '@mui/icons-material/EventNote';



const App = () => {
  const getLocalStorageItems = () => {
    let list = localStorage.getItem("lists");
    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  };

  const [lists, setLists] = useState(getLocalStorageItems);
  const [query, setQuery] = useState("");
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);

  const handleChange = (e) => {
   
    dispatch({
      type: "CHANGE_INPUTS",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleSubmit = async () => {
    const newInput = {
      ...state,
      id: new Date().getTime().toString(),
    };

    const isValid = await clientSchema.isValid(newInput);
    if (isValid) {
      setLists([...lists, newInput]);

      setTimeout(() => {
        dispatch({ type: "TOGGLE" });
      }, 1000);

      //   setInputs({ owner: "", pet: "", date: "", time: "", notes: "" });
    } else {
      alert("Fill all the required fields marked(*)");
    }
  };

  // store to localStorage
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  // delete list

  const deleteList = (id) => {
    setLists(lists.filter((list) => list.id !== id));
  };

  //   search items
  const search = () => {
    return lists.filter((item) =>
      item.owner.toLowerCase().includes(query)
    );
  };


  //   sorting items
  const ascendingList = () => {
    let allData = [...lists];
    if (allData.length > 0) {
      let result = allData.sort((a, b) => a.owner.localeCompare(b.owner));
      setLists(result);
    }
  };

  const descendingList = () => {
    let allData = [...lists];
    if (allData.length > 0) {
      let result = allData.sort((a, b) => b.owner.localeCompare(a.owner));
      setLists(result);
    }
  };

  const sortOwnerList = () => {
    let allData = [...lists];
    if (allData.length > 0) {
      let result = allData.sort((a, b) => a.owner.localeCompare(b.owner));
      setLists(result);
    }
  };
  const sortPetList = () => {
    let allData = [...lists];
    if (allData.length > 0) {
      let result = allData.sort((a, b) => a.pet.localeCompare(b.pet));
      setLists(result);
    }
  };

  const formProps = {
    state,
    handleChange,
    handleSubmit,
  };

  const searchProps = {
    setQuery,
    search,
    ascendingList,
    descendingList,
    sortOwnerList,
    sortPetList,
  };

  return (
    <>
      <h2 className="h1">
      <FaRegCalendarAlt style={{ marginRight: '0.5rem' ,color: 'red',marginLeft: '30px'}}  />
        Appointment System
      </h2>

      <div className="toggle-button">
        <div className="">
            <Button
             className="w-100"
              variant="success"
              size="sm"
              onClick={() => dispatch({ type: "TOGGLE" })}
              style={{
                backgroundColor: 'blue',
                color: 'white',
                marginLeft: '30px',
                marginRight: '30px',
                display: 'flex',
                height: '40px',
              
              }}
            >
               <EventNoteIcon style={{ marginRight: '0.5rem' }} />
              Add Appointment
            </Button>
        </div>
        {/* form component */}
        <FormData {...formProps} />

        {/* Search component */}
        <Search {...searchProps} />

        {/* lists component*/}
        {lists && lists.length > 0 && lists != undefined ? (
          lists
            .filter((list) => {
              if (query == "") {
                return list;
              } else if (
                list.owner.toLowerCase().includes(query.toLowerCase())
              ) {
                return list;
              }
              // ///////
            })
            .map((list) => (
              <Lists
                id={list.id}
                ownerName={list.owner}
                petName={list.pet}
                date={list.date}
                time={list.time}
                notes={list.notes}
                deleteList={deleteList}
              />
            ))
        ) : (
          <p className="text-danger text-center py-4"></p>
        )}
      </div>
    </>
  );
};

export default App;
