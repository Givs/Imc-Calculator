import { Container, Grid, Typography } from '@material-ui/core'

import styles from './header.module.scss'

function Header () {
    return (
        <div className={styles.header} >
            <Container fixed>
                <Grid container justify="center" alignItems="center" spacing={5}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h3" className={styles.header__title} > Calcule o seu IMC </Typography>
                        <Typography> O IMC é o índice de Massa Corporal, e é utilizado para saber se o peso está de acordo com a altura </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <img src="./medic.png" alt="Médico e paciente" />
                    </Grid>
                </Grid>
            </Container>
            
        </div>
    )
}


export default Header