-- ===========================
-- Customers
-- ===========================

insert into customers (
    customer_number,
    full_name,
    city,
    state,
    address,
    phone
)
select
    'CID' || lpad(gs::text, 3, '0'),

    (array[
        'John Smith','Emily Johnson','Michael Brown','Sarah Davis','David Wilson',
        'Olivia Miller','James Taylor','Sophia Anderson','Daniel Thomas','Emma Jackson',
        'Matthew White','Isabella Harris','Andrew Martin','Mia Thompson','Joshua Garcia',
        'Charlotte Martinez','Christopher Robinson','Amelia Clark','Joseph Lewis','Harper Walker',
        'Benjamin Hall','Evelyn Allen','Lucas Young','Abigail King','Henry Wright'
    ])[gs],

    (array[
        'New York','Chicago','Los Angeles','Houston','Phoenix',
        'Boston','Seattle','Denver','Miami','Dallas',
        'San Diego','Austin','Atlanta','Detroit','Portland',
        'Philadelphia','Las Vegas','Charlotte','Nashville','San Jose',
        'Orlando','San Francisco','Columbus','Indianapolis','Baltimore'
    ])[gs],

    (array[
        'NY','IL','CA','TX','AZ',
        'MA','WA','CO','FL','TX',
        'CA','TX','GA','MI','OR',
        'PA','NV','NC','TN','CA',
        'FL','CA','OH','IN','MD'
    ])[gs],

    gs || ' Main Street',

    '+1-202-555-' || lpad((1000 + gs)::text,4,'0')

from generate_series(1,25) gs;


-- ===========================
-- Accounts
-- ===========================

insert into accounts (
    customer_id,
    account_number,
    balance,
    status
)
select
    id,

    'ACC' || lpad(row_number() over()::text,6,'0'),

    round((random()*90000+1000)::numeric,2),

    (array[
        'ACTIVE',
        'ACTIVE',
        'ACTIVE',
        'ACTIVE',
        'BLOCKED'
    ])[floor(random()*5+1)]::account_status

from customers;


-- ===========================
-- Transactions
-- ===========================

insert into transactions (
    account_id,
    type,
    status,
    amount,
    fraud_score,
    atm_address,
    created_at
)
select
    a.id,

    (array[
        'DEPOSIT',
        'WITHDRAW',
        'LOAN'
    ])[floor(random()*3+1)]::transaction_type,

    (array[
        'APPROVED',
        'APPROVED',
        'APPROVED',
        'PENDING',
        'REJECTED'
    ])[floor(random()*5+1)]::transaction_status,

    round((random()*5000+50)::numeric,2),

    floor(random()*1000)::int,

    (array[
        'New York ATM',
        'Chicago ATM',
        'Boston ATM',
        'Seattle ATM',
        'Dallas ATM',
        'Miami ATM'
    ])[floor(random()*6+1)],

    now() - (random()*90 || ' days')::interval

from accounts a
cross join generate_series(1,6);