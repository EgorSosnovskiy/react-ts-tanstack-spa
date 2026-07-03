-- Enable UUID generation
create extension if not exists pgcrypto;

-- Enums
create type account_status as enum (
  'ACTIVE',
  'BLOCKED'
);

create type transaction_status as enum (
  'APPROVED',
  'PENDING',
  'REJECTED'
);

create type transaction_type as enum (
  'DEPOSIT',
  'WITHDRAW',
  'LOAN'
);

-- Customers
create table customers (
  id uuid primary key default gen_random_uuid(),

  customer_number text unique not null,

  full_name text not null,

  city text not null,

  state text not null,

  address text not null,

  phone text not null,

  created_at timestamptz not null default now()
);

-- Accounts
create table accounts (
  id uuid primary key default gen_random_uuid(),

  customer_id uuid not null references customers(id),

  account_number text unique not null,

  balance numeric(12,2) not null check (balance >= 0),

  status account_status not null default 'ACTIVE',

  created_at timestamptz not null default now()
);

-- Transactions
create table transactions (
  id uuid primary key default gen_random_uuid(),

  account_id uuid not null references accounts(id),

  type transaction_type not null,

  status transaction_status not null,

  amount numeric(12,2) not null,

  fraud_score integer not null check (fraud_score between 0 and 1000),

  atm_address text not null,

  created_at timestamptz not null default now()
);

-- Indexes
create index idx_customers_number
on customers(customer_number);

create index idx_accounts_number
on accounts(account_number);

create index idx_transactions_created_at
on transactions(created_at);

-- Enable Row Level Security
alter table customers enable row level security;
alter table accounts enable row level security;
alter table transactions enable row level security;

-- Public read policies
create policy "Public read customers"
on customers
for select
to anon
using (true);

create policy "Public read accounts"
on accounts
for select
to anon
using (true);

create policy "Public read transactions"
on transactions
for select
to anon
using (true);