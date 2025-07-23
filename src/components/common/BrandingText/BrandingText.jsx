import styles from './BrandingText.module.css';
function BrandingText() {
    return (
        <>  
            <h3 className={styles.branding_title}>Via Antiqua</h3>
            <h2 className={styles.branding_subtitle}>Археологические маршруты по всему миру</h2>
        </>
    )
}

export default BrandingText;