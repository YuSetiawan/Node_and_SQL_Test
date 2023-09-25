-- Semua transaksi yang dibuat oleh John Michael diurutkan berdasarkan nomor rekening dan tanggal transaksi.

-- Answer below

SELECT ACCOUNT.acc_number, TRANSACTION.trs_date, CUSTOMER.cust_firstname, CUSTOMER.cust_lastname 
from TRANSACTION
    LEFT JOIN ACCOUNT on ACCOUNT.acc_number = TRANSACTION.trs_from_account
    LEFT JOIN CUSTOMER ON ACCOUNT.acc_owner = CUSTOMER.cust_id
WHERE CUSTOMER.cust_firstname = 'John' AND CUSTOMER.cust_lastname = 'Michael'
ORDER BY ACCOUNT.acc_number, TRANSACTION.trs_date;