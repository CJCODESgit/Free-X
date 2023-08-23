import { feedback } from '../constants';
import styles from '../style';
import FeedbackCard from './FeedbackCard';

const Testimonials = () => (
    <section id='clients' className={`${styles.paddingY} ${styles.flexcenter} flex-col relative`}>
      {/* TODO */}
      <div />

      <div className='w-full flex jsutify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h1 className={styles.heading2}>What people are <br className='sm:block hidden'/>saying about us</h1>
      </div>
    </section>
  )

export default Testimonials