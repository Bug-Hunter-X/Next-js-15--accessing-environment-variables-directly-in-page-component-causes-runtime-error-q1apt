```javascript
// pages/about.js
import {getServerSideProps} from 'next';

function About({envVariable}) {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <p>Environment Variable: {envVariable}</p>
    </div>
  );
}

export default About;

export async function getServerSideProps(context) {
  const envVariable = process.env.MY_VARIABLE; 
  return {
    props: {
      envVariable: envVariable,
    },
  };
}
```