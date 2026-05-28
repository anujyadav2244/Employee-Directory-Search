from app.repository.employee_repository import get_all_employees, search_employees

def get_employees(db, search):

    if not search or not search.strip():
        return get_all_employees(db)

    return search_employees(db, search)
