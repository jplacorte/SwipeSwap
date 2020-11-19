import React from 'react';
import { MDBRow, MDBCol, MDBContainer, MDBIcon } from 'mdbreact';
import { Link }  from 'react-router-dom';
import "../../css/style.css";
import "../../css/mediaQuery.css";
import Navbar from '../navbar';

class PrivacyPolicy extends React.Component {
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
                    <div className="page-title">Privacy Policy</div>
                </MDBCol>
                <MDBCol md="12">
                    <div className="p-4">
                    Swipe Swap and its subsidiaries (hereinafter, “SS” “us,” or “we”) respects your privacy and is committed to helping you understand what data we collect, why we collect it, and what we do with it. Please, take time to read the Privacy Policy carefully. By providing personal information to us, you agree to this Privacy Policy.<br/><br/>
1. Services covered by this policy<br/>
We currently operate the Swipe Swap mobile application (the “App”), as well as the website www.Swipe Swap -app.com (the “Website” and, together with the App, the “Services”). This Privacy Policy covers your use of the Services.<br/><br/>
2. What personal information we collect from you<br/><br/>
<div style={{fontSize: "14px"}}>
2.1. We and our service providers may collect personal information from you through the Services in the ways discussed in this Policy. This information may include your name, email address, mailing address, birthday, gender and photos. We may also receive your personal information from other sources, such as public databases, joint marketing partners, social media platforms (including from people with whom you are friends or otherwise connected) and from other third parties.
You can use our App and visit our Website without providing personal information. However, we may need to collect personal information in order to provide certain Services. If you refuse to provide your personal information when required, we may not be able to provide certain Services (such as marking your account as “verified”). You also may be able to purchase certain features, from Swipe Swap, in connection with the Services. If you do so, we may use the personal information we collect to provide services to you in connection with any such purchase. If you submit any personal information relating to other people to us or to our service providers in connection with the Services, you represent that you have the authority to do so and to permit us to use the information in accordance with this Privacy Policy.<br/><br/>
2.2. We may collect the physical location of your device in order to record and publish information on your position and to show you products offered by users close to you. Swipe Swap may collect this information by, for example, using satellite, cell phone tower or WiFi signals. You may allow or deny such collection and publication of your device’s location, but it may affect your use of the Services (for example, by not allowing us to post your product for sale in a determined geographic location).<br/><br/>
2.3 We may also use any ad you post on Swipe Swap, including the uploaded photo or image of the product as well as other data (including user name and location) associated with the ad, for our own advertising purposes, including social media, Facebook ads, newsletters and ads for any media.<br/><br/>
2.4. We may disclose the personal information we collect from you to our affiliates for the purposes described in this Privacy Policy; to our service providers who provide services such as website hosting, data analysis, payment processing, order fulfillment, information technology and related infrastructure provision, customer service, email delivery, auditing and other services; and to a third party in the event of any reorganization, merger, sale, joint venture, assignment, transfer or other disposition of all or any portion of our business, assets or stock.<br/><br/>
2.5 We may use or disclose the personal information we collect from you as we believe necessary or appropriate, including, but not limited to, using and disclosing personal information for the following purposes: to protect people or property, to protect our services, rights or property, to comply with legal requirements, to respond to legal process or law enforcement requests and to comply with requests from other public and government authorities.<br/><br/>
2.6 We may aggregate personal information, which when aggregated does not personally identify you or any other user of the Services. For example, we may aggregate personal information to calculate the percentage of our users who have a particular zip code.</div><br/><br/>
3. Memberships and registration<br/><br/>
<div style={{fontSize: "14px"}}>
3.1. To use certain Services you will need to register, either by providing us your e-mail address or your social media account. We may also collect information including phone number, birthday, and gender as well as information about your preferences (such as your preferred method of communication). In case you choose to register using a social media account, you authorize us to access and use certain information depending on the privacy settings that you have selected in the social network. Examples of personal information that we compile and use include your basic account information (e.g. name, email address, gender, birthday, current city, profile picture, user ID, list of friends, etc.) and any other additional information or activities that you permit the third party social network to share.<br/><br/>
3.2. We may require you to provide us information such as a profile picture, name and surname, user name and email address for purposes of making available that information on the App and on the Website. You may visit some areas of the Services as a guest, but you may not be able to access all the content and features of those areas without registering.</div><br/><br/>
4. Public information<br/><br/>
<div style={{fontSize: "14px"}}>
4.1. Please note that any information you post on the Services will become public and may be available to other users and the general public. We urge you to be very careful when deciding what information to disclose through the Services.<br/><br/>
4.2. Please note that your user name and your profile picture will be made available to the public when you participate in some Services, such as publishing products, so you should exercise discretion when using the Services. Personal information posted by you or disclosed by you to other users may be collected by other users of such Services and may result in unsolicited messages. We are not responsible for protecting such information that you may disclose to third parties through our Services (e.g. sending your telephone number to another user through the Services).</div><br/><br/>
5. Email newsletters and push notifications<br/>
Where permitted by applicable law, we may contact you and/or send to you commercial communications via electronic communications, such as email, to inform about our products, services, offers, or any commercial content related to the company. If you do not want to receive marketing emails from us, you can always opt-out by following the unsubscribe instructions provided in such emails. Please note that even if you opt-out from receiving commercial communications, you may still receive administrative communications from Swipe Swap, such as transaction confirmations, notifications about your account activities (e.g. account confirmations, password changes, etc.), and any other important announcements. We may also send you push notifications if you have opted-in to receive them. You can disable push notifications in your mobile device’s settings.<br/><br/>
6. What non-personal information we collect from you<br/><br/>
<div style={{fontSize: "14px"}}>
6.1. In many cases, we will automatically collect certain non-personal information about your use of the Services. We collect this information to ensure that the Services function properly. We might collect, among other things, information about your browser or device, app usage data, information through cookies, pixel tags and other technologies, and aggregated information.<br/> This information may include:
App usage data, such as the date and time the App on your device accesses our servers and what information and files have been downloaded to the App based on your device number. <br/>We may also, on some versions of the App, collect information about other applications that you may have on your device (but not about the contents of those applications). We may also collect information collected automatically through your browser or device, or through the App when you download and use it.<br/> We may collect Media Access Control (MAC) address, computer type (Windows or Macintosh), screen resolution, device manufacturer and model, language, Internet browser type and version and the name and version of the Services (such as the App) you are using.
the operating system you are using, the domain name of your Internet service provider and your “click path” through the Sites or the App;<br/>
IP address, which we may use for purposes such as calculating usage levels, diagnosing server problems and administering the Services. We may also derive your approximate location from your IP address;<br/><br/>
6.2. To do this, Swipe Swap may use cookies and other technology, as described in the following section.<br/><br/>
6.3. We may also collect non-personal information when you voluntarily provide it, such as your preferred method of communication.<br/><br/>
6.4 We may aggregate personal information, which when aggregated does not personally identify you or any other user of the Services. For example, we may aggregate personal information to calculate the percentage of our users who have a particular zip code. We may use and disclose aggregated personal information for any purpose, except where we are required to do otherwise under applicable law.<br/><br/>
6.5. We may use and disclose non-personal information for any purpose, except where we are required to do otherwise under applicable law. In some instances, we may combine this information with personal information. For example, if you have created an account with our Services, your account information may be linked to the items you purchased (i.e., purchase order history). If we do, we will treat the combined information as personal information as long as it is combined.</div><br/><br/>
7. Information on cookies and related technology<br/><br/>
<div style={{fontSize: "14px"}}>
7.1. Swipe Swap Services may contain “cookies.”
We may use cookies to manage our users’ sessions and to store preferences, tracking information, and language selection. Cookies may be used whether you register with us or not. “Cookies” are small text files transferred by a web server to your hard drive and thereafter stored on your computer. The types of information a cookie collects include the date and time you visited, your browsing history and your preferences.
We may use the information collected through cookies to promote, highlight, or otherwise feature certain items in connection with your use of the Services. We may use the responses to these promoted or featured items, or your search queries and results, to customize the Services to you.<br/><br/>
7.2. Analytics
We use Google Analytics, which uses cookies and similar technologies to collect and analyze information about use of the Services and report on activities and trends. This service may also collect information regarding the use of other websites, apps and online resources. You can learn about Google’s practices by going to https://www.google.com/policies/privacy/partners/, and opt out of them by downloading the Google Analytics opt-out browser add-on, available at https://tools.google.com/dlpage/gaoptout.</div><br/><br/>
8. Our commitment to secure the personal information we have collected<br/>
We seek to use reasonable organizational, technical and administrative measures to protect personal information within our organization. No website or Internet transmission is, however, completely secure. Consequently, Swipe Swap cannot guarantee that unauthorized access, hacking, data loss, or other breaches will never occur. Your use of the App and Services is at your own risk. Swipe Swap urges you to take steps to keep your personal information safe by memorizing your password or keeping it in a safe place. If you have reason to believe that your interaction with us is no longer secure (for example, if you feel that the security of your account has been compromised), please immediately notify us in accordance with the “Contacting Us” section below.<br/><br/>
9. Third parties<br/>
This Privacy Policy does not address, and Swipe Swap is not responsible for, the privacy, information or other practices of any third parties, including any third party operating any site or service to which the Services link.
We also may use a third-party payment service to process payments made through the Services. If you wish to make a payment through the Services, your personal information may be collected by such third party and not by us, and will be subject to the third party’s privacy policy, rather than this Privacy Policy. We have no control over, and are not responsible for, this third party’s collection, use and disclosure of your Personal Information.<br/><br/>
10. Retention period<br/>
We will retain your Personal Information for the period necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law.<br/><br/>
11. Use of Swipe Swap by minors<br/>
These Services do not address anyone under the age of thirteen (13), and we request that they not provide personal information through the Services. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us at support@Swipe Swap-app.com so that we will be able to do necessary actions.<br/><br/>
12. Transfer of your personal information<br/>
We and our affiliates and service providers may transfer, store and/or process your personal information outside of your country of residence. These countries may have data protection rules that are different from those of your country. By accepting this Privacy Policy, you agree to such transferring, storing and/or processing of personal information.<br/><br/>
13. Notice of changes to the Policy<br/>
Swipe Swap reserves the right to modify this Policy at any time by notifying registered users via e-mail or the App of the existence of a new Policy and/or posting the new Policy on the Services. All changes to the Policy will be effective when posted, and your continued use of any Swipe Swap Services after the posting will constitute your acceptance of, and agreement to be bound by, those changes.<br/><br/>
14. Contacting Us
If you have any questions or comments regarding this Policy, please contact us by email at support@SwipeSwap-app.com. Please do not send sensitive information to us by email, since email communications are not always secure.

                    </div>
                </MDBCol>
                
            </MDBRow>    
          </MDBContainer>
        </div>
      </> 
    );
  }
}

export default PrivacyPolicy;
