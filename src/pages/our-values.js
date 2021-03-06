import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const StartupPage = () => (
  <Layout>
    <SEO title="Our Values" />
    <h1>Our Values</h1>
    <br />
    <p>
      We value processes that lead sustainable, rapid development of working
      software.
    </p>
    <p>
      Engineers from Evaluates2 will not only lead by example by following these
      principles, but they are trained to be good pair programming partners and
      to be evangalists of good practices which has lasting benefits on all
      members of your team.
    </p>
    <h1>Continuous Integration & Multiple Environments</h1>

    <p>
    Every time our engineers make a substantive change, they will commit this change to GitHub (or other hosting service of your choice). Evaluates2 employs an automated continuous delivery process whereby any changes in GitHub are detected. Once a change is detected, all unit tests are run. If they fail, all developers are notified immediately so that a fix can be made. If all tests pass, the continuous delivery system will deploy these new changes directly to the staging environment.

Evaluates2 maintains two environments when building applications: a staging and a production environment. Production is what you might expect: it’s the live site, the public-facing application that everyone uses on a daily basis. The staging environment is not open to the public. Our customer and Evaluates2 engineers are the only ones who can see the staging environment. With a staging environment, stakeholders can see our progress, evaluate features, and experiment without worrying about impacting real users. We also benefit from seeing features run on an identical ecosystem as production. This increases the efficiency of delivering features and reduces the risk of introducing bugs into the production system.
    </p>
    <h1>Test Driven Development</h1>

    <p>
    At Evaluates2 we have several core values that we insist on when working with a client. Once of those core values is the use of test-driven development. Test Driven Development or TDD, for short, is a software development process that builds up a suite of automated tests alongside our software. These tests run continuously to ensure proper functionality and to reduce the presence of bugs. In our opinion, testing is paramount for the future success of your project. Since we partner with each of our clients, your future success is a main priority. See more on our philosophy on test-first in the article below.
    </p>
    <h1>Healthy Dependencies</h1>
  <p>
  In almost any software engineering project you will find the use of third-party libraries/dependencies. While the practice of using third-party libraries can help to speed up the velocity of development in the short term, it's important to be mindful of the code being added to your project so that it doesn't have adverse effects in the long-term. In this article, Principal Engineer Paul Ort explores the topic of code reuse in the delivery of value. To learn more about this topic or connect with Paul, please contact us via the form below.
  </p>
    <br />
    <br />
    <br />
    <p>
      And of course, as stated word-for-word in the Agile Menifesto, we value:
    </p>
    <ul>
      <li>Individuals and interactions over processes and tools</li>
      <li>Working software over comprehensive documentation</li>
      <li>Customer collaboration over contract negotiation</li>
      <li>Responding to change over following a plan</li>
    </ul>

    <br />
    <br />

  </Layout>
);

export default StartupPage;
