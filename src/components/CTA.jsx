import styles from "../style"
import Button from "./Button"

const CTA = () => (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding}`}>
      <div>
        <h2>Let's try our service now!</h2>
        <p>All you need to easily receive payments for your work and grow on your freelancing journey.</p>
      </div>
      <div>
        <Button/>
      </div>
    </section>
  )


export default CTA