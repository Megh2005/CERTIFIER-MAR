// Combined Certificate Component and Styles
import moment from 'moment';

const Certificate = ({ name, course, dateOfConductStart, dateOfConductEnd, signature, signatureDetails }) => {
    const styles = {
        wrapper: {
            backgroundColor: '#222222',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            overflow: 'auto',
        },
        container: {
            border: '1px solid #fff',
            padding: '2rem',
            borderRadius: '10px',
            marginTop: '2rem',
            marginBottom: '3rem',
        },
        inputGroup: {
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            marginBottom: '2rem',
        },
        label: {
            fontWeight: 500,
            fontSize: '1.1rem',
        },
        input: {
            padding: '1rem',
            fontSize: '1.2rem',
            outline: 'none',
            border: 'none',
            width: '500px',
        },
        certificateWrapper: {
            backgroundColor: '#fff',
            padding: '2rem',
            color: '#000',
            width: '1000px',
            textAlign: 'center',
        },
        certificateContainer: {
            border: '10px solid #000',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
        },
        smallText: {
            fontSize: '1rem',
        },
        primaryItalicText: {
            color: '#00f',
            fontSize: '3.5rem',
            fontWeight: 700,
            fontStyle: 'italic',
            marginBlock: '1rem',
        },
        signatureBlock: {
            marginTop: '3rem',
            display: 'inline-block',
        },
        signatureImage: {
            height: '100px',
            width: '150px',
            marginBottom: '10px',
        },
        horizontalBar: {
            margin: 'auto',
            display: 'block',
            height: '1px',
            width: '200px',
            backgroundColor: '#000',
            marginBottom: '1rem',
        },
        button: {
            border: '2px solid #000',
            width: '100%',
            outline: 'none',
            backgroundColor: '#e7e7e7',
            padding: '1rem 1.5rem',
            fontSize: '16px',
            boxShadow: '0px 0px 0px 2px #fff',
            transition: 'all 300ms ease',
            cursor: 'pointer',
        },
        buttonHover: {
            backgroundColor: '#000',
            color: '#fff',
        },
    };

    return (
        <div style={styles.certificateWrapper}>
            <div style={styles.certificateContainer}>
                <div>Logo Here</div>

                <h1>CERTIFICATE OF APPRECIATION</h1>

                <span style={styles.smallText}>This certificate is proudly awarded to</span>

                <p style={styles.primaryItalicText}>{name}</p>

                <span style={styles.smallText}>for successfully completing the course</span>

                <h2>{course}</h2>

                <span style={styles.smallText}>{`conducted from ${dateOfConductStart ? moment(dateOfConductStart).format('MMMM YYYY') : '-'
                    } to ${dateOfConductEnd ? moment(dateOfConductEnd).format('MMMM YYYY') : '-'}`}</span>

                <div style={styles.signatureBlock}>
                    <img style={styles.signatureImage} src={signature.preview} alt='' />

                    <span style={styles.horizontalBar} />

                    <span style={styles.smallText}>{signatureDetails}</span>
                </div>
            </div>

            <button
                style={styles.button}
                onMouseOver={(e) => (e.target.style = styles.buttonHover)}
                onMouseOut={(e) => (e.target.style = styles.button)}
            >
                Download PDF
            </button>
        </div>
    );
};

export default Certificate;
