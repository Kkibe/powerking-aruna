import React, { useContext} from 'react'
import './Ticket.scss';
import { PriceContext } from '../../PriceContext';
import AppHelmet from '../../components/AppHelmet';
import { PaystackButton } from 'react-paystack';
import { AuthContext } from '../../AuthContext';
import { getUser, updateUser } from '../../firebase';

export default function PaystackPayments({setUserData}) {
  const {price, setPrice} = useContext(PriceContext)
  const {currentUser} = useContext(AuthContext);

  const handleUpgrade = async () => {
    try {
      const currentDate = new Date().toISOString();
      await updateUser(currentUser.email, true, returnPeriod(), currentDate);
      alert('You Have Upgraded To ' + returnPeriod() + " VIP");
      await getUser(currentUser.email, setUserData);
      window.location.pathname = '/tips';
    } catch (error) {
      console.error("Error upgrading user:", error.message);
    }
  };
  

  const returnPeriod = () => {
    if(price === 200){
      return 'Daily'
    } else if (price === 800){
      return 'Weekly'
    } else if (price === 3000){
      return 'Monthly'
    } else {
      return 'Yearly'
    }
  }

  const componentProps = {
    reference: (new Date()).getTime().toString(),
    email: currentUser.email,
    amount: price * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: 'pk_live_ec866ff1c59f831bbf7af1c50511a4a326ef1cda',
    currency: "KES",
    metadata: {
      name: currentUser.email,
    },
    text: 'Pay Now',
    onSuccess: (response) => {
      handleUpgrade();
    },
    onClose: () => {
      //console.log('Payment dialog closed');
      // Handle payment closure here
    },
  };
  return (
    <div className="pay">
      <AppHelmet title={"Pay"} location={'/pay'}/>
      <form>
      <fieldset>
        <input name="prices" type="radio" value={200} id="daily" checked={price===200 ? true : false}   onChange={(e) => setPrice(200)}/>
        <label htmlFor="daily">Daily VIP</label>
        <span className="price">KSH 200</span>
      </fieldset>
      <fieldset>
        <input name="prices" type="radio" value={800} id="weekly" checked={price===800 ? true : false}   onChange={(e) => setPrice(800)}/>
        <label htmlFor="weekly">7 Days VIP</label>
        <span className="price">KSH 800</span>
      </fieldset>
      <fieldset>
        <input name="prices" type="radio" value={3000} id="monthly" checked={price===3000 ? true : false}   onChange={(e) => setPrice(3000)}/>
        <label htmlFor="monthly">30 Days VIP</label>
        <span className="price">KSH 3000</span>
      </fieldset>
      <fieldset>
        <input name="prices" type="radio" value={7500} id="yearly" checked={price===7500 ? true : false}   onChange={(e) => setPrice(7500)}/>
        <label htmlFor="yearly">1 Year VIP</label>
        <span className="price">KSH 7500</span>
      </fieldset>
    </form>
      <h4>GET {returnPeriod().toUpperCase()} VIP FOR {price}</h4>
      <PaystackButton {...componentProps} className='btn'/>
    </div>
  )
}
