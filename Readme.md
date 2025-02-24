
## Project Name: Schedule EMI Calculator

### Description  
This project calculates EMIs and displays the amortization schedule, including installments, principal, interest, and remaining balance. It supports different payment frequencies (Monthly, Quarterly, Yearly).

---

### Features  
- Calculate EMIs using the reducing balance method  
- Display amortization schedule with:
  - Installment number
  - Date of payment
  - Principal component
  - Interest component
  - Remaining balance  
- Support for multiple frequencies (Monthly, Quarterly, Yearly)  

---

### Tech Stack  
- **Frontend:** React, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Others:** Axios for API requests  

---

### Installation

1. **Clone the repository:**  
```sh
git clone https://github.com/your-username/schedule-emi-calculator.git
cd schedule-emi-calculator
```

2. **Install dependencies for frontend and backend:**  
```sh
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

3. **Environment Variables:**  
Create a `.env` file in the server directory and add the following:  
```
PORT=5000
```

---

### Usage

1. **Start the Backend Server:**  
```sh
cd server
npm start
```

2. **Start the Frontend Development Server:**  
```sh
cd ../client
npm start
```

3. **Open in Browser:**  
```
http://localhost:3000
```

---

### API Endpoints

- **POST** `/calculate`  
  Calculates EMI and returns the schedule.  
  - **Request Body:**
    ```json
    {
      "principal": 500000,
      "tenure": 12,
      "rate": 10,
      "frequency": "Monthly",
      "date": "2024-01-01"
    }
    ```
  - **Response:**
    ```json
    {
      "schedule": [
        {
          "installment": 1,
          "date": "2024-02-01",
          "principal": "1234.56",
          "interest": "567.89",
          "balance": "498765.44"
        }
      ]
    }
    ```

---

### Screenshots  
![EMI Calculator](link-to-screenshot.png)  

---

### License  
This project is licensed under the MIT License.

---

### Contact  
- **Author:** Chandan  
- **Email:** chandannekya@gmaul.com 
- **GitHub:** [chandannekya](https://github.com/chandannekya)  

---

You can add more sections like **Contributing**, **Deployment**, or **Troubleshooting** if needed. Let me know if you want any modifications! 🚀