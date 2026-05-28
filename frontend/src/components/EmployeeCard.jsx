function EmployeeCard({ employee }) {

    return (
        <div className="card">
            <h3>{employee.name}</h3>
            <p>{employee.email}</p>
            <p>{employee.department}</p>
            <p>{employee.designation}</p>
            <p>{employee.date_of_joining}</p>
        </div>
    );
}

export default EmployeeCard;
