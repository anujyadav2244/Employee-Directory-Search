from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import Optional

from app.database.connection import SessionLocal
from app.schemas.employee_schema import EmployeeResponse
from app.services.employee_service import get_employees

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/employees", response_model=list[EmployeeResponse])
def search_employee(search: Optional[str] = None, db: Session = Depends(get_db)):

    try:
        return get_employees(db, search)

    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

    except Exception:
        raise HTTPException(
            status_code=500,
            detail="Internal Server Error"
        )
