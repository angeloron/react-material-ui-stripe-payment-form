import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Stepper,
    Step,
    StepLabel,
    Button,
    Typography,
    Box,
    Grid,
    CircularProgress,
} from '@material-ui/core';
import {
    SentimentVerySatisfied,
    SentimentVeryDissatisfied
} from '@material-ui/icons';
import StepperIcons from "./StepperIcons";
import ContactForm from "./Forms/ContactForm";
import PaymentForm from "./Forms/PaymentForm";
import ServiceForm from "./Forms/ServiceForm";
import {
    useStripe,
    useElements,
    CardCvcElement,
} from '@stripe/react-stripe-js';
import { useStateValue } from "../StateContext";
import StepConnector from './StepConnector'
import {
    clientSecretPull,
    stripeDataObjectConverter,
    clientSecretDataObjectConverter
} from '../constants/functions';

// OVERALL STYLE
const style = makeStyles(theme => ({
    button: {
        marginRight: theme.spacing(1),
    },
    mainBox: {
        position: "relative",
        marginTop: "-8px",
        padding: "10px 20px",
        borderBottomRightRadius: "4px",
        borderBottomLeftRadius: "4px",
        background: theme.palette.background.default
    },
    stepper: {
        height: "calc(10vh - 40px)",
        minHeight: "55px"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    },
    buttonWrapper: {
        justifyContent: "flex-end"
    },
}));

const StepContent = ({ step }) => {
    switch (step) {
        case 0:
            return <ContactForm />;
        case 1:
            return <ServiceForm />;
        case 2:
            return <PaymentForm />;
        default:
            return <></>;
    }
}

const Steppers = () => {
    const classes = style();
    const [activeStep, setActiveStep] = useState(0);
    const [loading, setLoading] = useState(false);
    const [cardStatus, setCardStatus] = useState(true);
    const [cardMessage, setCardMessage] = useState("");

    const stripe = useStripe();
    const elements = useElements();
    const [{ formValues }, dispatch] = useStateValue();

    const handleNext = () => {
        if (activeStep === 2) {
            capture()
        } else {
            setActiveStep(prevActiveStep => prevActiveStep + 1);
        }
    };
    const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
    const handleReset = () => setActiveStep(0);

    const capture = async () => {

        setLoading(true);

        console.log(formValues);
        const clientSecretDataObject = clientSecretDataObjectConverter(formValues);
        const clientSecret = await clientSecretPull(clientSecretDataObject);
        const cardElement = elements.getElement(CardCvcElement);
        const stripeDataObject = stripeDataObjectConverter(formValues, cardElement);
        const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, stripeDataObject);

        if (error) {
            setCardStatus(false);
            setCardMessage(error.message)
        } else if (paymentIntent && paymentIntent.status === "succeeded") {
            setCardStatus(true);
            setCardMessage("");
            dispatch({ type: 'emptyFormValue' });
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setLoading(false);
    }

    return (
        <>
            <Stepper alternativeLabel className={classes.stepper} connector={<StepConnector />} activeStep={activeStep}>
                {/* Change the number of loops here based on StepContent */}
                {[1, 2, 3].map(e =>
                    <Step key={e}>
                        <StepLabel StepIconComponent={StepperIcons} />
                    </Step>
                )}
            </Stepper>
            <Box className={classes.mainBox}>
                {activeStep === 3 ?
                    <Grid
                        container
                        spacing={3}
                        direction="column"
                        justify="space-around"
                        alignItems="center"
                        style={{ height: "400px" }}
                    >
                        {cardStatus
                            ?
                            <SentimentVerySatisfied fontSize="large" color="primary" />
                            :
                            <SentimentVeryDissatisfied fontSize="large" color="error" />
                        }
                        <Typography variant="h4">
                            {cardMessage}
                        </Typography>
                        <Button onClick={cardStatus ? handleReset : handleBack} className={classes.button}>
                            {cardStatus ? "Reset" : "Back"}
                        </Button>
                    </Grid>
                    :
                    <form autoComplete="off" className={classes.form} onSubmit={e => { e.preventDefault(); handleNext() }}>
                        <Grid container spacing={3}>
                            <StepContent step={activeStep} />
                            <Grid container item justify="flex-end">
                                <Button disabled={activeStep === 0} className={classes.button} onClick={handleBack}>
                                    Back
                                    </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    type="submit"
                                    disabled={loading}
                                >
                                    {
                                        loading
                                            ?
                                            <CircularProgress size={24} />
                                            :
                                            activeStep === 2 ? 'Pay' : 'Next'
                                    }
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                }
            </Box>
        </>
    );
}

export default Steppers;
