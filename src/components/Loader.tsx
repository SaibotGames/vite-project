import { Flex } from "./style/layout/Flex.style";

const Loader = () => {
  return (
    <Flex $align="center" $justify="center" $height="100vh">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </Flex>
  );
};

export default Loader;
