from sqlalchemy.orm import Session
from app.database.models import Employee
from sqlalchemy import or_

def get_all_employees(db: Session):
    return db.query(Employee).order_by(Employee.name).all()


def search_employees(db: Session, search: str):
    return db.query(Employee).filter(
        or_(
            Employee.name.ilike(f"%{search}%"),
            Employee.email.ilike(f"%{search}%"),
            Employee.department.ilike(f"%{search}%"),
            Employee.designation.ilike(f"%{search}%")
        )
    ).order_by(Employee.name).all()
