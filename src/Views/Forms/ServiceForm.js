import React from 'react';
import {
    TextField,
    Grid,
    Typography
} from "@material-ui/core";
import { useStateValue } from "../../StateContext";

const ServiceForm = () => {

    const [{ formValues }, dispatch] = useStateValue();

    return <>
        <Grid item xs={12}>
            <Typography variant="h6">Additional data</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                type="date"
                label="date"
                name="date"
                variant="outlined"
                InputLabelProps={{
                    shrink: true,
                }}
                fullWidth
                value={formValues.date}
                onChange={e =>
                    dispatch({
                        type: 'editFormValue',
                        key: "date",
                        value: e.target.value
                    })
                }
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                label="Service"
                name="service"
                variant="outlined"
                fullWidth
                value={formValues.service}
                onChange={e =>
                    dispatch({
                        type: 'editFormValue',
                        key: "service",
                        value: e.target.value
                    })
                }
            />
        </Grid>
        <Grid item xs={12}>
            <Typography variant="h6">Social Network?</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                label="facebook"
                name="facebook"
                variant="outlined"
                fullWidth
                value={formValues.facebook}
                onChange={e =>
                    dispatch({
                        type: 'editFormValue',
                        key: "facebook",
                        value: e.target.value
                    })
                }
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                label="twitter"
                name="twitter"
                variant="outlined"
                fullWidth
                value={formValues.twitter}
                onChange={e =>
                    dispatch({
                        type: 'editFormValue',
                        key: "twitter",
                        value: e.target.value
                    })
                }
            />
        </Grid>
    </>
}

export default ServiceForm;