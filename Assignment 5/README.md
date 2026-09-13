# 🧱 Dev Stack Builder

Dev Stack Builder is a React learning project where visitors can explore development technologies and put together a stack for their next project. The catalog includes 12 technologies with descriptions, categories, difficulty levels, and sample ratings.

**Live site:** [Dev Stack Builder](https://dev-stack-builder-three.vercel.app/)

## ✨ Main features

1. **Technology catalog:** Loads technology data from a local JSON file and displays responsive cards, with loading and error messages.
2. **Build your stack:** Add technologies, remove individual items, or clear the stack. Selected cards have a highlighted border and a disabled button, and duplicate additions are blocked.
3. **Responsive interface and notifications:** Includes a mobile navigation menu, a shared gradient theme, and toast notifications for stack actions.

## 🛠️ Technologies used

- React.js and React DOM
- JavaScript (ES6+) and JSX
- Tailwind CSS and DaisyUI
- Custom CSS
- React-Toastify
- JSON
- Vite

## 🚀 Run locally

Install Node.js and npm before starting. This project was built using Node.js 24.

From the repository root, enter the application folder:

```bash
cd "Assignment 5"
```

Install the dependencies and start the development server:

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal. The app needs the Vite server during development; opening `index.html` directly will not run it.

To build and preview the production version:

```bash
npm run build
npm run preview
```

The production files are generated in `dist`.

## 📁 Project structure

```text
Assignment 5/
├── public/
│   └── technologies.json
├── src/
│   ├── assets/
│   │   └── banner-stack.png
│   ├── App.jsx
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Technologies.jsx
│   ├── TechnologyCard.jsx
│   ├── YourStack.jsx
│   ├── Footer.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 📝 Current behavior

- Stack selections are stored in React state and reset when the page refreshes.
- Technology icons load from external image URLs. Ratings are sample catalog data.
- Sign In and Sign Up are visual buttons; account registration and login are not implemented.
- Projects, Careers, Privacy, and Terms links do not have destination content yet. Social links open the platforms' homepages.

## 💡 React questions and answers

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like markup inside JavaScript. It helps us describe what a component should display and include JavaScript values, like a technology's name, in that markup.

### 2. What is the difference between props and state?

Props are values a parent component passes to a child. State is data a component remembers and can update. In this project, `App` owns the stack state and passes it to other components through props.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` gives a component a value to remember and a function to update it. Updating that value tells React to render again. I used it for the selected stack, mobile menu, active navigation link, technology data, loading status, and error message.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after React renders, such as fetching data or listening for browser events. In `Technologies`, I used it with an empty dependency array to fetch the JSON when the component mounts, instead of fetching during every render. Its cleanup cancels the request when the component unmounts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A key helps React identify which list item is which when items change, appear, or disappear. I used each technology's unique `id` for the cards and selected stack items instead of their array positions.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different content depending on a condition. In `YourStack`, I show the empty message when there are no selected technologies. The card button also changes its text based on whether the technology is added:

```jsx
{isAdded ? '✓ Added to Stack' : 'Add to Stack'}
```

### 7. How do you pass data from a parent to a child, and how does a child send something back?

A parent passes data through props. To let a child request an update, the parent also passes a function as a prop. Here, `App` passes `onAddToStack` through `Technologies` to `TechnologyCard`. When the button is clicked, the card calls that function with its technology, and `App` updates the stack.
