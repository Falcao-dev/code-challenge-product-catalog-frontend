= React + Vite Product Catalog App

A simple React app powered by Vite that lets you log in and manage a product catalog via a REST API.

== Features

* Login with Basic Auth
* View all products
* Add new products
* Edit products
* Delete products
* Built with Vite + React (with HMR)

== Getting Started

=== Clone the Repository

[source, bash]
----
git clone https://github.com/your-username/product-catalog-app.git
cd product-catalog-app
----

=== Install Dependencies

[source, bash]
----
npm install
----

=== Start the App

[source, bash]
----
npm run dev
----

The app will run on: http://localhost:5173

== Backend API Requirements

This frontend expects a REST API running at:

`http://localhost:8080/api`

It should support:

* `GET /products` – List all products (requires Basic Auth)
* `POST /products` – Create a new product
* `PUT /products/{id}` – Update an existing product
* `DELETE /products/{id}` – Delete a product

NOTE: Basic Authentication is required. Ensure your API handles `username` and `password` headers.

== How to Use the App

. **Login**
.. Enter your API username and password to access the catalog.
. **View Products**
.. After login, the product list will display with names, prices, descriptions, and stock.
. **Add a New Product**
.. Click the *Add New Product* button.
.. Fill out the form:
+
--
* Product Name
* Price
* Description
* Stock
--
.. Click *Submit*.
. **Edit a Product**
.. Click *Edit* on any product.
.. Make changes and hit *Submit* to update it.
. **Delete a Product**
.. Click *Delete* to remove the product.

== Project Structure

[source, bash]
----
src/
├── api/
│   └── axios.js         # Axios instance with Basic Auth
├── components/
│   ├── Login.jsx        # Login form
│   ├── ProductList.jsx  # Main catalog view
│   └── ProductForm.jsx  # Form to add/edit products
├── App.jsx              # App wrapper
└── main.jsx             # Entry point
----
