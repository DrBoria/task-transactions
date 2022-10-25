## Introduction

Application should contain list of bank transactions, based on design structure from _design.png_ file and contain following functionalities:

1.  Transactions fetched from API, displayed in table or list.
2.  Pagination (infinite-scroll or traditional, 20 items per page)
3.  Filtering by `beneficiary` field
4.  Form for adding new transaction to the list with basic non-empty fields validation. Add input fields for:
    -   amount (must be positive)
    -   account number (not empty, numbers)
    -   address
    -   description
    -   date and id should be generated when submiting form
5.  Simple communicate when success/error after form submission.
6.  Removing transaction from the list (please add animation for that)

NOTE: Points 2-5 should be done on front-end side.

## INSTALLATION and START

    cd ./task
    yarn
    yarn server
    yarn start

## FOLDERS DESCRIPTION

    public/              public files for build
    src/                 code of all application
       /api              predefined list of queries to BE
       /models           business logic of application (like get available courses, update course etc.)
       /components       moleculas in atomic design. Reusable components (like buttons, inputs etc.). Should have only ui logic, not business logic (dumb components).
       /sections         organisms in atomic design. Could contain business logic, but main purpose is combining components
       /pages            pages of application
       /styles           styles, themes, theme providers and so on
       /utils            functions helpers (fetch, get headers and so on)
       index.tsx         app entry point
       index.css         basic styles of application (html, body)
       RootReducer.ts    store combiner
       store.ts          store of application
       routes.tsx        routes of application

## API description

To run API, run following commands in task directory:

    npm install
    npm run server

Server will be available on http://localhost:3000.

Available endpoints:

> GET /transactions

## Technologies

Required technologies for development are _React_ and _Typescript_.

## Summary

Send us back your app with instruction how to run app and tests. Preferred way is to get URL to codesandbox or your public repository with project. In case of problems/questions feel free to ask.

**Good luck!**
