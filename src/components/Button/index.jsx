import { Container } from './style'

export function Button({ title,loading = false, ...rest }) {

    return (<Container 
        type="button"
        disabled={loading}
    >
        {loading ? "Carregando..." : title}
    </Container>)

}