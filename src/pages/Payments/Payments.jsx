import { useState } from "react";
import CryptoPayments from "./CryptoPayments";
import './Payments.scss'
import AppHelmet from "../../components/AppHelmet";
//import Ticket from "./Ticket";
import PaystackPayments from "./PaystackPayments";
export default function Payments({setUserData}) {
    const [paymentType, setPaymentType] = useState("mpesa")
    const renderPaymentType = () => {
        let item;
        switch(paymentType) {
            case "crypto":
                item = <CryptoPayments setUserData={setUserData}/>
              break;
            default:
                item = <PaystackPayments  setUserData={setUserData}/>
        }

        return item;
    }
    return (
        <div className="payments">
            <AppHelmet title={"Pay"} location={'/pay'}/>
            <div className="wrapper">
                <h2>select payment method</h2>
                <form className="method">
                    <fieldset>
                        <input name="payment-method" type="radio" value={"mpesa"} id="mpesa" checked={paymentType === "mpesa"}   onChange={(e) => setPaymentType(e.target.value)}/>
                        <label htmlFor="mpesa">mpesa/card</label>
                    </fieldset>
                    <fieldset>
                        <input name="payment-method" type="radio" value={"crypto"} id="crypto" checked={paymentType === "crypto"}  onChange={(e) => setPaymentType(e.target.value)}/>
                        <label htmlFor="crypto">crypto</label>
                    </fieldset>
                </form>
            </div>
            {
                renderPaymentType()
            }
        </div>
    )
}