# React App Template (with styled-components and redux-toolkit)

> App based on typescript, react and redux-toolkit (https://redux-toolkit.js.org/tutorials/basic-tutorial)
> and styled-components (https://styled-components.com/docs/basics)

## INSTALLATION and START

    git clone https://github.com/DrBoria/cra-toolkit-styled.git
    cd ./cra-toolkit-styled
    yarn
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
       rootReducer.ts    store combiner
       store.ts          store of application
       routes.tsx        routes of application

## HOW TO WRITE CODE

Please use following style/princeples:

    1) Use only dumb components (without business logic) in components folder
    2) Components should know how do they look like, not sections that contains it
       It means - instead of redefining styles on every page - just make new type of button/input inside button/input component and just pass this type on your page
    3) Make sections and pages small and readable as it possible (no need to make more than 40 lines of jsx inside page)
    4) If you need to make query - add it in models folder based on domain

    ** styles **
    5) All app variables should be declared in /src/styles/baseTheme.ts
    6) Better use varables from baseTheme.ts through the projects
