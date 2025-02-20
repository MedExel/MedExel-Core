CREATE TABLE Users (
    user_id NUMBER PRIMARY KEY,
    username VARCHAR2(50) NOT NULL UNIQUE,
    password VARCHAR2(128) NOT NULL,
    email VARCHAR2(100) NOT NULL UNIQUE,
    full_name VARCHAR2(100),
    date_of_birth DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE Doctors (
    doctor_id NUMBER PRIMARY KEY,
    user_id NUMBER,
    specialization VARCHAR2(100),
    experience_years NUMBER,
    contact_info VARCHAR2(150),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);


CREATE TABLE Appointments (
    appointment_id NUMBER PRIMARY KEY,
    user_id NUMBER,
    doctor_id NUMBER,
    appointment_date TIMESTAMP,
    status VARCHAR2(50),
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (doctor_id) REFERENCES Doctors(doctor_id)
);

-- Creating History table
CREATE TABLE History (
    history_id NUMBER PRIMARY KEY,
    user_id NUMBER,
    doctor_id NUMBER,
    visit_date TIMESTAMP,
    notes CLOB,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (doctor_id) REFERENCES Doctors(doctor_id)
);

-- Creating Medicines table
CREATE TABLE Medicines (
    medicine_id NUMBER PRIMARY KEY,
    name VARCHAR2(100),
    description VARCHAR2(500),
    price NUMBER
);

-- Creating Pharmacies table
CREATE TABLE Pharmacies (
    pharmacy_id NUMBER PRIMARY KEY,
    name VARCHAR2(100),
    address VARCHAR2(200),
    contact_info VARCHAR2(150)
);

-- Creating Services table
CREATE TABLE Services (
    service_id NUMBER PRIMARY KEY,
    name VARCHAR2(100),
    description VARCHAR2(500),
    price NUMBER
);

-- Creating Pricing table
CREATE TABLE Pricing (
    pricing_id NUMBER PRIMARY KEY,
    service_id NUMBER,
    doctor_id NUMBER,
    price NUMBER,
    FOREIGN KEY (service_id) REFERENCES Services(service_id),
    FOREIGN KEY (doctor_id) REFERENCES Doctors(doctor_id)
);

-- Creating Prescriptions table
CREATE TABLE Prescriptions (
    prescription_id NUMBER PRIMARY KEY,
    user_id NUMBER,
    doctor_id NUMBER,
    medicine_id NUMBER,
    dosage VARCHAR2(100),
    issue_date TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (doctor_id) REFERENCES Doctors(doctor_id),
    FOREIGN KEY (medicine_id) REFERENCES Medicines(medicine_id)
);

-- Creating Reviews table
CREATE TABLE Reviews (
    review_id NUMBER PRIMARY KEY,
    user_id NUMBER,
    doctor_id NUMBER,
    rating NUMBER CHECK (rating BETWEEN 1 AND 5),
    comments CLOB,
    review_date TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (doctor_id) REFERENCES Doctors(doctor_id)
);

-- Creating Chats table
CREATE TABLE Chats (
    chat_id NUMBER PRIMARY KEY,
    user_id NUMBER,
    doctor_id NUMBER,
    message CLOB,
    timestamp TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (doctor_id) REFERENCES Doctors(doctor_id)
);

-- Creating Payments table
CREATE TABLE Payments (
    payment_id NUMBER PRIMARY KEY,
    user_id NUMBER,
    amount NUMBER,
    payment_date TIMESTAMP,
    status VARCHAR2(50),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

-- Sequences for unique IDs
CREATE SEQUENCE user_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE doctor_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE appointment_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE history_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE medicine_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE pharmacy_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE service_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE pricing_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE prescription_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE review_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE chat_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE payment_seq START WITH 1 INCREMENT BY 1;