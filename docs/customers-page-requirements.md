# Customers Page Requirements

## User Story

As a fraud management operator,

I want to browse customers, search for a specific customer, filter customer records, and navigate through pages of customer data.

---

## API Calls

### Get Customers

GET `/customers`

Returns:

- customers list;
- account balance for each customer;
- account status;
- total number of customers;
- pagination information.

Supports:

- server-side pagination;
- server-side search by customer name or customer ID;
- server-side filtering by account ID;
- server-side filtering by account balance.

API provider:

- Supabase

---

## User Interface

Reference:

![Customers Page UI](../public/images/customers-page.png)

---

## Acceptance Criteria

### AC-1

Customers page is available at:

```text
/customers
```

The home route:

```text
/
```

redirects to:

```text
/customers
```

---

### AC-2

User can browse customers.

#### AC-2.1

Customers are displayed in a table.

#### AC-2.2

Each table row displays:

- Customer ID;
- Full Name;
- City;
- State;
- Address;
- Phone Number;
- Account Balance.

#### AC-2.3

Customer data is loaded from Supabase.

---

### AC-3

User can search and filter customers.

#### AC-3.1

Search input is displayed above the table.

#### AC-3.2

Search and filtering are performed on the server.

#### AC-3.3

Search input is debounced.

#### AC-3.4

Customers can be searched by customer name or customer ID.

#### AC-3.5

Customers can be filtered by account ID.

#### AC-3.6

Customers can be filtered by account balance.

#### AC-3.7

Account balance filtering uses a ±5% tolerance.

#### AC-3.8

If no customers match the search criteria, an empty state is displayed.

---

### AC-4

User can navigate through customer pages.

#### AC-4.1

Pagination controls are displayed below the table.

#### AC-4.2

User can change the current page.

#### AC-4.3

User can select the number of displayed rows.

#### AC-4.4

Pagination is performed on the server.

#### AC-4.5

Changing the page or page size scrolls the page to the top.

---

### AC-5

Loading, empty, and error states provide user feedback during data loading and filtering.

#### AC-5.1

Loading state is displayed while customers are being fetched.

#### AC-5.2

API errors are displayed to the user.

#### AC-5.3

An empty state is displayed when no customers match the current search criteria.

#### AC-5.4

User receives success or error notifications after creating or editing customer data.

#### AC-5.5

Customer forms validate required fields before submission.

---

### AC-6

Customers page layout matches the provided design.

#### AC-6.1

The page contains:

- top navigation;
- customer profile section;
- customers toolbar;
- customers table;
- pagination.

#### AC-6.2

Application header and sidebar remain visible while using the page.
