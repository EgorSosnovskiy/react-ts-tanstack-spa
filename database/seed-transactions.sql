-- ============================================================
-- Seed: Transactions
-- ------------------------------------------------------------
-- Generates realistic transaction history for dashboard demo.
--
-- Features:
-- - Clears existing transactions
-- - Uses existing accounts
-- - Realistic monthly distribution
-- - Realistic transaction types
-- - Realistic fraud scores
-- - Random timestamps
-- ============================================================

BEGIN;

---------------------------------------------------------------
-- Remove existing transactions
---------------------------------------------------------------

DELETE FROM public.transactions;

---------------------------------------------------------------
-- Monthly transaction plan
--
-- Total: 720 transactions
---------------------------------------------------------------

CREATE TEMP TABLE tmp_month_distribution (
    month_number integer,
    transaction_count integer
);

INSERT INTO tmp_month_distribution
VALUES
    (1, 42),
    (2, 48),
    (3, 55),
    (4, 58),
    (5, 67),
    (6, 71),
    (7, 76),
    (8, 73),
    (9, 65),
    (10, 62),
    (11, 55),
    (12, 48);

---------------------------------------------------------------
-- Existing accounts
---------------------------------------------------------------

CREATE TEMP TABLE tmp_accounts AS
SELECT id
FROM public.accounts;

---------------------------------------------------------------
-- Safety check
---------------------------------------------------------------

DO
$$
BEGIN
    IF (SELECT COUNT(*) FROM tmp_accounts) = 0 THEN
        RAISE EXCEPTION 'No accounts found. Seed accounts first.';
    END IF;
END;
$$;

---------------------------------------------------------------
-- Temporary transactions
---------------------------------------------------------------

CREATE TEMP TABLE tmp_transactions (
    account_id uuid,
    transaction_type text,
    transaction_status text,
    amount numeric(12,2),
    fraud_score integer,
    atm_address text,
    created_at timestamptz
);

---------------------------------------------------------------
-- Generate transaction skeleton
---------------------------------------------------------------

INSERT INTO tmp_transactions (
    account_id,
    transaction_type,
    transaction_status,
    amount,
    fraud_score,
    atm_address,
    created_at
)
SELECT
    (
        SELECT id
        FROM tmp_accounts
        ORDER BY random()
        LIMIT 1
    )                                               AS account_id,

    NULL::text                                      AS transaction_type,

    NULL::text                                      AS transaction_status,

    NULL::numeric                                   AS amount,

    NULL::integer                                   AS fraud_score,

    NULL::text                                      AS atm_address,

    (
        make_date(2025, md.month_number, 1)
        +
        ((random() * 27)::int * interval '1 day')
        +
        ((random() * 23)::int * interval '1 hour')
        +
        ((random() * 59)::int * interval '1 minute')
        +
        ((random() * 59)::int * interval '1 second')
    )                                               AS created_at

FROM tmp_month_distribution md

CROSS JOIN generate_series(1, md.transaction_count);

---------------------------------------------------------------
-- Transaction type distribution
---------------------------------------------------------------

UPDATE tmp_transactions
SET transaction_type =
CASE
    WHEN rnd < 0.72 THEN 'DEPOSIT'
    WHEN rnd < 0.92 THEN 'LOAN'
    ELSE 'WITHDRAW'
END
FROM (
    SELECT
        ctid,
        random() AS rnd
    FROM tmp_transactions
) t
WHERE tmp_transactions.ctid = t.ctid;

---------------------------------------------------------------
-- Transaction status distribution
---------------------------------------------------------------

UPDATE tmp_transactions
SET transaction_status =
CASE
    WHEN rnd < 0.82 THEN 'APPROVED'
    WHEN rnd < 0.92 THEN 'PENDING'
    WHEN rnd < 0.97 THEN 'REJECTED'
    ELSE 'POSTPONED'
END
FROM (
    SELECT
        ctid,
        random() AS rnd
    FROM tmp_transactions
) t
WHERE tmp_transactions.ctid = t.ctid;

---------------------------------------------------------------
-- Amount
---------------------------------------------------------------

UPDATE tmp_transactions
SET amount =
CASE transaction_type

    WHEN 'DEPOSIT' THEN
        ROUND((300 + random() * 4700)::numeric, 2)

    WHEN 'LOAN' THEN
        ROUND((5000 + random() * 45000)::numeric, 2)

    WHEN 'WITHDRAW' THEN
        ROUND((50 + random() * 1450)::numeric, 2)

END;

---------------------------------------------------------------
-- Fraud score
---------------------------------------------------------------

UPDATE tmp_transactions
SET fraud_score =
CASE transaction_status

    WHEN 'APPROVED'
        THEN floor(random() * 250)::int

    WHEN 'PENDING'
        THEN 250 + floor(random() * 250)::int

    WHEN 'REJECTED'
        THEN 500 + floor(random() * 300)::int

    WHEN 'POSTPONED'
        THEN 300 + floor(random() * 350)::int

END;

---------------------------------------------------------------
-- ATM addresses
---------------------------------------------------------------

UPDATE tmp_transactions
SET atm_address =
(
ARRAY[
'Main Street ATM',
'Central Plaza ATM',
'Downtown Branch',
'Airport ATM',
'Shopping Mall ATM',
'North Bank Office',
'South Branch',
'East Side ATM',
'West Center ATM',
'University ATM',
'City Hall ATM',
'Business Center ATM'
])[1 + floor(random() * 12)::int];

---------------------------------------------------------------
-- Insert generated transactions
---------------------------------------------------------------

INSERT INTO transactions (
    account_id,
    type,
    status,
    amount,
    fraud_score,
    atm_address,
    created_at
)
SELECT
    account_id,
    transaction_type::transaction_type,
    transaction_status::transaction_status,
    amount,
    fraud_score,
    atm_address,
    created_at
FROM tmp_transactions;

---------------------------------------------------------------
-- Cleanup
---------------------------------------------------------------

DROP TABLE IF EXISTS tmp_transactions;
DROP TABLE IF EXISTS tmp_accounts;
DROP TABLE IF EXISTS tmp_month_distribution;

COMMIT;