from pydantic import BaseModel
from datetime import date
from typing import Optional

class EmployeeResponse(BaseModel):
    id: int
    name: Optional[str] = None
    email: Optional[str] = None
    department: Optional[str] = None
    designation: Optional[str] = None
    date_of_joining: Optional[date] = None

    class Config:
        from_attributes = True
