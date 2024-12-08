# ReactJS Web Application with Laravel Backend for WiFi Data Management

This repository demonstrates a basic **CRUD** web application built with **ReactJS** for the frontend and **Laravel** for the backend REST API. The application includes data visualizations and editing capabilities for managing WiFi data. The project progresses through multiple phases, demonstrating increasing complexity from JSON-based models to SQL-based models.


---
## Demo Video 

https://github.com/user-attachments/assets/87bc01dc-874f-4ec2-9a18-39a088df015e





---

## Features
1. **Frontend (ReactJS)**:
   - Table visualization with editable rows for CRUD operations.
   - Dynamic charts (line, bar, multi-axis) using `Goolge-chart`.
   - Drop-down filters to customize chart data.
   - Progressive enhancement for JSON and SQL data models.

2. **Backend (Laravel)**:
   - REST API endpoints for managing WiFi data.
   - SQL database integration for CRUD operations.
   - CSV data ingestion and processing.

3. **Data Models**:
   - JSON model for initial data handling.
   - SQL model for scalable and persistent data storage.

---

## Setup Instructions

### 1. **Backend (Laravel)**

#### Prerequisites
- PHP >= 8.0
- Composer
- MySQL or any supported SQL database

#### Steps
1. Clone the Laravel repository for BackEnd:
   ```bash
   git clone https://github.com/shohanislamjoy/laravel_table_view_api.git
   
2. Install dependencies:
   ```bash
   composer install
   ```
3. Configure `.env`:
   ```plaintext
   start Xampp and give a name to the database in .env
4. Run migrations and seeders:
   ```bash
   php artisan migrate 
   ```
   ```plaintext
   import the csv file to wifi_datas table
   
5. Start the Laravel server:
   ```bash
   php artisan serve
   ```

---

### 2. **Frontend (ReactJS)**

#### Prerequisites
- Node.js >= 14.x
- npm or yarn

#### Steps
1. Clone this Repository:
   ```bash
   git clone https://github.com/shohanislamjoy/reactJs_crud_system_with_table_chart_view.git
   ```
2. Install dependencies:
   ```bash
   npm install 
   ```
3. Start the React development server:
   ```bash
   npm run dev
   ```
   



---

## Visualization Features

### Table
- Displays WiFi data with editable rows.
- Supports adding, editing, and deleting data.

### Line & Bar Chart
- **Line Chart**: Displays the `close` column on the y-axis, sorted by `date`.
- **Bar Chart**: Displays the `volume` column on the y-axis.
- **Multi-Axis Chart**: Combines the line and bar chart.
- Dropdown to filter charts by `trade_code`.

### Additional Visualizations
- Creative charts showcasing trends or correlations in data.

---

## APIs (Laravel)

### Endpoints
| Method | Endpoint               | Description              |
|--------|-------------------------|--------------------------|
| `GET`  | `/api/wifi_data`       | Fetch all WiFi data.     |
| `POST` | `/api/wifi_data`       | Add new WiFi data.       |
| `GET`  | `/api/wifi_data/{id}`  | Fetch specific WiFi data.|
| `PUT`  | `/api/wifi_data/{id}`  | Update WiFi data.        |
| `DELETE` | `/api/wifi_data/{id}`| Delete WiFi data.        |

---

## Data Ingestion
- Load CSV data into the SQL database using Laravel artisan commands or a web interface.

---

## Technologies Used

### Frontend
- **ReactJS**
- **React Router**
- **Chart.js** (via `react-chartjs-2`)

### Backend
- **Laravel** (PHP framework)
- **MySQL** for data storage

---

## Usage

1. Start the backend server with Laravel:
   ```bash
   php artisan serve
   ```
2. Start the frontend React server:
   ```bash
   npm run dev
   ```
3. Access the app at [http://localhost:3000](http://localhost:3000).

---

### Happy coding! 🎉
