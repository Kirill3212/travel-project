import styles from './footer.module.scss';

import { Input, Link, Text, Button } from '../../shared/ui/';

import microsoft from '../../assets/storeNamePlate/microsoft.png';
import playstore from '../../assets/storeNamePlate/playstore.png';

import {
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaWhatsapp,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_container}>
        {/* ACTION SECTION */}
        <div className={styles.footer_actionBlock}>
          {/* Email */}
          <div className={styles.footer_actionBlock_subsribeToEmail}>
            <Text tag={'h3'} color={'green'}>
              Subcribe To Know The News
            </Text>
            <div className={styles.footer_actionBlock_subsribeToEmail_action}>
              <Input
                placeholder={'email'}
                theme={'standart'}
                width={'max'}
                size={'s'}
                maxLength={100}
                type={'input'}
                // svg={'searchColor'}
              />
              <Button type={'submit'} size={'s'} theme={'secondary'}>
                Subscribe
              </Button>
            </div>
          </div>

          {/* Follow Icons */}
          <div className={styles.footer_actionBlock_followUs}>
            <Text tag={'h3'} color={'green'}>
              Follow Us
            </Text>
            <div className={styles.footer_actionBlock_followUs_icons}>
              <FaFacebook size={'25px'} cursor={'pointer'} />
              <FaYoutube size={'25px'} cursor={'pointer'} />
              <FaTwitter size={'25px'} cursor={'pointer'} />
              <FaInstagram size={'25px'} cursor={'pointer'} />
              <FaPinterest size={'25px'} cursor={'pointer'} />
              <FaWhatsapp size={'25px'} cursor={'pointer'} />
            </div>
          </div>

          {/* Get The App */}
          <div className={styles.footer_actionBlock_getTheApp}>
            <Text tag={'h3'} color={'green'}>
              Get the App
            </Text>
            <div className={styles.footer_actionBlock_getTheApp_images}>
              <img src={microsoft} alt='microsoft' width={'100px'} height={'35px'} />
              <img src={playstore} alt='playstore' width={'100px'} height={'35px'} />
            </div>
          </div>
        </div>

        {/* LINKS SECTION */}
        <div className={styles.footer_linkBlock}>
          {/* Places */}
          <div className={styles.footer_linkBlock_places}>
            <Text tag={'h3'}>Places</Text>
            <div className={styles.footer_linkBlock_places_links}>
              <Link to={''}>All Places</Link>
              <Link to={''}>Latest Places</Link>
              <Link to={''}>Most Popular</Link>
              <Link to={''}>Places to Eat</Link>
              <Link to={''}>Most Popular</Link>
              <Link to={''}>Random</Link>
              <Link to={''}>Nearby</Link>
              <Link to={''}>Add a place</Link>
            </div>
          </div>

          {/* Editorial */}
          <div className={styles.footer_linkBlock_editorial}>
            <Text tag={'h3'}>Editorial</Text>
            <div className={styles.footer_linkBlock_editorial_links}>
              <Link to={''}>Stories</Link>
              <Link to={''}>Food & Drink</Link>
              <Link to={''}>Itineraries</Link>
              <Link to={''}>Lists</Link>
              <Link to={''}>Puzzles</Link>
              <Link to={''}>Video</Link>
              <Link to={''}>Podcast</Link>
              <Link to={''}>Newsletters</Link>
            </div>
          </div>

          {/* Trips */}
          <div className={styles.footer_linkBlock_trips}>
            <Text tag={'h3'}>Trips</Text>
            <div className={styles.footer_linkBlock_trips_links}>
              <Link to={''}>All trips</Link>
              <Link to={''}>Trips Blog</Link>
              <Link to={''}>Art & Culture Trips</Link>
              <Link to={''}>Food Trips</Link>
              <Link to={''}>Hidden City Trips</Link>
              <Link to={''}>History Trips</Link>
              <Link to={''}>WildLife & Nature Trips</Link>
              <Link to={''}>FAQ</Link>
            </div>
          </div>

          {/* Experiences */}
          <div className={styles.footer_linkBlock_experiences}>
            <Text tag={'h3'}>Experiences</Text>
            <div className={styles.footer_linkBlock_experiences_links}>
              <Link to={''}>Experiences</Link>
              <Link to={''}>Online Courses</Link>
              <Link to={''}>Online Experiences FAQ</Link>
              <Link to={''}>Online Courses FAQ</Link>
              <Link to={''}>Eclipse Festival 2024</Link>
            </div>
          </div>

          {/* Community */}
          <div className={styles.footer_linkBlock_community}>
            <Text tag={'h3'}>Community</Text>
            <div className={styles.footer_linkBlock_community_links}>
              <Link to={''}>Membership</Link>
              <Link to={''}>Feedback & Ideas</Link>
              <Link to={''}>Community Guidelines</Link>
              <Link to={''}>Product Blog</Link>
              <Link to={''}>Unique Gifts</Link>
              <Link to={''}>Work With Us</Link>
            </div>
          </div>

          {/* Company */}
          <div className={styles.footer_linkBlock_company}>
            <Text tag={'h3'}>Company</Text>
            <div className={styles.footer_linkBlock_company_links}>
              <Link to={''}>About</Link>
              <Link to={''}>FAQ</Link>
              <Link to={''}>Invest In Us</Link>
              <Link to={''}>Advertise With Us</Link>
              <Link to={''}>Advertising Guidelines</Link>
              <Link to={''}>Press</Link>
              <Link to={''}>Privacy Policy</Link>
              <Link to={''}>Cookie Policy</Link>
              <Link to={''}>Terms Of Use</Link>
            </div>
          </div>
        </div>

        {/* Rights */}
        <div className={styles.footer_rights}>
          <Text tag={'h4'} color={'blue'}>
            © All Rights Reserved
          </Text>
        </div>
      </div>

      {/* FeedBack */}
      <div className={styles.footer_feedBack}>
        <div className={styles.footer_feedBack_contact}>
          <Text tag={'h4'} color={'green'}>
            Questions or Feedback ?
          </Text>
          <Link to={''} color={'purple'}>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
