-- Procedure to add a new user
CREATE OR REPLACE PROCEDURE add_user(
    p_username IN VARCHAR2,
    p_password IN VARCHAR2,
    p_email IN VARCHAR2,
    p_full_name IN VARCHAR2,
    p_date_of_birth IN DATE
) IS
BEGIN
    INSERT INTO Users (
        user_id,
        username,
        password,
        email,
        full_name,
        date_of_birth
    ) VALUES (
        user_seq.NEXTVAL,
        p_username,
        STANDARD_HASH(p_password, 'SHA512'),
        p_email,
        p_full_name,
        p_date_of_birth
    );
END;
/

-- Procedure to schedule an appointment
CREATE OR REPLACE PROCEDURE schedule_appointment(
    p_user_id IN NUMBER,
    p_doctor_id IN NUMBER,
    p_appointment_date IN TIMESTAMP,
    p_status IN VARCHAR2
) IS
BEGIN
    INSERT INTO Appointments (
        appointment_id,
        user_id,
        doctor_id,
        appointment_date,
        status
    ) VALUES (
        appointment_seq.NEXTVAL,
        p_user_id,
        p_doctor_id,
        p_appointment_date,
        p_status
    );
END;
/

-- Procedure to add a prescription
CREATE OR REPLACE PROCEDURE add_prescription(
    p_user_id IN NUMBER,
    p_doctor_id IN NUMBER,
    p_medicine_id IN NUMBER,
    p_dosage IN VARCHAR2
) IS
BEGIN
    INSERT INTO Prescriptions (
        prescription_id,
        user_id,
        doctor_id,
        medicine_id,
        dosage,
        issue_date
    ) VALUES (
        prescription_seq.NEXTVAL,
        p_user_id,
        p_doctor_id,
        p_medicine_id,
        p_dosage,
        CURRENT_TIMESTAMP
    );
END;
/

-- Procedure to add a review
CREATE OR REPLACE PROCEDURE add_review(
    p_user_id IN NUMBER,
    p_doctor_id IN NUMBER,
    p_rating IN NUMBER,
    p_comments IN CLOB
) IS
BEGIN
    INSERT INTO Reviews (
        review_id,
        user_id,
        doctor_id,
        rating,
        comments,
        review_date
    ) VALUES (
        review_seq.NEXTVAL,
        p_user_id,
        p_doctor_id,
        p_rating,
        p_comments,
        CURRENT_TIMESTAMP
    );
END;
/
