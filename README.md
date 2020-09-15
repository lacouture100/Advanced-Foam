This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).



## Instructions 

### Creating the App

First, run the following command in your terminal:

```bash
npx create-next-app nameofapp
```

This is similar the the command used for creating a React app with `npm create-react-app`. However, we will be creating a  SSA ( Server-side application). After creating the folder, head into the directory. 

Delete the `/components` and `/pages`. Next, create the `src/pages` directory in the project root. Every file inside this directory will be a route. This is a file system based route, contrary to react-router.

---

### Static Routing

Create `index.js` inside the pages directory. Type in the following and save:

```
export default function Index(){
    return <div> Hello </div>
}
```

Next, create `details.js` inside the pages directory. Type in the following and save::

```
export default function Details(){
    return <h2> Details <h2>
}
```

Now, in the command line head to the root directory and run `npm run dev`. Open your browser, and in the address bar introduce `localhost:3000`. You should see a "Hello" in the page. Now add a `/details/` to the end of the address. You should see "Details" in the page.

---

### Dynamic Routing

Create and `/[objects]/[user]` file inside the pages directory. the `[]` is a way of telling Nextjs we are using dynamic routing. 



### Component Level CC