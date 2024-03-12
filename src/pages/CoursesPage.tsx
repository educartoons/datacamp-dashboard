import { ChangeEvent, useState, useCallback } from "react";
import { CoursesGrid } from "../components/CoursesGrid/CoursesGrid";

function CoursesPage() {
  const [searchText, setSearchText] = useState("");
  const [user, setUser] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleChangeUser = useCallback(() => {
    console.log("cambiando nombre de usuario");
    setUser("Eduar");
  }, []);

  return (
    <>
      <h1>Courses Page</h1>
      <input type="text" onChange={handleChange} value={searchText} />
      <CoursesGrid user={user} handleChangeUser={handleChangeUser} />
    </>
  );
}

export { CoursesPage };
