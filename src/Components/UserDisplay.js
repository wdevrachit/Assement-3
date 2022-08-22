import React from "react";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser,deleteUser,updateUsername } from "../Features/Users";
function UserDisplay(){
    const navigate=useNavigate()

    const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");
    return(
        <>
        
        <div className="addUser">
        
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
          
        />
        <input
          type="text"
          placeholder="Moviename..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        
        <button
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name,
                username,
              })
            );
          }}
        >
          {" "}
          Add Movie
        </button>
        <button onClick={()=> navigate('http://localhost:3006/Movie',{replace:true})}>CustomerView
            
          </button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return (
            <div>
              <h1> {user.name}</h1>
              <a href="http://localhost:3006/">Click to Watch Now!</a>
              <h1> {user.username}</h1>
              
              <input
                type="text"
                placeholder="New Username..."
                onChange={(event) => {
                  setNewUsername(event.target.value);
                }}
              />
              
              <button
                onClick={() => {
                  dispatch(
                    updateUsername({ id: user.id, username: newUsername })
                  );
                }}
              >
                {" "}
                Update Movie
              </button>
              <button
                onClick={() => {
                  dispatch(deleteUser({ id: user.id }));
                }}
              >
                Delete Movie
              </button>
             
            </div>
          );
        })}
      
      </div>
      </>
    )
}

export default UserDisplay