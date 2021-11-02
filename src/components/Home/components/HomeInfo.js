import React from 'react';

// import images
import DonatePTSA from '../../../public/images/donate-ptsa.png';

const HomeInfo = () => {
    return (
        <section className="ptsa-support-join">
            <h1>Support / Join FHS PTSA</h1>
            <p>Please click on the link below to pay through Paypal or a credit card. If you have questions please send an email to <a href="mailto:fremontptsa@gmail.com">fremontptsa@gmail.com</a></p>
            <p>If your company does a matching donation please let us know either in the "comments" section of your payment or via email so we can follow up.</p>
            <p>You do not have to use PayPal to donate: any credit card will work. If you do not have Paypal, all you have to do is click on the yellow button below ("donate") and then click on the little "continue" link on the left of the page. You will then be able to enter your credit card details that will then be safely processed.</p>
            <p>If you want to add any special instructions for the PTSA treasurer, (allocation, multiple memberships, etc.) you will be able to do so in the confirmation page by clicking on the link "Note to the treasurer/FUNDS' ALLOCATION:".</p>
            <p>Once again, Thanks for your financial support and we hope to see you at one of the future <a href="https://fhs.fuhsd.org/parent-portal/ptsa" target="_blank">PTSA meetings</a></p>
            <p>Click any of the yellow buttons below to donate!</p>

            <table className="donate">
                <thead>
                    <tr>
                        <th><span>$160</span><span>Family donation plus one member</span></th>
                        <th><span>$170</span><span>Family donation plus two member</span></th>
                        <th><span>$$</span><span>Choose your donation a amount</span></th>
                        <th><span>$10</span><span>Student / Teacher Membership</span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src={DonatePTSA} alt="Donate to PTSA" /></td>
                        <td><img src={DonatePTSA} alt="Donate to PTSA" /></td>
                        <td><img src={DonatePTSA} alt="Donate to PTSA" /></td>
                        <td><img src={DonatePTSA} alt="Donate to PTSA" /></td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default HomeInfo
