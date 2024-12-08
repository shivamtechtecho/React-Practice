import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/actions";
import { Link } from "react-router-dom";
import { Center, Heading,Highlight } from "@chakra-ui/react";
import { BsDisplay } from "react-icons/bs";

export const HomePage = () => {
  // let
  let dispatch = useDispatch();
  let { users, loading, error } = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <h1 style={{fontSize:"50px",fontWeight:"bolder"}}>HOME PAGE</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <Link to={`/Details/${user.id}`}>
              <Heading lineHeight="tall">
                <Highlight
                  query={user.name}
                  styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
                >
                  {user.name}
                </Highlight>
              </Heading>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
