import { useState } from 'react'
import { Container, Grid, Typography, TextField, Button } from '@material-ui/core'

import styles from './Calculator.module.scss'

function Calculator () {
    const [altura, setAltura] = useState()
    const [peso, setPeso] = useState()
    const [imc, setImc] = useState()

    
    function calculateImc ()  {
       const alturam = altura / 100    //altura para metros
       setImc((peso/(alturam*alturam)).toFixed(2))
    }

    function verificaImc (){
        if ( imc < 18.5 ) return "Abaixo do peso!"
        if ( imc < 24.9 ) return "Peso Normal!"
        if ( imc < 29.9 ) return "Sobrepeso!"
        if ( imc < 34.9 ) return "Obesidade grau 1!"
        if ( imc < 39.9 ) return "Obesidade grau 2!"
        return "Obesidade grau 3"
    }


    return (
        <div className={styles.calculator}>
            <Container maxWidth="xs">
                <Typography variant="h3" > Calculadora </Typography>
                <Grid container direction="column" spacing={3}>
                    <Grid item>
                        <TextField label="Altura em cm" variant="filled" fullWidth type="number" value={altura} onChange={ ({ target }) => setAltura(target.value) }/>
                    </Grid>
                    <Grid item>
                        <TextField label="Peso em Kg" variant="filled" fullWidth type="number" value={peso} onChange={ ({ target }) => setPeso(target.value) }/>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" fullWidth onClick={() => calculateImc()}> Calcular </Button>
                    </Grid>
                    {
                        imc &&
                        <Grid item>
                            <Typography> O seu IMC é: {imc} kg/m2 - {verificaImc()} </Typography>
                        </Grid>
                    }
                </Grid>
            </Container>
        </div>
    )
}

export default Calculator