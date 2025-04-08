
import { Flex } from './style/layout/Flex.style'
interface Props{
    error:string;
}

const ErrorPage = ({error}:Props) => {
  return (
    <Flex $align="center" $justify="center" $height="100vh">
        <div style={{ padding: "2rem", color: "red", textAlign: "center" }}>
            ⚠️ {error}
            <br />
            <button
              onClick={() => window.location.reload()}
              style={{ marginTop: "1rem" }}
            >
              🔁 Retry
            </button>
          </div>
    </Flex>
    
  )
}

export default ErrorPage