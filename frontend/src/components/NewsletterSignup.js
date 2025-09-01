// import { useEffect } from 'react';
// import classes from './NewsletterSignup.module.css';
// import { useFetcher } from 'react-router-dom';

// function NewsletterSignup() {
//   const fetcher = useFetcher()
  
//   const { data, state } = fetcher

//   useEffect(() => {
//     if (state === "idle" && data && data.message) {
//       window.alert(data.message)
//     }
//   }, [data, state]);


//   return (
//     <fetcher.Form method="post" action ="/newsletter" className={classes.newsletter}>
//       <input
//         type="email"
//         placeholder="Sign up for newsletter..."
//         aria-label="Sign up for newsletter"
//       />
//       <button>Sign up</button>
//     </fetcher.Form>
//   );
// }

// export default NewsletterSignup;

import { useEffect, useState } from "react";
import classes from "./NewsletterSignup.module.css";

function NewsletterSignup() {
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("Successful") 
    setLoading(false);
  }

  useEffect(() => {
    if (message) {
      window.alert(message);
    }
  }, [message, loading]);

  return (
    <form onSubmit={handleSubmit} className={classes.newsletter}>
      <input
        type="email"
        name="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
        required
      />
      <button disabled={loading}>{loading ? "Sending..." : "Sign up"}</button>
    </form>
  );
}

export default NewsletterSignup;
