import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
import dollyBox from "../assets/dollyBox.png";
import homeMoving from "../assets/homeMoving.png";
import officeMoving from "../assets/officeMoving.png";
import OneItem from "../assets/OneItem.png";
import lorry from "../assets/lorryals.png";
import { motion } from "framer-motion";


const Home = (index) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <motion.img
          animate={{
            x: 5,
            y: 50,
            scale: 1,
            rotate: 0,
          }}
          className="img"
          src={dollyBox} />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          className="buttons-main">
          <table
            className="table-card"
            onClick={() => {
              navigate("/homemove");
            }}
          >
            <tr>
              <td>
                <img className="card-img" src={homeMoving} />
              </td>
            </tr>
            <tr>
              <td className="td">Home Move</td>
            </tr>
            <tr>
              <td>
                <button className="hero-button">Get Quote</button>
              </td>
            </tr>
          </table>

          <table
            className="table-card"
            onClick={() => {
              navigate("/officemove");
            }}
          >
            <tr>
              <td>
                <img className="card-img" src={officeMoving} />
              </td>
            </tr>
            <tr>
              <td className="td">Office Move</td>
            </tr>
            <tr>
              <td>
                <button className="hero-button0">Get Quote</button>
              </td>
            </tr>
          </table>

          <table
            className="table-card"
            onClick={() => {
              navigate("/oneitem");
            }}
          >
            <tr>
              <td>
                <img className="card-img" src={OneItem} />
              </td>
            </tr>
            <tr>
              <td className="td"> One Item
                <br></br></td>
            </tr>
            <tr>
              <td>
                <button className="hero-button1">Get Quote</button>
              </td>
            </tr>
          </table>
        </motion.div>
      </div>

      <div className="description">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.8,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          className="about-information">
          <h2>WE ARE ALASKI'S DELIVERIES AND REMOVALS</h2>
          Alaski’s Deliveries &amp; Removals is a local removals company
          with experiences in house removals, office removals and single
          items pickup. We provide quality services with affordable price.
          You will enjoy an efficient, delightful and stress free moving as
          we have the necessary equipment and experience to move very big
          pieces of furniture without causing damage.  We believe in
          providing superior removalist services to all our customers.
        </motion.div>
      </div>
      <div class="lorry">
        <img src={lorry} />
      </div>
      <div class="special-items">
        <div class="special-item-description">
          <h3>Moving One Item</h3>
          Alaski’s Deliveries &amp; Removals provides special drops. Do
          you want us to collect parcels for you, Yes we can do that for
          you. Click on the button and tell us when we should pick-up, from where and where we should
          drop it off for you
        </div>
        <div class="special-item-btn">
          <table className="special-card"
            onClick={() => {
              navigate("/OneItem");
            }}>
            <tr>
              <td>
                <img className="special-img" src=
                  {OneItem} />
              </td>
            </tr>
            <tr>
              <td className="special-td">Moving One Item</td>
            </tr>
            <tr>
              <td>
                <button className="special-button4">Get Quote</button>
              </td>
            </tr>
          </table>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }} className="faq">
        <h2>Why pick Alaski’s Deliveries &amp; Removals?</h2>
        There are numerous home removalists companies in Melbourne to select from, but
        not all moving companies are created equal. We are the best because we manage to
        maintain affordable pricing while delivering consistent first-rate customer service.
        Moreover, we are available to offer local customer service anytime needed. We
        communicate in ways that are easy for our busy customers, including text, email,
        and telephone.
        <br></br>
        <br></br>
        <h3>Can I contact the business for more information? </h3>
        Yes! You will be able to contact
        the business for more information once they have sent you a quote
        <br></br>
        <br></br>
        <h3>Can I leave a feedback?</h3>
        Absolutely. This will help other customers to choose our
        service. Once a job is marked completed, you will have the option to post comments,
        compliments, criticisms and reviews for the business provider. Please see our Terms
        of Use in regards to Feedback and Reviews.
        <br></br>
        <br></br>
        <h3>How soon can I expect quotes?</h3>
        You can expect to receive quotes within minutes.
        Your job will stay active for quotes for up to 5 days before it&#39;s closed off.
        <br></br>
        <br></br>
        <h3>How many quotes will I receive?</h3>
        It is important to us that you get quality quotes and
        not inundate you with quotes so you can expect to receive up to 7 quotes for your
        listed job
        <br></br>
        <br></br>
        <h3>How long does it take to move a house in Melbourne?</h3>
        It would be difficult to provide a precise time frame since a variety of variables have
        a significant influence on the completion of the operation. We will work hard to
        complete your relocation in the lowest amount of time feasible.
        <br></br>
        <br></br>
        <h3>Does the company have insurance?</h3>
        We have Public Liability Insurance for pick up and drop off properties.
      </motion.div>
    </>
  );
};

export default Home;
