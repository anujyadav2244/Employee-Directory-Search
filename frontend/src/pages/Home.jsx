import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import EmployeeList from "../components/EmployeeList";
import { getEmployees } from "../services/EmployeeService";

function Home() {
  const [search, setSearch] = useState("");
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let isCurrent = true;
    const query = search.trim();

    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getEmployees(query);

        if (isCurrent) {
          setEmployees(data);
        }
      } catch (err) {
        console.error(err);
        if (isCurrent) {
          setEmployees([]);
          setError("Failed to fetch employees");
        }
      } finally {
        if (isCurrent) {
          setLoading(false);
        }
      }
    }, query ? 500 : 0);

    return () => {
      isCurrent = false;
      clearTimeout(timer);
    };
  }, [search]);

  return (
    <div>
      <h1>Employee Directory</h1>

      <SearchBar value={search} onChange={setSearch} />

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      <EmployeeList employees={employees} />
    </div>
  );
}

export default Home;
