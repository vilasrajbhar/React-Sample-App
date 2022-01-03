import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'


export default function NotFound() {

    return (
        <Container component="main">
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h2" align="center" color="primary" >
                        404 Page Not Found
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    )
}