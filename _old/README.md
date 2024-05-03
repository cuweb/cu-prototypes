# CU Prototypes

This project aims to provide a quick development environment for new components that can be easily migrated to the RDS component library. This project uses:

- Next.Js
- Typescript
- Raven Design System (RDS)
- Tailwind CSS

## Getting Setup

Getting setup with our prototypes can be done in a few easy steps. First, open a terminal window and navigate to where you'd like to store the code. From here, run the following commands:

```
git clone https://github.com/cuweb/cu-prototypes.git
cd cu-prototypes
npm run clean
npm run dev
```

**Note:** you must use `npm` on this project.

That's it. Now you're ready to start up the project and get to work! All that's left is to visit http://localhost:3000 in your favourite browser.

## How to Work with Prototypes

This section provides an overview of the best approach to building and testing a new component for potential inclusion into RDS. This process follows the approach that the RDS component is built in full during the prototyping phase and once approved it only needs to be ported to RDS and stories will be created.

The process is simple:

- In the `/components` folder you'll build the component, much like you would in RDS
- In the `pages` folder you will create a page that the component will be imported into and testing in all possible variations
- In the `/data` folder you will add file(s) for any data required to test the component

That's it. Well, 95% of it. In some cases you may be building page layouts for upcoming projects.

## Page Layouts

In some cases you will need to create groupings of components in column or other layouts. This is where we can leverage the blocks folder. If you need to group components together for layout purposes follow these steps:

- In the `/blocks` folder create a folder for your project
- In the `/projectName` folder add as many files as needed
- In the `/pages` folder import the blocks into your layout examples

**Note** — If building new components inside the blocks area the same rule for building a component apply and we use the `/components`, `/pages`, and `/data` folder for our component code.
