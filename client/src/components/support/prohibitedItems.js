import React from 'react';
import { MDBRow, MDBCol, MDBContainer, MDBIcon } from 'mdbreact';
import { Link }  from 'react-router-dom';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import Navbar from '../navbar';

class ProhibitedItems extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
      <Navbar />
        <div className="privacy-policy">
          <MDBContainer className="settings-container">
            <MDBRow className="mx-auto">
                <MDBCol md="12" className="border-bottom pb-3">
                <Link to="/support" className="float-left" >
                    <MDBIcon icon="angle-left" className="ml-2" style={{fontSize: '32px', color: '#167D7F'}} />
                    </Link>
                    <div className="page-title">Prohibited and Restricted Items Policy</div>
                </MDBCol>
                <MDBCol md="12">
                    <div className="p-4">
                    In order to ensure Swipe Swap provides the best experience possible for everyone, we strongly enforce a no tolerance policy for objectionable content. If you see                inappropriate content, please use the “Report” feature found under each post.<br/><br/>
                    1. Parties This Agreement is between you and Swipe Swap only. Notwithstanding the foregoing, you acknowledge that Apple and Google and its subsidiaries are third party                   beneficiaries of this Agreement and Apple and Google have the right to enforce this Agreement against you. Swipe Swap is solely responsible for the Swipe Swap App and its content.<br/><br/>
                    2. Privacy App Name may collect and use information about your usage of the SwipeSwap App, including certain types of information from and about your device. Swipe                  Swap may use this information, in a form that may personally identify you, to measure the use and performance of the Swipe Swap App.<br/><br/>
                    3. Limited License Swipe Swap grants you a limited, non-exclusive, non-transferable,                    revocable license to use the Swipe Swap App for your personal, non-commercial purposes. You may only use the Swipe Swap App on Apple and Android devices that you own or control and as permitted by the App Store and Google Play Store Terms of Service.<br/><br/>
                    4. Objectionable Content Policy Content may not be submitted to Swipe Swap, who will moderate all content and ultimately decide whether or not to post a submission to the extent such content includes, is iContent. Objectionable Content includes, but is not limited to: (i) sexually explicit materials; (ii) obscene, defamatory, libelous, slanderous, violent and/or unlawful content or profanity; (iii) content that infringes upon the rights of any third party, including copyright, trademark, privacy, publicity or other personal or proprietary right, or that is deceptive or fraudulent; (iv) content that promotes the use or sale of illegal or regulated substances, tobacco products, ammunition and/or firearms; and (v) gambling, including without limitation, any online casino, sports books, bingo or poker.<br/><br/>
                    5. Swipe Swap reserves the right to remove you from the platform if you do not follow our rules of conduct and other policies, which are the following:<br/>
                    Prohibited conduct:<br/>
                    Postings or messages that are defamatory, libelous, fraudulent or otherwise violate the law.<br/>
                    Postings or messages that violate right of publicity or privacy.
                    Posting or transmitting any virus, worm, Trojan horse, Easter egg, time bomb, spyware or other computer code, file or program that’s or is potentially harmful or invasive or intended to damage or hijack the operation of, or to monitor the use of, any hardware, software or equipment (each, a “Virus”).<br/><br/>
                    Using Swipe Swap for any purpose that’s fraudulent or unlawful.
                    Harvesting or collecting information about our users or directing our users to external websites or apps to harvest or collect their information.<br/>
                    Interfering with or disrupting the operation of Swipe Swap or our servers or networks.<br/>
                    Restricting or inhibiting any other person from using Swipe Swap.
                    Reproducing, modifying, distributing or otherwise exploiting any portion of Swipe Swap except as authorized by us.<br/>
                    Reverse engineering, decompiling or disassembling any portion of Swipe Swap.<br/>
                    Systematically downloading our content.<br/>
                    Unless you’re a public search engine, using any robot, spider, crawler, worm, site search/retrieval application or other manual or automatic device to retrieve, index, “scrape,” “data mine” or otherwise gather our content.<br/>
                    Asking a prospective traders questions about their sex, race, religion, sexual orientation, gender, or family status.<br/>
                    You must accurately and fairly represent yourself and the items you’re buying or selling on Swipe Swap. Attempts to deceive or defraud users are not allowed on the platform.<br/>  
                    If it’s not yours to Swap, don’t Swap it:<br/>
                    You must rightfully own anything you intend to trade on Swipe Swap. We have a zero tolerance policy for stolen goods. Remember, violating someone else’s intellectual property is a form of theft. This means counterfeit goods or replicas that are being traded without permission from the rightful owner aren’t allowed.<br/><br/>
                    We prohibit the following from the platform:
                    <br/><br/>
                    Counterfeit goods<br/>
                    Replicas that are traded without consent from the trademark owner
                    Stocks and other securities, as well as other non-transferable items<br/>
                    Stolen goods<br/>
                    Hacking tools<br/>
                    Vehicles where you are not the titleholder<br/><br/>
                    The rules of conduct on Swipe Swap are:<br/><br/>
                    Attempts to lure users off of Swipe Swap to other services are prohibited<br/>
                    Negotiate trades in good faith<br/>
                    You may not circumvent our anti-spam and anti-fraud efforts (this includes multiple postings of the same item)<br/>
                    All items uploaded should include photos that are clear, well-lit, and accurately represent what you’re selling<br/><br/>
                    Prohibited conduct:<br/><br/>
                    Messages that are intended to harass, intimidate, threaten, or demean another user
                    Items that promote or support hate groups
                    Items that depict or glorify violence
                    Racial slurs
                    It’s your responsibility to understand all laws where you live and to make sure your activity on Swipe Swap is legal. For example, you may need to make sure it’s legal for you to trade your item, or that you are following the law regarding real estate you’ve listed for sale or rent.<br/><br/>
                    Understand and honor our Prohibited Items guidelines:<br/><br/>
                    Read and respect our prohibited items guidelines, but most importantly, use common sense. If you wouldn’t sell it to your family, it’s not for Swipe Swap.<br/><br/>
                    This list covers most of what isn’t allowed, but we’ll remove any item we feel is harmful to the Swipe Swap community.<br/><br/>
                    Prohibited items include:
                    <ul>
                      <li>Pornography</li>
                      <li>Adult/ Sexual content, adult toys or other items that include explicit nudity</li>
                      <li>Drugs</li>
                      <li>Swipe Swap isn’t a place to sell drugs. That said, you can Swap pipes, bongs, hookahs, or other accessories associated with tobacco products.</li>
                      <li>Prohibited items include:</li>
                      <li>Tobacco</li>
                      <li>Skin and bones from endangered or protected species</li>
                      <li>Prescription drugs or medical devices</li>
                      <li>Over-the-counter drugs</li>
                      <li>Sweepstakes, Lottery tickets and gambling mediums</li>
                      <li>Items obtained through government assistance</li>
                      <li>Bodily fluids such as breast milk</li>
                      <li>Sale of currency as a product (euros, dollars, cryptocurrencies, etc.). Collectible coins or bills are okay.</li>
                      <li>Repeated listings of the same item</li>
                      <li>Mass messages sent without the intent of trading items on Swipe Swap</li>
                      <li>Weapons and Other Dangerous Items (tasers, fireworks, etc.)</li>
                      <li>All firearms, accessories and ammunition</li>
                      <li>Burglary tools</li>
                      <li>Hazardous chemicals or controlled substances</li>
                      <li>Miscellaneous</li>
                    </ul><br/>

                    The policies above establish most of what isn’t allowed, but are not limited. We reserve the right to remove any item we feel is harmful to the Swipe Swap community.<br/><br/>

                    <div style={{fontSize: "20px"}}>Services</div>
                    We currently don’t allow some professional services like legal, financial, or most medical services. Additionally, you can’t offer to do something illegal for someone else.
                    See below for a list of prohibited services.<br/><br/>
                    Prohibited services include:<br/>
                    Financial Services (tax filing and preparation, insurance, loans, and credit scoring), Legal Services (debt collection, will preparation, legal advice), Medical Services (chiropractic care, cosmetic services like Botox), Escort Services, companionship, matchmaking, Services which are themselves illegal or may include illegal activity, Services related to drugs, Services involving guns or other weapons, Pyramid Schemes or multi-level marketing, Massage services, Services making extreme or unrealistic promises (“Gain 100lbs of muscle in a week”, “Extend your life”), Random non targeted behavior that clogs up people’s feed. Don’t repeatedly post the same products, and don’t start a conversation with someone unless you’re actually interested in trading their item.<br/><br/>
                    6. Warranty Swipe Swap disclaims all warranties about the Swipe Swap App to the fullest extent permitted by law. To the extent any warranty exists under law that cannot be disclaimed, Swipe Swap shall be solely responsible for such warranty.<br/><br/>
                    7. Maintenance and Support Swipe Swap does provide minimal maintenance or support for it but not to the extent that any maintenance or support is required by applicable law, Swipe Swap shall be obligated to furnish any such maintenance or support.<br/><br/>
                    8. Product Claims Swipe Swap is responsible for addressing any claims by you relating to the Swipe Swap App or use of it, including, but not limited to: (i) any product liability claim; (ii) any claim that the Swipe Swap App fails to conform to any applicable legal or regulatory requirement; and (iii) any claim arising under consumer protection or similar legislation. Nothing in this Agreement shall be deemed an admission that you may have such claims.<br/><br/>
                    9. Third Party Intellectual Property Claims App Name shall not be obligated to indemnify or defend you with respect to any third party claim arising out or relating to the Swipe Swap App. To the extent Swipe Swap is required to provide indemnification by applicable law, Swipe Swap shall be solely responsible for the investigation, defense, settlement and discharge of any claim that the Swipe Swap App or your use of it infringes any third party intellectual property right.<br/><br/>
                    10. You agree not to use or provide software (except for general purpose web browsers and email clients, or software expressly licensed by us) or services that interact or interoperate with Swipe Swap, e.g. for downloading, uploading, posting, flagging, emailing, search, or mobile use. Robots, spiders, scripts, scrapers, crawlers, etc. are prohibited, as are misleading, unsolicited, unlawful, and/or spam postings/email. You agree not to collect users’ personal and/or contact information (“PI”).<br/><br/>
                    11. To the extent permitted by law, (1) we make no promise as to Swipe Swap, its completeness, accuracy, availability, timeliness, propriety, security or reliability; (2) your access and use are at your own risk, and Swipe Swap is provided “AS IS” and “AS AVAILABLE”; (3) we are not liable for any harm resulting from (a) user content; (b) user conduct, e.g. illegal conduct; (c) your Swipe Swap use; or (d) our representations; (4) we and our officers, directors, employees (“swipe swap entities”), disclaim all warranties & conditions, express or implied, of merchantability, fitness for particular purpose, or non-infringement; (5) swipe swap entities are not liable for any indirect, incidental, special, consequential or punitive damages, or any loss (e.g. of profit, revenue, data, or goodwill).<br/><br/>
                    12. BIR/DTI Tax Law on Bartering and Trading: <a href="https://www.bir.gov.ph/index.php/legal-matters/tax-guide-on-philippine-taxation.html" target="_blank">https://www.bir.gov.ph/index.php/legal-matters/tax-guide-on-philippine-taxation.html</a><br/><br/>
                    13. Registering with Swipe Swap – In order to be able to use Swipe Swap’s services, a registration with Swipe Swap is required. Individuals over the age of 18 have the right to register. As a minor, you may only register with Swipe Swap if you are at least 14 years old and your legal representatives have provided their consent. We have the right to make the use of Swipe Swap services contingent on proper proof of your identity, your legal age, or your legal representative’s consent.<br/>
                    The registration itself is free of charge (free account) and does not make you sign up for a paid subscription. By registering, you are executing an agreement with Swipe Swap for a limited, free use of the platform.<br/>
                    You can register using a single sign-on service (Facebook, Gmail).<br/>
                    Any information required for registration must be complete and correct and always up-to-date. Swipe Swap has the right to save and process the data you provided during registration, in accordance with the provisions on Data Protection.<br/>
                    The password used must be kept confidential. Keeping it a secret is solely and fully your responsibility. The Swipe Swap user account may only be used by you. Any unauthorized use of your user account, as well as any such suspicion to that effect should be communicated to Swipe Swap immediately.<br/><br/>
                    14. Executing an Agreement for a Paid Upgrade – To be able to fully benefit from Swipe Swap’s services, additional service packages in the form of paid upgrades will be made available to you after registering. These can be purchased for different, and variable periods of time, which you will see in the order options. <br/>
                    Swipe Swap’s paid subscriptions that allow you to have full and complete use of the trade and barter functionality. We currently offer the following upgrades / service packages:<br/><br/>

                    {/* Insert prices for upgrades here */}

                    The Swipe Swap Premium service packages include an ad-free experience and full mobility through our customer-facing trade and barter functionality. 
                    You will maintain this experience as long as your subscription is valid.<br/>
                    You submit a legally binding offer for a fee-based subscription, if you enter the information requested in the online order form and then click on the purchase button. By doing so, you submit a legally binding offer for an agreement for a paid subscription. Before submitting your order, you may change and view the data at any time.<br/>
                    The agreement is accepted when Swipe Swap issues a notice of acceptance, which will be sent to you immediately by email (receipt and order confirmation). In this email, the text of the agreement (consisting of the order, terms and conditions and order confirmation) will be sent to you by Swipe Swap on a permanent data carrier (email) (agreement confirmation). Your subscription begins on this date. The text of the agreement is saved subject to data protection.<br/>
                    Please read our Privacy Statement for information on the collection, use and processing of your data.<br/><br/>

                    15. Cancellation Policy – If you are a consumer (i.e., a person completing the legal transaction for purposes that can be predominantly attributed to neither their commercial nor their independent professional activity), you are entitled to a legal withdrawal right when executing a distance selling agreement, so in this case when signing an agreement for a fee-based subscription with Swipe Swap, about which Swipe Swap informs below, as per the requirement of the statutory model. Please note that in the case of an in-app purchase, you have the right to withdraw from the respective operator of the app store, i.e., Apple or Google.<br/><br/>

                    16. Notice of changes to the Policy
                    Swipe Swap reserves the right to modify this Policy at any time by notifying registered users via e-mail or the App of the existence of a new Policy and/or posting the new Policy on the Services. All changes to the Policy will be effective when posted, and your continued use of any Swipe Swap Services after the posting will constitute your acceptance of, and agreement to be bound by, those changes.<br/><br/>

                    17. Contacting Us
                    If you have any questions or comments regarding this Policy, please contact us by email at support@SwipeSwap-app.com Please do not send sensitive information to us by email, since email communications are not always secure.
                    
                    </div>
                </MDBCol>
                
            </MDBRow>    
          </MDBContainer>
        </div>
      </> 
    );
  }
}

export default ProhibitedItems;
