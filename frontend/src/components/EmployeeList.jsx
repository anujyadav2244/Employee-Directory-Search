import EmployeeCard from "./EmployeeCard";

function EmployeeList({ employees }) {
    if (!employees.length) {
        return <p>No employees found.</p>;
    }

    return (
        <div>
            {
                employees.map((emp) => (
                    <EmployeeCard
                        key={emp.id}
                        employee={emp}
                    />
                ))
            }
        </div>
    );
}

export default EmployeeList;
