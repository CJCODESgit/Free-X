import { card } from "../assets";
import styles, {layout} from '../style';
import Button from "./Button";

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better  <br className="sm:block hidden" /> Payment Option</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>we redefine payment options to cater to your preferences. Seamlessly choose between cutting-edge crypto payments or trusted traditional methods. Embrace the future of finance with the security and efficiency of cryptocurrency, or opt for the reliability of conventional payments.</p>

        <Button styles="mt-10"  />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w=[100%]h-[100%]" />
      </div>

    </section>
  )

export default CardDeal