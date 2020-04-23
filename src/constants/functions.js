import Axios from "axios";

const localHost = window.location.hostname === "localhost"

const baseUrl = localHost
    ? 'http://localhost/'
    : window.location.hostname //'https://example.com'

const devPublishableKeyGet = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ data: { publishableKey: 'pk_test_nqH70Fb8FmabuVsU5kp4gpYf00XGNeVxyf' } })
        }, 50);
    })
}

export const publishableKeyGet = () => {
    const url = baseUrl + "/publishableKeyGet.php";
    return new Promise(async resolve => {
        const { data: { publishableKey } } = localHost
        ? await devPublishableKeyGet()
        : await Axios.get(url);
        resolve(publishableKey)
    })
}

export const clientSecretPull = (data) => {
    const url = baseUrl + "capture.php"
    return new Promise(async resolve => {
        const { data: { clientSecret } } = await Axios.post(url, data);
        resolve(clientSecret)
    })
}

export const clientSecretDataObjectConverter = ({
    staff,
    arrivaldate,
    service,
    fsm,
    email: receipt_email,
    currency,
    amount
}) => (
        {
            amount: amount * 100,
            currency: currency.code,
            cardType: "card",
            receipt_email,
            metadata: {
                staff,
                arrivaldate,
                service,
                fsm,
            }
        }
    )

export const stripeDataObjectConverter = ({ firstname, lastname, email, line1, line2, postal_code, city, country, }, cardElement) => ({
    payment_method: {
        card: cardElement,
        billing_details: {
            address: {
                city,
                country: country.code,
                line1,
                line2,
                postal_code,
                state: null
            },
            email,
            name: `${firstname} ${lastname}`,
            phone: null
        },
    },
})

export const setCookie = (name, value, days) => {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

export const getCookie = name => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

export const eraseCookie = name => {
    document.cookie = name + '=; Max-Age=-99999999;';
}