# Next.js 15 Environment Variable Access Issue

This repository demonstrates a common error encountered when working with environment variables in Next.js 15.  Accessing environment variables directly within page components can lead to runtime errors because these variables aren't available during client-side rendering.

## Problem

The `pages/about.js` file attempts to access the environment variable `process.env.MY_VARIABLE` directly. This results in a runtime error on the client-side because the environment variable is only defined on the server-side during build time. 

## Solution

The solution involves using the `getServerSideProps` or `getStaticProps` functions to fetch and pass the environment variable to the component as props. This ensures the variable is available both on the server and client side.